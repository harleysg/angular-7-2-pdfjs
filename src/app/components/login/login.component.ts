import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    user = {username: '', password: ''};

    constructor(public router: Router) { }

    ngOnInit() {
        let body = document.getElementsByTagName('body')[0] as HTMLBodyElement;
        body.classList.add('on-login');
    }

    onSubmit(f: NgForm) {
        console.log(f.value);
        if(this.user.username == 'user' && this.user.password == '123456'){
            this.router.navigate(['home']);
        }
        else
        {
            this.router.navigate(['']);
            alert('user o password invalid')
        }
    }

}
