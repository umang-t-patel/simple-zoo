import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlocksComponent } from './components/blocks/blocks.component';
import { ListComponent } from './components/list/list.component';
import { HomeComponent } from './components/home/home.component';
import { AnimalDescriptionComponent } from './components/animal-description/animal-description.component';

const appRoutes: Routes = [
  {
    path:'',
    component: HomeComponent,
  },
  {
    path:'blocks',
    component: BlocksComponent,
  },
  {
    path:'list',
    component: ListComponent,
  },
  {
    path: 'animals/:name',
    component: AnimalDescriptionComponent,
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule{}
