import { NgModule } from "@angular/core";
import { SharedLibsModule } from "./shared-libs.module";
import { SharedCommonModule } from "./shared-common.module";
import { FilterBooksComponent } from "./components/filter-books/filter-books.component";

@NgModule({
  declarations: [FilterBooksComponent],
  imports: [SharedCommonModule, SharedLibsModule],
  exports: [FilterBooksComponent]
})
export class SharedModule {}
