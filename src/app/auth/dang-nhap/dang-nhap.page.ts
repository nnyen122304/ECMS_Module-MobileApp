import { AuthenticationService } from './../../services/authentication.service';
// import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController, ModalController, NavController , AlertController} from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.page.html',
  styleUrls: ['./dang-nhap.page.scss'],
})
export class DangNhapPage implements OnInit {
  loginForm: FormGroup;
  errorLogin = '';
  isCSS=false;
  URLlogin;
  isTypeUser = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthenticationService,
    // private authService:AuthService,
    public toastController: ToastController,
    private storage: Storage,
    private modalController: ModalController,
    private navCtrl: NavController,
    public alertController: AlertController
  ) {
    
   }
  

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'username' : [null, Validators.required],
      'password' : [null, Validators.required]
    });

     
  }
  ionViewWillEnter(){
    this.URLlogin = this.authService.URLlogin;
    console.log(this.URLlogin);
  }
  // loại bỏ đăng nhập 
  // dismissLogin() {
  //   this.modalController.dismiss();
  // } 
  
  onFormSubmit(form: NgForm) {
    
    this.authService.login(form.value.username, form.value.password).subscribe(
      // trường hợp đăng nhập thành công
      data => {
        this.presentToast('Đăng nhập thành công');
        this.router.navigate([`/${this.URLlogin}`]);
        
      },  
      // trường hợp đăng nhập sai
      error => {
        console.log("Đăng nhập không thành công",error);
        this.presentToast('Sai, vui lòng đăng nhập lại');
        this.errorLogin = 'Nếu chưa có tài khoản, vui lòng chọn đăng ký';
        this.isCSS=true;
      } 
    );
    console.log("1. submit login");
  } 
 

  goRegister() {
    this.router.navigate(['/dangki']);
  }

  

  
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }
  async presentAlert(header, message) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: [{
          text: 'OK',
          handler: () => {
            this.router.navigate(['/menu-tabs/danh-muc']);
          } 
        }]
    });

    await alert.present();
  }


}
