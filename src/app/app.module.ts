import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from '@pages/home/home.component';
import { AboutComponent } from '@pages/about/about.component';
import { ProductsComponent } from '@pages/products/products.component';
import { SearchComponent } from '@pages/search/search.component';
import { NotFoundComponent } from '@pages/not-found/not-found.component';

import { HeaderComponent } from '@shared/header/header.component';
import { FooterComponent } from '@shared/footer/footer.component';
import { CardsComponent } from '@shared/cards/cards.component';
import { TodoComponent } from '@shared/todo/todo.component';
import { CategoriesComponent } from '@shared/categories/categories.component';
import { CtaComponent } from '@shared/cta/cta.component';
import { TitleComponent } from '@shared/title/title.component';
import { PromoComponent } from './shared/promo/promo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    CardsComponent,
    TodoComponent,
    ProductsComponent,
    CategoriesComponent,
    CtaComponent,
    TitleComponent,
    SearchComponent,
    NotFoundComponent,
    PromoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
