import { Component, OnInit, OnDestroy } from '@angular/core';
import { PdfService } from "../../services/pdf.service";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
  })
export class ViewerComponent implements OnInit, OnDestroy {

    params:any;
    currentPdf: string;

    constructor(private PdfService: PdfService, private ruteInput: ActivatedRoute) {
        this.params = this.ruteInput;
        this.currentPdf = sessionStorage.getItem(PdfService.getHashPdf());
    }

    ngOnInit() {
      const head = <HTMLDivElement> document.head;
      const viewerElm = document.getElementById('idMainViewer') ? document.getElementById('idMainViewer') as HTMLMainElement : null;

      this.loadScript(head, 'assets/multimedia/pdf/build/pdf.js');
      this.loadLink(head, 'assets/multimedia/pdf/locale/locale.properties', 'application/l10n', 'resource', '')
      this.loadLink(viewerElm, 'assets/multimedia/pdf/viewer.css', '', 'stylesheet', '_viewercss')
      this.loadScript(head, 'assets/multimedia/pdf/l10n.js');
      setTimeout(() => {
          window['namePdf'] = 'assets/multimedia/pdf/'+this.currentPdf+'/'+this.currentPdf+'.pdf';
          setTimeout(() => this.loadPdf(), 2000);
      }, 1000);
    }
    ngOnDestroy(){
        console.log('me fui');
        const body = <HTMLDivElement> document.body;
        const fileInput = document.getElementById('fileInput') as HTMLInputElement;
        if(fileInput) body.removeChild(fileInput);
    }

    public loadScript(context: Element ,url: string, id?: string) {
        const script = document.createElement('script');
        script.innerHTML = '';
        script.src = url;
        script.async = false;
        script.defer = true;
        id ? script.id = id : null;

        context.appendChild(script);
        // context.insertAdjacentElement("afterbegin",script);
    }

    public loadLink(context: Element, url: string, type: string, rel: string, id?:string, ) {
        const link = document.createElement('link');
        link.innerHTML = '';
        link.href = url;
        link.type = type;
        link.rel = rel;
        id ? link.id = id : null;

        context.appendChild(link);
    }

    loadPdf(){
      const viewerElm = document.getElementById('idMainViewer') as HTMLMainElement;
      this.loadScript(viewerElm, 'assets/multimedia/pdf/viewer.js', '_viewerJs');
    }
}
