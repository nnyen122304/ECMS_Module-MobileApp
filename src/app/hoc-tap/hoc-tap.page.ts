import { AuthenticationService } from './../services/authentication.service';
import { ApikhoahocService } from './../services/apikhoahoc.service';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute} from '@angular/router';
import { ToastController,  AlertController, ModalController, LoadingController } from '@ionic/angular';

 
@Component({
  selector: 'app-hoc-tap',
  templateUrl: './hoc-tap.page.html',
  styleUrls: ['./hoc-tap.page.scss'],
})
export class HocTapPage implements OnInit {
  layLopLQ: any=[];
  sessionID;
  maHocVien;
  isLopCuaToi = false;
  constructor( 
    private router: Router, 
    private apikhoahocService :ApikhoahocService, 
    private loadingController: LoadingController,
    private activatedRoute: ActivatedRoute,
    private authService:AuthenticationService,
    public alertController: AlertController
  ) { } 
  
  
  ngOnInit() { 
    console.log("ngOnInit_Start");
  } 
  

  
  ionViewWillEnter(){
    this.sessionID = this.authService.sessionID;
    // console.log(this.sessionID.sessionID);
    
    console.log("ionViewWillEnter");
   
    this.getLopLienQuan();
  }

  ionViewDidEnter(){
    // this.getLopLienQuan();
    console.log(" ionViewDidEnter_Start");

  }
  

  
  ionViewWillLeave(){console.log(" ionViewWillLeave_Start");}
   
   
  ionViewDidLeave(){console.log("ionViewDidLeave_Start");}
  
  
  async getLopLienQuan() {    
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present()
    await this.apikhoahocService.getLopLQById(this.sessionID.sessionKey)//10020:username
      .subscribe(res => { 
        console.log(res.DATA);
        this.layLopLQ = res.DATA;
        loading.dismiss();
      }, err => {   
        console.log(err);
        loading.dismiss();
      });

    
  }

  goSegment(LopLQ){
    this.apikhoahocService.maHV = LopLQ.maHocVien;
    // console.log(this.apikhoahocService.maHV);
    this.router.navigate([`/menu-tabs/hoc-tap/segment/${LopLQ.maLop}`]);
    
  }

  async presentAlert(header, message) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: [{
          text: 'OK',
          // handler: () => {
          //   this.router.navigate(['/dang-nhap']);
          // } 
        }]
    });

    await alert.present();
  }

}
 