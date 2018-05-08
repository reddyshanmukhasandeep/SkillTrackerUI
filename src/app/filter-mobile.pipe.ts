import { Pipe, PipeTransform } from '@angular/core';
import { Associate } from './models/associate';

@Pipe({
  name: 'filterMobile'
})
export class FilterMobilePipe implements PipeTransform {


  transform(items: Associate[], term): any {

    return term
    ? items.filter(item => (item.mobile.indexOf(term) )!== -1)
    : items;
  }
}
