import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
    })

export class PdfService {

    private pdfList: PdfArr[] = [
        {
            id: 1,
            hash: '01_LULELEDST2',
            name: 'La universidad latinoamericana en la encrucijada de sus tendencias'
        },
        {
            id: 2,
            hash: '02_LMUEAL2',
            name: 'LOS NUEVOS MODELOS UNIVERSITARIOS EN AMÉRICA LATINA_2'
        },
        {
            id: 3,
            hash: '03_LUSF2',
            name: 'LA UNIVERSIDAD SIN FRONTERAS_2'
        },
        {
            id: 4,
            hash: '04_LRDLVDLU2',
            name: 'LA REFORMA DE LA VIRTUALIZACIÓN DE LA UNIVERSIDAD_2'
        },
        {
            id: 5,
            hash: '05_LTRDLESELAL2',
            name: 'LA TERCERA REFORMA DE LA EDUCACIÓN SUPERIOR EN LA AMÉRICA LATINA_2'
        },
        {
            id: 6,
            hash: '06_LRDLIDEADEAL2',
            name: 'LA REINGENIERÍA DE LAS INSTITUCIONES DE EDUCACIÓN A DISTANCIA EN AMÉRICA LATINA_2'
        },
        {
            id: 7,
            hash: '07_LMUL2',
            name: 'LAS MUTACIONES UNIVERSITARIAS LATINOAMERICANAS_2'
        },
        {
            id: 8,
            hash: '08_LPEALYECELSDC2',
            name: 'LOS POSTGRADOS EN AMÉRICA LATINA Y EL CARIBE EN LA SOCIEDAD DEL CONOCIMIENTO_2'
        },
        {
            id: 9,
            hash: '09_PYFDLUL2',
            name: 'PRESENTES Y FUTUTOS DE  LA UNIVERSIDAD LATINOAMERICANA_2'
        },
        {
            id: 10,
            hash: '10_PTYT2',
            name: 'POLITICAS TENSIONES Y TENDENCIAS_2'
        },
        {
            id: 11,
            hash: '11_LRUEAL',
            name: 'LA REGIONALIZACIÓN UNIVERSITARIA EN AMERICA LATINA'
        },
        {
            id: 12,
            hash: '12_LNFDLUPEAL',
            name: 'LA NUEVA FASE DE LA UNIVERSIDAD PRIVADA EN AMERICA LATINA'
        },
        {
            id: 13,
            hash: '13_LPDFDLESELCEDAL',
            name: 'La problemática del financiamiento de la educación superior en la crisis económica de América Latina'
        }
    ];
    public pdfHash: string = '_hashPdf'; // SessionStorage Key name

    constructor() { }

    getPdf(){
        return this.pdfList;
    }
    getHashPdf(){
        return this.pdfHash;
    }
}

export interface PdfArr{
    id: number,
    hash: string,
    name: string
}
