import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'excerpt'
    })
    export class ExcerptPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        let nameNew = ``;
        var prhaseLenght = 40;

        if(value.length <= prhaseLenght){
            nameNew = value;
        }else{
            [].slice.call(value).map(function (elem, i) {
                if(i <= prhaseLenght){
                    nameNew += elem;
                }
            })

        }
        return nameNew;
    }

}
