import { AuthenticationService } from './../../../services/authentication.service';
import { ApikhoahocService } from './../../../services/apikhoahoc.service';
import { Component, OnInit, ViewChild, Inject, LOCALE_ID, Injectable } from '@angular/core';
import { Router, RouterModule, ActivatedRoute} from '@angular/router';
import { IonSegment, AlertController} from '@ionic/angular';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

import { Platform } from '@ionic/angular';
import { Observable } from 'rxjs';

import { CalendarComponent } from 'ionic2-calendar/calendar';
import { formatDate } from '@angular/common';

@Component({ 
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],

})
export class SegmentPage implements OnInit {
  isCSS= true; 
  valueSegmento: string;
  maLop;
  // layMaHV = true;
  layDiem: any=[];
  layLichSu: any=[];
  sortLS: any=[];
  sortLopDangHoc: any=[];
  sortLopDaXong: any=[];
  maHocVien;
  sessionID;
  displayedColumns: string[] = ['KiNang', 'Diem'];
  
  @ViewChild(IonSegment, {static: true}) segment: IonSegment;
  // @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    private apikhoahocService: ApikhoahocService,
    private authService: AuthenticationService,
  
  ){}
  

  ngOnInit() {
    this.maLop = this.activatedRoute.snapshot.paramMap.get('maLop');
    console.log(this.maLop);
    this.maHocVien = this.apikhoahocService.maHV;
    console.log(this.maHocVien);
    this.sessionID = this.authService.sessionID;
    console.log(this.sessionID.sessionKey);
   
    
  }
  
  //'lopHoc' là trang đầu tiên được truy cập
  ionViewWillEnter(){ 
    this.segment.value = 'lopHoc';
    

    // console.log(this.sortLS);
    // console.log(this.layLichSu);
     this.getDiem();

    this.getLichSu();

    
  }  
  
  segmentChanged(event){
    // console.log(event)
    this.valueSegmento = event.detail.value; 
    console.log(this.valueSegmento);
    
  }

  async getDiem() {
    await this.apikhoahocService.getDiemById(this.sessionID.sessionKey,this.maHocVien, this.maLop )
      .subscribe(res => {
        
        this.layDiem = [res];
        console.log(this.layDiem);
      }, err => {
        console.log(err);
      });

  }

  async getLichSu() { 
    await this.apikhoahocService.getLopLQById(this.sessionID.sessionKey)
      .subscribe(res => {
        console.log(res.DATA); 
        this.layLichSu = res.DATA;
        this.sortDSLichSu(this.layLichSu);
      }, err => {   
        console.log(err);
      });
  
    
  }
  
  sortDSLichSu(even){ 
    //5: đang học
    //7: đã hoàn thành
    //  console.log(even);
     even.sort((sortMaLop1, sortMaLop2)=>{
      if(sortMaLop1.maLop < sortMaLop2.maLop){
        // return sortMaLop1;
        // console.log(sortMaLop1);
        return this.sortLS.push(sortMaLop1);
      }
      return 0;
      // else if(sortMaLop1.maLop > sortMaLop2.maLop){
      //    return -sortMaLop2;
      //    console.log(-sortMaLop2);
      // } else{
      //   return 0; 
      // }
    });
    return this.sortLS;
    console.log("sort---------", this.sortLS)

     
    //   if(trangThai.maTrangThai === '5'){
    //     // console.log(trangThai);
    //     return this.sortLopDangHoc.push(trangThai);
    //   }
    //   else if(trangThai.maTrangThai === '7'){
    //     // console.log(trangThai);
    //     return this.sortLopDaXong.push(trangThai);
    //   }else{
    //      return 0;
    //   } 
    // });
    // console.log("sort-----maTrangThai----", this.sortLopDangHoc);
    // console.log("sort-----maTrangThai----", this.sortLopDaXong);
    
    // return this.sortLS.push(this.sortLopDangHoc,this.sortLopDaXong );
    // console.log(this.sortLS);
    // this.sortLopDangHoc.sort((TT1:any, TT2:any)=>{
    //   console.log(TT1);
    //   console.log(TT2);
    //   console.log("aaaa",TT1.maLop);
    //   console.log("aaaa",TT2.maLop);
    //   for(let item )
    //   if(TT1.maLop < TT2.maLop){
    //     console.log("sortLopDangHoc:",TT1);
    //     this.sortLopDangHoc.push(TT1);
        
    //   }
    // });
    // console.log(this.sortLopDangHoc);

    // this.sortLopDaXong.sort((TT1:any, TT2:any)=>{
    //   // console.log("aaaa",TT1);
    //   if(TT1.maLop > TT2.maLop){
    //     console.log("sortLopDaXong:",TT1);
    //     return this.sortLopDaXong.push(TT1);
        
    //   }
    //   // return this.sortLopDaXong.push(TT2);
      
    // });
    // console.log(this.sortLopDaXong);



    // this.layLichSu.sort((sortMaLop1, sortMaLop2)=>{
    //   if(sortMaLop1.maLop < sortMaLop2.maLop){
    //     // return sortMaLop1;
    //     console.log(sortMaLop1);
    //     return this.sortLS.push(sortMaLop1);
    //   }
    //   return 0;
    //   // else if(sortMaLop1.maLop > sortMaLop2.maLop){
    //   //    return -sortMaLop2;
    //   //    console.log(-sortMaLop2);
    //   // } else{
    //   //   return 0;
    //   // }
    // });
    // return this.sortLS;
    // console.log("sort---------", this.sortLS)
    

    

  }

  



  // setFiltered(event:any){
  //   const valueFilter = event.target.value;
  //   if(valueFilter && valueFilter.trim() != ''){
  //     // this.layDeCuong = this.layDeCuong.filter((decuong)=>{
  //     //   return (decuong.buoi.indexOf(valueFilter) > -1);
  //     // })
  //     this.layDiem = this.layDiem.filter((diem)=>{
  //       return (diem.KiNang.toLowerCase().indexOf(valueFilter.toLowerCase()) > -1), (diem.Diem.indexOf(valueFilter) > -1);;
  //     })
      
  //   }
  //   else{
  //     this.getDiem();
  //   } 
    
   
  // }

  
}
