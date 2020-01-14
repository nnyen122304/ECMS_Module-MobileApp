import { LopPage } from './../lop/lop.page';
import { AuthenticationService } from './../../../services/authentication.service';
// import { AuthService } from './../../../services/auth.service';
import { DangKiXepLop } from './../dangKiXepLop';
import { ApikhoahocService } from './../../../services/apikhoahoc.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, AlertController, NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-thithu',
  templateUrl: './thithu.page.html',
  styleUrls: ['./thithu.page.scss'],
})
export class ThithuPage implements OnInit {
  isDisabled = false;
  maLop;
  sessionID;
  userInfoThiXL;
  layLop;
  layKhoa;
  dkThiXL : any=[];

  trangDangKi = {
    username: '',
    tenKhoa: '',
    tenLop: '',
    SDT: ''
  }; 
  constructor(
    public apikhoahocService:ApikhoahocService, 
    public router: Router,
    private formBuilder: FormBuilder,
    public loadingController: LoadingController,
    public activatedRoute: ActivatedRoute,
    public alertController: AlertController,
    // public authService: AuthService
    public authService:AuthenticationService,
    public navCtrl: NavController,
    
  ) { }
   
  ngOnInit() {
    // this.sessionID = this.authService.sessionID;

    // this.layKhoa = this.apikhoahocService.layKhoa;
    // this.layLop = this.apikhoahocService.layLop;
    // console.log(this.layLop);
  
    // this.postTrangDangKi();
    
    
  } 
  ionViewWillEnter(){
    this.sessionID = this.authService.sessionID;
    this.userInfoThiXL = this.authService.userInfo;
  

    this.layKhoa = this.apikhoahocService.layKhoa;
    this.layLop = this.apikhoahocService.layLop;
    // console.log(this.layLop);
  
    this.postTrangDangKi();
  }

   
  onFormSubmit(form: NgForm){  
    // console.log(form);
    this.authService.postThiXepLop(form,this.layLop.maLop )
      .subscribe(
        res => {
        console.log(res);
        this.dkThiXL = [res];
        this.apikhoahocService.dkThiThu = this.dkThiXL;
         console.log(this.apikhoahocService.dkThiThu);
        this.presentAlert('Chúc mừng', 'Bạn đã đăng kí thi xếp lớp thành công');
        }, 
        err => {
          this.presentAlert('Đăng kí không thành công', 'Bạn đã đăng kí lớp học này rồi');
        }
        
      );

  }
  
  async presentAlert(header, message) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: [{
          text: 'OK',
          handler: () => {
            this.router.navigate([`menu-tabs/danh-muc/lop/${this.layKhoa.maKhoa}`]);
          } 
        }]
    });

    await alert.present();
  } 

    postTrangDangKi() {
    // console.log(this.userInfoThiXL.username);
    // console.log(typeof(this.trangDangKi.username), '---');
    this.authService.user(this.sessionID.sessionKey)
    .subscribe(
      (res) => {         
        this.trangDangKi={
          username: res.username,
          SDT: res.SDT,
          tenKhoa: this.layKhoa.tenKhoa,
          tenLop: this.layLop.tenLop,
        }
      }, err => {   
        console.log(err);  
      }
      
    );
   

  }

 

}

//  this.trangDangKi={
//     username: this.userInfoThiXL.res.username,
//     SDT: this.userInfoThiXL.res.SDT,
//     tenKhoa: this.layKhoa.tenKhoa,
//     tenLop: this.layLop.tenLop,
//   }