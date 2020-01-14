import { ApikhoahocService } from './../services/apikhoahoc.service';
import { Component } from '@angular/core';
import { Router, RouterModule, ActivatedRoute} from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  layKhoa01 : any=[];
  layKhoa02 : any=[];
  isCSS= true;
 
  constructor(
    private router: Router, 
    private apikhoahocService :ApikhoahocService, 
    private loadingController: LoadingController
  ) {}
   
  ngOnInit() {
    
    this.getKhoa01();
    this.getKhoa02();

  }

  async getKhoa01() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    await this.apikhoahocService.getKhoaChieuSinh('01')
      .subscribe(res => {
        console.log(res);
        this.layKhoa01 = res;
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
    await this.apikhoahocService.getKhoaChieuSinh('02')
      .subscribe(res => {
        console.log(res);
        this.layKhoa02 = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      }); 
  }


  







  
  
}
