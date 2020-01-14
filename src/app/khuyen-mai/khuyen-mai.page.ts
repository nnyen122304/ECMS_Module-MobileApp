import { ApikhoahocService } from './../services/apikhoahoc.service';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute} from '@angular/router';
import { ToastController,  AlertController, ModalController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-khuyen-mai',
  templateUrl: './khuyen-mai.page.html',
  styleUrls: ['./khuyen-mai.page.scss'],
})
export class KhuyenMaiPage implements OnInit {
  layUuDai;
  constructor(
    private apikhoahocService: ApikhoahocService
  ) { }

  ngOnInit() {  
    this.getUuDaiKhoaHoc();
  }

  async getUuDaiKhoaHoc() {
    await this.apikhoahocService.getUuDai()
      .subscribe(res => {
        console.log(res.DATA);
        this.layUuDai = res.DATA;
      }, err => {   
        console.log(err); 
      });
  
    
  }

}
