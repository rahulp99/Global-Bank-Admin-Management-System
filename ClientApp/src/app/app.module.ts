import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminLoginService } from './services/admin-login.service';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LayoutComponent } from './components/shared/layout/layout.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { FooteronlylayoutComponent } from './components/shared/footeronlylayout/footeronlylayout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BranchesListComponent } from './components/branches/branches-list/branches-list.component';
import { EditBranchComponent } from './components/branches/edit-branch/edit-branch.component';
import { AddBranchComponent } from './components/branches/add-branch/add-branch.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    PageNotFoundComponent,
    DashboardComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    FooteronlylayoutComponent,
    BranchesListComponent,
    EditBranchComponent,
    AddBranchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule,
    CommonModule
  ],
  providers: [AdminLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
