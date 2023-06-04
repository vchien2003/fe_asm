import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { DashboardPageComponent } from './pages/admin/dashboard-page/dashboard-page.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { ProductListComponent } from './components/admin/product-list/product-list.component';
import { ProductPageComponent } from './pages/admin/product-page/product-page.component';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, DashboardPageComponent,  AdminLayoutComponent, BaseLayoutComponent, ProductListComponent, ProductPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
