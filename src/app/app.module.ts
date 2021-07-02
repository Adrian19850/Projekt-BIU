import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { OfertaCoverComponent } from './shared/oferta-cover/oferta-cover.component';
import { OfertaDetailsComponent } from './pages/oferty/oferta-details/oferta-details.component';
import { OfertyComponent } from './pages/oferty/oferty.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { OfertyInCategoryComponent } from './pages/categories/oferty-in-category/oferty-in-category.component';
import { AppRoutingModule } from './app-routing.module';
import { AddOfertaComponent } from './pages/add-oferta/add-oferta.component';
import { FormsModule } from '@angular/forms';
import { AcceptedOfertyComponent } from './pages/accepted-oferty/accepted-oferty.component';
import { ChosenOfertyComponent } from './pages/chosen-oferty/chosen-oferty.component';
import { OfertyInChosenComponent } from './pages/chosen-oferty/oferty-in-chosen/oferty-in-chosen.component';

@NgModule({
  declarations: [
    AppComponent,
    OfertaDetailsComponent,
    OfertyComponent,
    CategoriesComponent,
    PageNotFoundComponent,
    OfertyInCategoryComponent,
    OfertaCoverComponent,
    AddOfertaComponent,
    AcceptedOfertyComponent,
    ChosenOfertyComponent,
    OfertyInChosenComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
