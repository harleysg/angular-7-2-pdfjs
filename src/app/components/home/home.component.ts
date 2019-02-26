import { Component, OnInit } from '@angular/core';
import { PdfService, PdfArr } from "../../services/pdf.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
    })

export class HomeComponent implements OnInit {

    pdfs:PdfArr[] = [];
    hashPdf:string;
    sessionKeyPdf: string = this.PdfService.getHashPdf();

    constructor(private PdfService:PdfService) { }

    ngOnInit() {
        let body = document.getElementsByTagName('body')[0] as HTMLBodyElement;
        body.classList.remove('on-login');

        this.pdfs = this.PdfService.getPdf();
        var pdfjsLib = window['pdfjs-dist/build/pdf'];
    }

    setStorage(hash){
        this.hashPdf = hash;
        sessionStorage.setItem(this.sessionKeyPdf, this.hashPdf);
    }

}
