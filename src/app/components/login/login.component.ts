import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        let body = document.getElementsByTagName('body')[0] as HTMLBodyElement;
        body.classList.add('on-login')
    }

}
