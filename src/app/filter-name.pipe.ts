import { Pipe, PipeTransform } from '@angular/core';
import { Associate } from './models/associate';

@Pipe({
  name: 'filterName'
})

export class FilterNamePipe implements PipeTransform {

  transform(items: Associate[], term): any {

    return term
    ? items.filter(item => (item.name.indexOf(term) )!== -1)
    : items;
  }


}
