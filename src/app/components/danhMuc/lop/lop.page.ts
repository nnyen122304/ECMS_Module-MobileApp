import { ThithuPage } from './../thithu/thithu.page';
import { DangNhapPage } from './../../../auth/dang-nhap/dang-nhap.page';
import { AuthenticationService } from './../../../services/authentication.service';
import { ApikhoahocService } from './../../../services/apikhoahoc.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController, LoadingController, AlertController ,NavController, ModalController} from '@ionic/angular';

@Component({
  selector: 'app-lop',
  templateUrl: './lop.page.html',
  styleUrls: ['./lop.page.scss'],
})
export class LopPage implements OnInit {
  layLop : any=[];
  maKhoa ;
  maTrangThai;
  maKhoa02 =  true;
  layDKXL = false;
   
  constructor(
    public apikhoahocService: ApikhoahocService,
    public loadingController: LoadingController,
    public activatedRoute: ActivatedRoute,
    public alertController: AlertController,
    public authService: AuthenticationService,
    public router:Router,
    private navCtrl: NavController,
    public toastController: ToastController,
    private modalController: ModalController,

    
  ) { }
 
  ngOnInit() {
      this.getLop(); 
    this.maTrangThai = this.apikhoahocService.trangThai;
    console.log("this.maTrangThai");
  
  } 

  ionViewWillEnter(){
 
   this.getLop(); 
    this.maTrangThai = this.apikhoahocService.trangThai;
    
    
    console.log("ionViewWillEnter");
   
  
  }

  ionViewDidEnter(){
  
    console.log(" ionViewDidEnter_Start");

  }
   

  
  ionViewWillLeave(){console.log(" ionViewWillLeave_Start");}
   
   
  ionViewDidLeave(){console.log("ionViewDidLeave_Start");}
  
 getLop() {
    // const loading = await this.loadingController.create({
    //   message: 'Loading'
    // });
    // await loading.present();
       
    this.maKhoa= this.activatedRoute.snapshot.paramMap.get('maKhoa')
    this.apikhoahocService.getLopById(this.maKhoa)
      .subscribe(res => {
        console.log(res.DATA);
        this.layLop = res.DATA;
        // loading.dismiss();
      }, err => {
        console.log(err); 
        // loading.dismiss();
      }); 
  } 

  deCuong(lop){
    
    this.router.navigate([`/menu-tabs/danh-muc/lop/${this.maKhoa}/de-cuong/${lop.maLop}`]);
  }
 
  thiXepLop(lop){
    this.authService.URLlogin = this.router.url;
    console.log(this.router.url);
    //truyền maLop và tenLop cho trang thithu
    this.apikhoahocService.layLop = lop;
    // console.log(this.apikhoahocService.layLop);

    

    this.authService.checkToken().then(() => {
        if(this.authService.isLoggedIn) {
          this.router.navigate(['/thithu']);  
        } 
        else {
          this.router.navigate(['/dang-nhap']);
          
       
        }
    });
    
  }

  
 
  ketQua(lop){
    this.authService.URLlogin = this.router.url;
    console.log(this.router.url);
    //truyền maLop và tenLop cho trang thithu
    this.apikhoahocService.layLop = lop;
    // console.log(this.apikhoahocService.layLop);
    
    this.authService.checkToken().then(() => {
        if(this.authService.isLoggedIn) {
          this.router.navigate([`/menu-tabs/danh-muc/lop/${this.maKhoa}/ket-qua/${lop.maLop}`]);  
   
        } 
        else {
          this.router.navigate(['/dang-nhap']);
          
       
        }
    });
  }

  async moveToDangNhap(){
    const modal = await this.modalController.create({
     component: DangNhapPage
   });

   return await modal.present();
  }

}
