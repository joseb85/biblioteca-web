import { SelectItem } from "primeng/components/common/selectitem";

export class Util {

    /**
   * Devuelve si un dato está definido y no es nulo.
   * En caso de pasar también un valor se compara si es igual o distinto al dato
   * @param data True si un dato está definido y no es nulo
   * @param val Valor a comparar. En caso de no pasar nada no se compara
   * @param equa True si se compara si es igual (==), false si se compara si son distintos (!=). Por defecto false.
   */
    public static noUndfAndNull(data: any, val?: any, equa: boolean = false) {
        let noUndfAndNull = data != undefined && data != null;
        if (val != undefined && val != null) {
            switch (equa) {
                case true: return noUndfAndNull && val == data;
                default: return noUndfAndNull && val != data;
            }
        }
        return noUndfAndNull;
    }
    
    /**
   * Devuelve un array de SelectItem para cargar un select a partir de una lista de objetos
   * @param lista Lista a convertir en SelectItem
   * @param value Propiedad de los objetos de la lista que será el valor en el select
   * @param label Propiedad de los objetos de la lista que será el label en el select
   * @param items Ítem para añadir
   * @param push False para añadir el ítem por el principio, true para añadir el ítem por el final. Por defecto false
   * @returns Lista de SelectItem para cargar un select
   */
    public static toComboList(lista: any[], value: string, label: string, items?: SelectItem[], push?: boolean) {
        let result: SelectItem[] = [];
        //Creación de la lista
        if (this.noUndfAndNull(lista)) {
            for (let index = 0; index < lista.length; index++) {
                const element = lista[index];
                if (this.noUndfAndNull(element)) {
                    let item: SelectItem;
                    if (value != null && label != null)
                        item = { value: element[value], label: element[label] };
                    else
                        item = { value: element, label: element };
                    result.push(item);
                }
            }
        }
        //Añadir ítem
        if (this.noUndfAndNull(items)) {
            if (this.noUndfAndNull(push) && push)
                result.concat(items);
            else
                result = items.concat(result);
        }
        return result;
    }
}
