import { Component, OnInit } from '@angular/core';
import { PdfServiceService, PdfArr } from "../../services/pdf-service.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
    })
    export class HomeComponent implements OnInit {

    pdfs:PdfArr[] = []
    constructor(private pdfService:PdfServiceService) { }

    ngOnInit() {
        let body = document.getElementsByTagName('body')[0] as HTMLBodyElement;
        body.classList.remove('on-login');

        this.pdfs = this.pdfService.getPdf()
    }

}
