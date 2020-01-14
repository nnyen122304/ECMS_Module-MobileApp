import { AuthenticationService } from './services/authentication.service';
import { Component , OnInit, OnDestroy, AfterViewInit} from '@angular/core';
import { Platform, AlertController, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent { 
  isDangNhap = false;
  public appPages = [
    {
      title: 'Home',
      url: '/menu-tabs/danh-muc',
      icon: 'home'
    },
    { 
      title: 'Thông tin tài khoản',
      url: '/menu-tabs/tai-khoan',
      icon: 'person'
    }
   
    
  ];
  constructor( 
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private oneSignal: OneSignal,
    private alertCtrl: AlertController,
    private router: Router,
    private authService: AuthenticationService,
    public toastController: ToastController,
    public menuCtrl: MenuController,
    public navCtrl: NavController
  ) {
    this.initializeApp();
  }

  initializeApp() {
     console.log("4");
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent(); 
      this.splashScreen.hide();

      //kiểm tra xem có đang sd nền tảng cordova không
      if (this.platform.is('cordova')) {
        this.setupPush();
      }

      this.authService.checkToken().then(() => {
        if(this.authService.isLoggedIn) {
            this.isDangNhap = false;
            console.log("this.isDangNhap:",this.isDangNhap)
        } 
        else {
          this.isDangNhap = true; 
          console.log("this.isDangNhap:",this.isDangNhap)
        }
      }); 

    });
 
  }

  
  setupPush() {
    // I recommend to put these into your environment.ts
    this.oneSignal.startInit('fd096e09-a91f-40af-af5d-1bd5e332cfd4', '725629130352');
 
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);
 
    // Notifcation was received in general
    this.oneSignal.handleNotificationReceived().subscribe(data => {
      let msg = data.payload.body;
      let title = data.payload.title;
      let additionalData = data.payload.additionalData;
      this.showAlert(title, msg, additionalData.task);
    });
 
    // Notification was really clicked/opened
    this.oneSignal.handleNotificationOpened().subscribe(data => {
      // Just a note that the data is a different place here!
      let additionalData = data.notification.payload.additionalData;
 
      this.showAlert('Notification opened', 'You already read this before', additionalData.task);
    });
 
    this.oneSignal.endInit();
  }
 
  // toggleMenu() {
  //   this.menuCtrl.toggle(); //Add this method to your button click function
  // }

  ionViewWillEnter(){

    this.authService.checkToken().then(() => {
        if(this.authService.isLoggedIn) {
            this.isDangNhap = false;
            console.log("this.isDangNhap:",this.isDangNhap)
        } 
        else {
          this.isDangNhap = true; 
          console.log("this.isDangNhap:",this.isDangNhap)
        }
      }); 
  //   this.sessionID = this.authService.sessionID;
    
  //   this.getUserApp();
  }

  // getUserApp(){
  //   this.authService.user(this.sessionID.sessionKey)
  //   .subscribe(
  //     (res) => {         
  //       console.log(res);
  //       this.isDangNhap = false;
     
  //     }, err => {   
  //       console.log(err); 
  //       this.isDangNhap = false; 
  //     }
      
  //   );
  // }

  logout() {
    this.menuCtrl.toggle();
    this.authService.logout().subscribe(
      data => {
        this.isDangNhap = this.authService.isLoggedIn;
        console.log("this.isDangNhap:",this.isDangNhap);
        this.presentToast('Đã đăng xuất');
        this.router.navigate(['/menu-tabs/danh-muc']);
        window.location.reload();
        
      },
      error => {
        console.log(error);
        this.presentToast('Bạn chưa đăng nhập');
      }
      // () => {
      //   // this.navCtrl.navigateRoot('/danh-muc');
        
      // } 
    ); 
  } 
  login(){
    this.menuCtrl.toggle();
    this.authService.URLlogin = this.router.url;
    console.log(this.router.url);
    this.router.navigate(['/dang-nhap']);
    this.isDangNhap = this.authService.isLoggedIn;
    console.log("this.isDangNhap:",this.isDangNhap);

  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }
 
  async showAlert(title, msg, task) {
    const alert = await this.alertCtrl.create({
      header: title,
      subHeader: msg,
      buttons: [
        {
          text: `Action: ${task}`,
          handler: () => {
            // E.g: Navigate to a specific screen
          }
        }
      ]
    })
    alert.present();
  }
}
