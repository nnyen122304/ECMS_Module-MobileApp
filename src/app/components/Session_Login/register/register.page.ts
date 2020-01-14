import { Users } from './../users';
import { ApikhoahocService } from './../../../services/apikhoahoc.service';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  // user : Users;
  // users : Users[];
 
  constructor(private router: Router, private apikhoahocService: ApikhoahocService) { }
  topicHasError = true;
  submitted = false;
  
  ngOnInit() {
    if (localStorage) {
      // LocalStorage is supported
      console.log("success")
    } else {
      // No support. Fallback here!
      console.log("error")
    } 
  }
  userModel = new Users('', '', ''); 


  validateTopic(value){
    if(value === 'default'){
      this.topicHasError = true;
    }else{
      this.topicHasError = false;
    }
  }
  
  onSubmit(){
    this.submitted = true;
    
    // console.log(this.userModel);
    this.apikhoahocService.postRegister(this.userModel).subscribe(
        data => {
          console.log('Success!', data);
          this.router.navigate(['/login']);
        },
        (error) =>{
          console.error('Error!', error);
        }
       
       
    )
    
  }
  

  // clicktUser(){
  //   this.apikhoahocService.getUser().subscribe((data)=>{
  //     this.users = data;
  //     console.log(this.users);
  //   })
  // }

}
