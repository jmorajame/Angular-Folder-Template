import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/login' },
    {
        path: 'app',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: MainLayoutComponent,
        children: [
            
        ]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
