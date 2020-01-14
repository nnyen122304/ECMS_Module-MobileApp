import { ApikhoahocService } from './../../../services/apikhoahoc.service';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute} from '@angular/router';
import { LoadingController , IonSegment, AlertController} from '@ionic/angular';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-de-cuong',
  templateUrl: './de-cuong.page.html',
  styleUrls: ['./de-cuong.page.scss'],
}) 
export class DeCuongPage implements OnInit {
  maLop;
  maKhoa;
  layDeCuong: any=[];
  displayedColumns: string[] = ['buoi', 'chuDe'];
  isCSS= true;

  constructor(
    private router: Router, 
    private apikhoahocService:ApikhoahocService ,
    private loadingController: LoadingController,
    private activatedRoute: ActivatedRoute,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    this.maKhoa = this.activatedRoute.snapshot.paramMap.get('maKhoa');
    this.maLop = this.activatedRoute.snapshot.paramMap.get('maLop');
    console.log(this.maLop);
    this.getDeCuong();
  }
//  (KID/Teen 1/10 . đang giảng dạy)
  async getDeCuong() {
    await this.apikhoahocService.getDeCuongById(this.maLop)
      .subscribe(res => {
        console.log(res.DATA);
        this.layDeCuong = res.DATA;
      }, err => { 
        console.log(err);
      });
  }

  setFiltered(event:any){
    const valueFilter = event.target.value;
    if(valueFilter && valueFilter.trim() != ''){
      // this.layDeCuong = this.layDeCuong.filter((decuong)=>{
      //   return (decuong.buoi.indexOf(valueFilter) > -1);
      // })
      this.layDeCuong = this.layDeCuong.filter((decuong)=>{
        return (decuong.chuDe.toLowerCase().indexOf(valueFilter.toLowerCase()) > -1), (decuong.buoi.indexOf(valueFilter) > -1);;
      })
      
    }
    else{
      this.getDeCuong();
    } 
    
   
  }
}
 