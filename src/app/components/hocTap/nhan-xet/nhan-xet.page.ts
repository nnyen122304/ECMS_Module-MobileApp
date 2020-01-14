import { AuthenticationService } from './../../../services/authentication.service';
import { ApikhoahocService } from './../../../services/apikhoahoc.service';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute} from '@angular/router';
import { LoadingController , IonSegment, AlertController} from '@ionic/angular';

@Component({
  selector: 'app-nhan-xet',
  templateUrl: './nhan-xet.page.html',
  styleUrls: ['./nhan-xet.page.scss'],
})
export class NhanXetPage implements OnInit {
  maLop;
  maHocVien;
  sessionID;
  layNhanXet: any=[];
  constructor(
    private apikhoahocService:ApikhoahocService,
    private router: Router, 
    private loadingController: LoadingController,
    private activatedRoute: ActivatedRoute,
    private authService: AuthenticationService
  ) { }
 
  ngOnInit() {
    this.maLop = this.activatedRoute.snapshot.paramMap.get('maLop')
    this.maHocVien = this.apikhoahocService.maHV
    this.sessionID = this.authService.sessionID;
    console.log(this.maHocVien)
    console.log(this.sessionID );
    console.log(this.maLop ); 

    this.getNX(); 
  } 

  async getNX() {
    // const loading = await this.loadingController.create({
    //   message: 'Loading'
    // });
    // await loading.present();
    
     
    await this.apikhoahocService.getNhanXetById(this.sessionID.sessionKey,this.maHocVien, this.maLop )
      .subscribe(res => {
        console.log(res.DATA);
        this.layNhanXet = res.DATA;
        // loading.dismiss();
      }, err => {
        console.log(err);
        // loading.dismiss();
      });

  }
  

}
