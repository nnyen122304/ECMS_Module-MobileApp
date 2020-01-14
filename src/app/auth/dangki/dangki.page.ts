import { AuthenticationService } from './../../services/authentication.service';
// import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController,  AlertController, ModalController } from '@ionic/angular';



@Component({ 
  selector: 'app-dangki',
  templateUrl: './dangki.page.html',
  styleUrls: ['./dangki.page.scss'],
}) 
export class DangkiPage implements OnInit { 
  registerForm: FormGroup;
  errConfirm = "";
  isCSS=true;
  URLlogin;
  dataUser: any=[];

  submitted = false;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    // private authService:AuthService,
    public toastController: ToastController,
    public alertController: AlertController,
    private modalController: ModalController,
  ) {

  }

 

  ngOnInit() { 
    this.registerForm = this.formBuilder.group({
      'username' : [null, [Validators.required, Validators.minLength(3)]],
      'password' : [null, [Validators.required, Validators.minLength(6)]],
      'SDT' : [null, Validators.required],
      'confirm' : [null, Validators.required]
    },{validator: this.passwordConfirming}
    );
  }

  // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

  passwordConfirming(c: any): { invalid: boolean } {
    if (c.get('password').value !== c.get('confirm').value) {
        return {invalid: true};
    }
  }
  ionViewWillEnter(){
    this.URLlogin = this.authService.URLlogin;
    console.log(this.URLlogin);
  }

  // dismissRegister() {
  //   this.modalController.dismiss();
  // }
 
  onFormSubmit(form: NgForm) {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
      this.authService.register( form.value.username, form.value.password, form.value.confirm, form.value.SDT).subscribe(
        data => {
          console.log("Đăng kí thành công: ",data); 
          this.router.navigate([`/${this.URLlogin}`]);  
          // this.authService.login(form.value.username, form.value.password).subscribe(
          //   data => { 
          //     console.log(data);
          //   }, 
          //   error => {
          //     console.log(error);
          //   }, 
          //   () => { 
          //     // this.dismissRegister();
          //     // this.navCtrl.navigateRoot('/dashboard');
          //     this.router.navigate([`/${this.URLlogin}`]);
          // );
          this.presentAlert('Đăng kí thành công!', 'Làm ơn đăng nhập với tên và mật khẩu của bạn');
        },
        error => {
          this.presentAlert('Đăng kí không thành công!', 'Tên hoặc số điện thoại bị trùng');
  
        }
      );

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
            this.router.navigate(['/dang-nhap']);
          } 
        }]
    });

    await alert.present();
  }


 
} 
