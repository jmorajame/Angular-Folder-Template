import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SharedModule } from '../shared/shared.module';
import { LoginLayoutComponent } from './login-layout/login-layout.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginLayoutComponent,
    },
];

@NgModule({
    declarations: [
        LoginLayoutComponent,
        MainLayoutComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes)
    ],
})
export class LayoutModule {}
