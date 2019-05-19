import { WINDOW_PROVIDERS } from "./services/window.service";
import { FotoService } from "./services/foto.service";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RequestHttpService } from "./services/request-http.service";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [RequestHttpService, FotoService, WINDOW_PROVIDERS]
})
export class CoreModule {}
