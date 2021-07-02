import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfertyComponent } from './pages/oferty/oferty.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { OfertyInCategoryComponent } from './pages/categories/oferty-in-category/oferty-in-category.component';
import { OfertaDetailsComponent } from './pages/oferty/oferta-details/oferta-details.component';
import { AddOfertaComponent } from './pages/add-oferta/add-oferta.component';
import { ChosenOfertyComponent } from './pages/chosen-oferty/chosen-oferty.component';
import { OfertyInChosenComponent } from './pages/chosen-oferty/oferty-in-chosen/oferty-in-chosen.component';

const routes: Routes = [
  { path: '', redirectTo: '/oferty', pathMatch: 'full' },
  { path: 'oferty', component: OfertyComponent },
  { path: 'oferta/:id', component: OfertaDetailsComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'category/:category', component: OfertyInCategoryComponent },
  { path: 'chosen', component: ChosenOfertyComponent },
  { path: 'chosen/:chosen', component: OfertyInChosenComponent },
  { path: 'add-oferta', component: AddOfertaComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
