import { Router } from '@angular/router';
import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { ToastController, ModalController, NavController , AlertController} from '@ionic/angular';

@Component({
  selector: 'app-tai-khoan',
  templateUrl: './tai-khoan.page.html',
  styleUrls: ['./tai-khoan.page.scss'],
})
export class TaiKhoanPage implements OnInit {
  private form: FormGroup;
  // processing:boolean;
  // uploadImage: string;
  URLlogin;
  sessionID;
  userInformation;
  // gtSetId;
  isCSS;
  isOpen;
  // ngaySinh;
  // gtSets = JSON.parse('[{"gt":"Nam"}, {"gt":"nữ"}]');
  

  userTKInfo = {
    hoten: '',
    gioiTinh: '', 
    ngaySinh: '', 
    sdt: '',
    userType:'', 
    password:'',
  };

  constructor(
    private authService: AuthenticationService,
    private router:Router,
    private formBuilder: FormBuilder,
    public toastController: ToastController
  ) { } 

  ngOnInit() {
   
    // this.sessionID = this.authService.sessionID;
    // console.log(this.sessionID);
    
    // this.getUser();
    
  }

  ionViewWillEnter(){
    this.sessionID = this.authService.sessionID;
    // console.log(this.sessionID);
    this.userInformation = this.authService.userInfo;
    
    this.addUserTKInfo();
  }
 

 
  onSave(form: NgForm){
    console.log(form);
    this.authService.updateUser(this.sessionID.sessionKey, form.value.gioiTinh, form.value.ngaySinh).subscribe(
      data => {
        console.log(data);
        this.presentToast('Lưu');
      }, 
      // trường hợp sai
      error => {
        this.presentToast('Sai, lưu không thành công');
        
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

  addUserTKInfo() { 
    this.authService.user(this.sessionID.sessionKey)
    .subscribe(
      (res) => {         
        this.userTKInfo={ 
          hoten: res.username,
          sdt:res.SDT,
          gioiTinh:res.gioiTinh,
          ngaySinh: res.ngaySinh,
          userType: res.userType,
          password: res.matKhau
        }
      }, err => {   
        console.log(err);  
      }
      
    );



    
    
  }

  



}
