import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/core/service/login/login.service';
import { Login } from './login-layout.interface';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginLayoutComponent {
    payload: Login = {
        username: null,
        password: null
    };
    form: FormGroup;
    readonly login$ = this.loginService.login(this.payload)
    constructor(
        public formBuilder: FormBuilder,
        private loginService: LoginService
    ){
        this.form = this.formBuilder.group({
            username: null,
            password: null
        })
    }

    onLogin(){

    }
}
