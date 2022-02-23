import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { LabeLComponent } from './label/label.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'table',
      component: SmartTableComponent,
    },
    {
      path: 'label',
      component: LabeLComponent,
    },
    {
      path: '',
      redirectTo: 'table',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
