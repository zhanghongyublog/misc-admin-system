import { NgModule } from '@angular/core';
import { NbCardModule, NbLayoutModule, NbMenuModule, NbThemeModule, NbSidebarModule } from '@nebular/theme';

import { PagesRoutingModule } from './pages-routing.module';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SmartTableComponent } from './smart-table/smart-table.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    NbThemeModule,
    NbMenuModule,
    NbCardModule,
    NbLayoutModule,
    NbSidebarModule
  ],
  declarations: [
    PagesComponent,
    NotFoundComponent,
    SmartTableComponent
  ],
})
export class PagesModule {
}
