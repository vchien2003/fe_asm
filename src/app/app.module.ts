import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { DashboardPageComponent } from './pages/admin/dashboard-page/dashboard-page.component';
import { CategoriesPageComponent } from './pages/admin/categories-page/categories-page.component';
import { CategoryAddComponent } from './pages/admin/category-add/category-add.component';
import { CategoryUpdateComponent } from './pages/admin/category-update/category-update.component';
import { CategoryListComponent } from './components/admin/category-list/category-list.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, DashboardPageComponent, CategoriesPageComponent, CategoryAddComponent, CategoryUpdateComponent, CategoryListComponent, AdminLayoutComponent, BaseLayoutComponent],
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
