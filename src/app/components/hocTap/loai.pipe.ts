import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'loai'
})
export class LoaiPipe implements PipeTransform {

  transform( layLichSu: any[], lichSu:any): any {
    
    // return layLichSu.sort((a:any,b:any)=>{
    //    if (a.maLop < b.maLop)

    //     return a.maLop;
    //   // if (a.maLop > b.maLop)
    //   //   return -lichSu;
    //   return 0;
    // });
  }

} 
