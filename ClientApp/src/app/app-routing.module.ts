import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { AuthGuard } from './services/auth.guard';
import { FooteronlylayoutComponent } from './components/shared/footeronlylayout/footeronlylayout.component';
import { LayoutComponent } from './components/shared/layout/layout.component';
import { BranchesListComponent } from './components/branches/branches-list/branches-list.component';
import { EditBranchComponent } from './components/branches/edit-branch/edit-branch.component';

const routes: Routes = [
  {
    path:'login',
    component: FooteronlylayoutComponent,
    children: [
      { path: '', component: AdminLoginComponent },
    ]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path:'dashboard',
    component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent }
    ],
    canActivate:[AuthGuard]
  },

  {
    path:'branch',
    component: LayoutComponent,
    children: [
      { path: '', component: BranchesListComponent },
      { path: 'deletebranch/:id', component: EditBranchComponent }
    ],
    canActivate:[AuthGuard]
  },
  {
    path:"**",
    component: LayoutComponent,
    children: [
      { path: '', component: PageNotFoundComponent }
    ] 
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
