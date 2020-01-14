import { AuthenticationService } from './../../../services/authentication.service';
import { ApikhoahocService } from './../../../services/apikhoahoc.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-ket-qua',
  templateUrl: './ket-qua.page.html',
  styleUrls: ['./ket-qua.page.scss'],
})
export class KetQuaPage implements OnInit {
  maLop;
  sessionID;
  // userKQXL:any=[];
  layKQXL: any=[];
 
  constructor(
    public apikhoahocService: ApikhoahocService,
    public authService: AuthenticationService,
    public router:Router,
  ) { }

  ngOnInit() { 
    this.sessionID = this.authService.sessionID;
    this.maLop = this.apikhoahocService.layLop.maLop;
    

    this.getKQDangKi()

  }   
 
  getKQDangKi() {
    console.log(this.sessionID.sessionKey);
    console.log(this.maLop);
    this.apikhoahocService.getKQXepLopById(this.sessionID.sessionKey,this.maLop)
      .subscribe(kq => {
        
        this.layKQXL = [kq]; 
        console.log(kq);
      }, err => {
        console.log(err); 
      });
  

    // this.authService.user(this.sessionID)
    //   .subscribe(res => {
    //     this.userKQXL = res;
    //     console.log(this.userKQXL);
    //     for(let user of this.userKQXL){
    //       // this.apikhoahocService.getKQXepLopById(this.sessionID,this.maLop,user.username);
    //       console.log(user.username);
          
          
    //     }
    //   }, err => {   
    //     console.log(err);
    //   });

    
  }

 
   
  

}

