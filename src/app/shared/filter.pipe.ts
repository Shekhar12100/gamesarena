import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {



  transform(items: any, searchText: string): any {

    if(!items || !searchText) {
      return items
    }

    searchText = searchText.toLocaleLowerCase();
    console.log(searchText);

    // return items.filter(data =>
    //   data.title.toLocaleLowerCase().includes(searchText)
    // );

    return items.filter(function (d: any) {
      return d.title?.toLowerCase().includes(searchText)
    });


  }

}
