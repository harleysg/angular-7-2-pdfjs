import { Component, OnInit } from '@angular/core';
import { PdfService, PdfArr } from "../../services/pdf.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
    })
    export class HomeComponent implements OnInit {

    pdfs:PdfArr[] = []
    constructor(private PdfService:PdfService) { }

    ngOnInit() {
        let body = document.getElementsByTagName('body')[0] as HTMLBodyElement;
        body.classList.remove('on-login');

        this.pdfs = this.PdfService.getPdf()
    }

}
