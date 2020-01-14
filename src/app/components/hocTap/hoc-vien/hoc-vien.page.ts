import { AuthenticationService } from './../../../services/authentication.service';
import { ApikhoahocService } from './../../../services/apikhoahoc.service';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute} from '@angular/router';
import { LoadingController , IonSegment, AlertController} from '@ionic/angular';

@Component({
  selector: 'app-hoc-vien',
  templateUrl: './hoc-vien.page.html',
  styleUrls: ['./hoc-vien.page.scss'],
})
export class HocVienPage implements OnInit {
  layHocVien: any=[];
  sessionID;
  maLop;
  maHocVien;

  constructor(
    private apikhoahocService:ApikhoahocService,
    private router: Router, 
    private loadingController: LoadingController,
    private activatedRoute: ActivatedRoute,
    private authService: AuthenticationService
  ) {}

  ngOnInit() { 
    this.sessionID = this.authService.sessionID;
    this.maLop = this.activatedRoute.snapshot.paramMap.get('maLop');
    this.maHocVien = this.apikhoahocService.maHV;
    console.log(this.sessionID.sessionKey);
    console.log(this.maHocVien);
    // console.log(this.maLop);
    this.apikhoahocService.getHocVienById(this.sessionID.sessionKey, this.maHocVien)
      .subscribe(res => {
        console.log(res);
        this.layHocVien = [res];
      }, err => {
        console.log(err);  
      });
  } 
 
  

 
 
}
