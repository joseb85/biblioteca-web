import { Tag } from "./../../../core/models/tag.model";
import { Genero } from "./../../../core/models/genero.model";
import { Coleccion } from "./../../../core/models/coleccion.model";
import { Util } from "./../../../core/utils/util";
import { Autor } from "./../../../core/models/autor.model";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { RequestHttpService } from "src/app/core/services/request-http.service";
import { Subscription } from "rxjs";
import { SelectItem } from "primeng/components/common/selectitem";
import { REQUEST } from "src/app/core/utils/server.constants";
import { TranslateService } from "@ngx-translate/core";
import * as _ from "lodash";

@Component({
  selector: "app-filter-books",
  templateUrl: "./filter-books.component.html",
  styleUrls: ["./filter-books.component.scss"]
})
export class FilterBooksComponent implements OnInit, OnDestroy {
  private subscripciones: Subscription[] = [];
  private autores: Autor[];
  optionsAutores: SelectItem[];
  optionsColecciones: SelectItem[];
  optionsContinentes: SelectItem[];
  optionsGeneros: SelectItem[];
  optionsLecturas: SelectItem[];
  optionsPaises: SelectItem[];
  optionsSexos: SelectItem[];
  optionsTags: SelectItem[];

  constructor(
    private requestHttpService: RequestHttpService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    //Evitamos el forkJoin para un mejor rendimiento en la carga. Llamamos en orden de la petición que más va a tardar a la que menos
    this.initComboAutores();
    this.initComboColecciones();
    this.initComboTags();
    this.initComboGeneros();
    this.initCombosLecturas();
  }

  /**
   * Solicita los autores al servidor, carga el combo de autores y filtra los datos de los autores para cargar los combos de países, continentes y sexos
   */
  private initComboAutores(): void {
    this.subscripciones[0] = this.requestHttpService
      .doGet(REQUEST.autor.findAll)
      .subscribe((result: Autor[]) => {
        this.autores = result;
        this.optionsAutores = Util.toComboList(result, "id", "nombre", [
          {
            label: this.translate.instant("LIBROS.BIBLIOTECA.todos"),
            value: undefined
          }
        ]);
        this.initCombosPropiedadesDeAutor();
      });
  }

  /**
   * Solicita las colecciones al servidor y carga el combo de colecciones
   */
  private initComboColecciones(): void {
    this.subscripciones[1] = this.requestHttpService
      .doGet(REQUEST.coleccion.findAll)
      .subscribe((result: Coleccion[]) => {
        this.optionsColecciones = Util.toComboList(result, "id", "nombre", [
          {
            label: this.translate.instant("LIBROS.BIBLIOTECA.todos"),
            value: undefined
          }
        ]);
      });
  }

  /**
   * Solicita los géneros al servidor y carga el combo de géneros
   */
  private initComboGeneros(): void {
    this.subscripciones[2] = this.requestHttpService
      .doGet(REQUEST.genero.findAll)
      .subscribe((result: Genero[]) => {
        this.optionsGeneros = Util.toComboList(result, "id", "nombre", [
          {
            label: this.translate.instant("LIBROS.BIBLIOTECA.todos"),
            value: undefined
          }
        ]);
      });
  }

  /**
   * Solicita los tags al servidor y carga el combo de tags
   */
  private initComboTags(): void {
    this.subscripciones[3] = this.requestHttpService
      .doGet(REQUEST.tag.findAll)
      .subscribe((result: Tag[]) => {
        this.optionsTags = Util.toComboList(result, "id", "nombre", [
          {
            label: this.translate.instant("LIBROS.BIBLIOTECA.todos"),
            value: undefined
          }
        ]);
      });
  }

  /**
   * Solicita el año más antiguo de lectura y carga los dos combos de años de lectura con el rango desde el año recibido y el año actual
   */
  private initCombosLecturas(): void {
    this.subscripciones[4] = this.requestHttpService
      .doGet(REQUEST.lectura.minYear)
      .subscribe((result: number) => {
        // this.minAgno = result;
        // this.datosRango = new RangeCombosData(
        //   result,
        //   new Date().getFullYear(),
        //   null,
        //   new Date().getFullYear(),
        //   { label: this.translate.instant("COMUN.anterior"), value: null }
        // );
      });
  }

  /**
   * Carga los combos dependientes de los autores (países, continentes y sexos)
   */
  private initCombosPropiedadesDeAutor(): void {
    if (Util.noUndfAndNull(this.autores)) {
      let paises = _.uniqBy(_.map(this.autores, "pais"), "id");
      let continentes = _.uniq(_.map(paises, "continente"));
      this.optionsPaises = Util.toComboList(paises, "id", "nombre", [
        {
          label: this.translate.instant("LIBROS.BIBLIOTECA.todos"),
          value: undefined
        },
        {
          label: this.translate.instant("LIBROS.BIBLIOTECA.desconocido"),
          value: null
        }
      ]);
      this.optionsContinentes = Util.toComboList(continentes, null, null, [
        {
          label: this.translate.instant("LIBROS.BIBLIOTECA.todos"),
          value: undefined
        },
        {
          label: this.translate.instant("LIBROS.BIBLIOTECA.desconocido"),
          value: null
        }
      ]);
      this.optionsSexos = [
        {
          label: this.translate.instant("LIBROS.BIBLIOTECA.todos"),
          value: undefined
        },
        {
          label: this.translate.instant("LIBROS.BIBLIOTECA.desconocido"),
          value: null
        },
        { label: this.translate.instant("COMUN.hombre"), value: "H" },
        { label: this.translate.instant("COMUN.mujer"), value: "M" }
      ];
    }
  }

  public clean() {}

  /**
   * Destruye todas las subscripciones activas
   */
  ngOnDestroy() {
    for (let i = 0; i < this.subscripciones.length; i++) {
      if (Util.noUndfAndNull(this.subscripciones[i]))
        this.subscripciones[i].unsubscribe();
    }
  }
}
