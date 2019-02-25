import { Component, OnInit } from '@angular/core';
import { PdfService } from "../../services/pdf.service";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
    selector: 'app-viewer',
    templateUrl: './viewer.component.html',
    styleUrls: ['./viewer.component.scss']
    })
    export class ViewerComponent implements OnInit {

    params:any;

    constructor(private PdfService: PdfService, private ruteInput: ActivatedRoute) {
        this.params = this.ruteInput;
        console.log(this.params.params);
        console.log(this.params.params._value.name);

    }

    ngOnInit() {
        const head = <HTMLDivElement> document.head;
        const body = <HTMLDivElement> document.body;
        this.loadScript(head, '//booksandbooksdigital.com.co/pdfviewer//build/pdf.js');
        this.loadLink(head, '//booksandbooksdigital.com.co/pdfviewer/locale/locale.properties', 'application/l10n', 'resource')
        this.loadScript(head, '//booksandbooksdigital.com.co/pdfviewer/l10n.js');
    }
    public loadScript(context: Element ,url: string) {
        const script = document.createElement('script');
        script.innerHTML = '';
        script.src = url;
        script.async = false;
        script.defer = true;

        context.appendChild(script);
        // context.insertAdjacentElement(
        //     "afterbegin",
        //     script
        // );
    }

    public loadLink(context: Element, url: string, type: string, rel: string) {
        const link = document.createElement('link');
        link.innerHTML = '';
        link.href = url;
        link.type = type;
        link.rel = rel;

        context.appendChild(link);
    }

    getparams(){
    }

}
