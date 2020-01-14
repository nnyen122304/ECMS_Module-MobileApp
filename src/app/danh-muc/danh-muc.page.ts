import { ApikhoahocService } from './../services/apikhoahoc.service';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute} from '@angular/router';
import { LoadingController, AlertController} from '@ionic/angular';

@Component({
  selector: 'app-danh-muc',
  templateUrl: './danh-muc.page.html',
  styleUrls: ['./danh-muc.page.scss'],
})
export class DanhMucPage implements OnInit {

  layKhoa01 : any=[];
  layKhoa02 : any=[];
  isCSS= true; 

  // filterKhoa: any=[];
  
  constructor(
    private router: Router, 
    private apikhoahocService :ApikhoahocService, 
    private loadingController: LoadingController,
    public alertController: AlertController
  ) {}
   
  ngOnInit() { 
    console.log("Đã về trang chủ");
    this.getKhoa01();
    this.getKhoa02();
    // this.initializeItems();
  }
   
   
  async getKhoa01() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    await this.apikhoahocService.getKhoaChieuSinh('4')
      .subscribe(res => {
        console.log(res.DATA);
        this.layKhoa01 = res.DATA; 
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
 
 
  async getKhoa02() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    await this.apikhoahocService.getKhoaChieuSinh('5')
      .subscribe(res => {
        console.log(res.DATA);
        this.layKhoa02 = res.DATA; 
        loading.dismiss();
      }, err => { 
        console.log(err);
        loading.dismiss();
      });
  }

  isTrangThai(khoa){
    this.apikhoahocService.layKhoa =khoa;
    console.log(this.apikhoahocService.layKhoa) ;
    this.apikhoahocService.trangThai = khoa.tenTrangThai;
    this.router.navigate([`/menu-tabs/danh-muc/lop/${khoa.maKhoa}`]);
    
  }  


  // initializeItems() {
  //   this.filterKhoa = this.layKhoa01;
  //   console.log(this.filterKhoa);
  //   this.filterKhoa = this.layKhoa02;
  //   console.log(this.filterKhoa);
  // }

  // // chuyển từ có dấu sang hk dấu
  // removeAccents(str) {
  //   return str.normalize('NFD')
  //             .replace(/[\u0300-\u036f]/g, '')
  //             .replace(/đ/g, 'd').replace(/Đ/g, 'D');
  // }

  // setFiltered(event:any){
  //   // this.initializeItems();
  //   const valueFilter = event.target.value;
  //   if (!valueFilter) {
  //     return;
  //   }

  //   this.filterKhoa = this.layKhoa01.filter(item => {
  //     if (item.filterKhoa && valueFilter) {
  //       if (item.filterKhoa.toLowerCase().indexOf(valueFilter.toLowerCase()) > -1) {
  //         return (item.filterKhoa.toLowerCase().indexOf(valueFilter.toLowerCase()) > -1);
  //       }
  //       return false;
  //     }
  //   });

  //   this.filterKhoa = this.layKhoa02.filter(item => {
  //     if (item.filterKhoa && valueFilter) {
  //       if (item.filterKhoa.toLowerCase().indexOf(valueFilter.toLowerCase()) > -1) {
  //         return (item.filterKhoa.toLowerCase().indexOf(valueFilter.toLowerCase()) > -1);
  //       }
  //       return false;
  //     }
  //   });

  // }
  // setFiltered(event:any){
  //   const valueFilter = event.target.value;
  //   const search = this.removeAccents(valueFilter.toLowerCase());
  //   console.log(search);
  //   this.layTenKhoa = this.layKhoa01;
    
  //   for (let item of this.layTenKhoa){
  //     this.removeAccents(item.tenKhoa);
  //     console.log(this.layTenKhoa);
  //   }
  
  //   if(valueFilter && valueFilter.trim() != ''){

  //     this.layKhoa01 = this.layTenKhoa.filter((khoa)=>{
  //       this.layTenKhoa = this.removeAccents(khoa.tenKhoa);

  //       // console.log(this.removeAccents(this.layTenKhoa));

  //       // console.log(this.apikhoahocService.removeAccents("Nguyễn Ngọc Yến"));
  //       return (khoa.tenKhoa.toLowerCase().indexOf(search) > -1);
  //     })

  //     this.layKhoa02 = this.layKhoa02.filter((khoa)=>{
  //       return (khoa.tenKhoa.toLowerCase().indexOf(valueFilter.toLowerCase()) > -1);
        
  //     })
  //   }
  //   else{
  //     this.getKhoa01();
  //     this.getKhoa02();
  //   }

    
      

  // }

  

}
