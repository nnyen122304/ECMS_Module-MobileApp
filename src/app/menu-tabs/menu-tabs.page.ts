import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute} from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-menu-tabs',
  templateUrl: './menu-tabs.page.html',
  styleUrls: ['./menu-tabs.page.scss'],
})
export class MenuTabsPage implements OnInit, OnDestroy, AfterViewInit {
  checkLogin = false;
  sessionID;
  userInfoMenu;
  backButtonSubscription; 
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private platform: Platform 
  ) {}
 
  ngOnInit() {
    
  } 
  ionViewWillEnter() {

    this.sessionID = this.authService.sessionID;
    //  console.log(this.sessionID);
    // this.userInfoMenu = this.authService.userInfo;
    //  console.log(this.userInfoMenu.res, "111111111");
      // console.log(this.userInfoMenu.res.userType);
    //   console.log(typeof(this.userInfoMenu.userType), '---');
    this.getUserType();
    
  }

     
  getUserType() {
      this.authService.user(this.sessionID.sessionKey)
        .subscribe(
          (res) => {         
            console.log("3. vẽ tab");
            console.log(res);
            if(res.userType === "student"){
              this.checkLogin = true;
              console.log("student:",this.checkLogin);
            }
            else if(res.userType === "user"){
              this.checkLogin = false;
              console.log("user:",this.checkLogin);  
            }
            else{
              this.checkLogin = false;
              console.log("nologin:",this.checkLogin);
            }
          }, err => {   
            console.log(err);  
          }
          
        );
  
  }
  

  ngAfterViewInit() {
    this.backButtonSubscription = this.platform.backButton.subscribe(() => {
      navigator['app'].exitApp();
    });
  }

  ngOnDestroy() {
    this.backButtonSubscription.unsubscribe();
  }

 
 

} 
