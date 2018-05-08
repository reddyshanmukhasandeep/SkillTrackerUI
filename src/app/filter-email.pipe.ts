import { Pipe, PipeTransform } from '@angular/core';
import { Associate } from './models/associate';

@Pipe({
  name: 'filterEmail'
})
export class FilterEmailPipe implements PipeTransform {


  transform(items: Associate[], term): any {

    return term
    ? items.filter(item => (item.email.indexOf(term) )!== -1)
    : items;
  }
}
