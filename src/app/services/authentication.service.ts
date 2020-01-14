import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
 

// const httpOptions = {
//   headers: new HttpHeaders({'Content-Type': 'application/json'})
// };

@Injectable({
  providedIn: 'root'  
})
export class AuthenticationService {
  URLlogin;
  userInfo={};
  isLoggedIn = false;
  sessionID:any;

  // apiUrl = 'http://localhost:3000/api/';
  apiUrl = 'http://103.53.231.144:8080/api/jsonws/ctu-edu-vn-cfla-service-portlet.lichthi/';
  constructor(
    private storage: Storage,  
    private plt: Platform,
    public http:HttpClient 
 
  ) { 
    this.plt.ready().then(() => {  
      this.checkToken();
      
    }); 
    
  } 
  // service hk sd
  // ngOnInit() {}
  // ionViewWillEnter(){}

  checkToken() {  
     console.log("1")
    //vào storage lấy đối tượng sessionID ktra 
    return this.storage.get('sessionID').then(
      data => { 
        console.log("data",data)
        this.sessionID = data;
        if(this.sessionID != null) {
          this.isLoggedIn=true;
           this.getUserInfo();
          console.log("sessionID là:",this.sessionID) 
         
        } else {  
          this.isLoggedIn=false;
        }
      },
      error => { 
        this.sessionID = null;
        this.isLoggedIn=false;
        this.URLlogin = null;

        // this.userInfo = null;
      }
    ); 

    console.log("this.isLoggedIn:",this.isLoggedIn);
     
  }
  register(username: any, password: any, confirm: any, SDT: any ) {
    console.log("register:",username, password, confirm, SDT);
    return this.http.post(this.apiUrl + `post-dangki/mobile-username/${username}/mobile-password/${password}/mobile-confirm/${confirm}/mobile-so-dien-thoai/${SDT}`,
                    {username: username, password: password, confirm: confirm, SDT: SDT})
   
  }
  
  login(username: any, password:any) {
    return this.http.post(this.apiUrl + `login/username/${username}/password/${password}`,{username:username,password:password}).pipe(
      tap(sessionID => {
          
        this.storage.set('sessionID', sessionID)
        .then(
          () => {
            console.log('sessionID Stored');
            
          },
          error => console.error('Error storing item', error)
        ); 
        this.sessionID = sessionID;
        this.isLoggedIn = true;
        return sessionID;
      }),
    );
  }

  // (res:any) để xác định đc res trả về có kdlieu bất kì, nếu hk nó sẽ hk hiểu và báo lỗi
  // console.log(typeof(res), '---');
  getUserInfo(){
     console.log("2")
  this.user(this.sessionID.sessionKey)
    .subscribe(
      (res) => {         
        this.userInfo = {res}; //lưu user vào userInfo
        // console.log("userInfo:",this.userInfo )
        // console.log(typeof(this.userInfo), '---');
      }, err => {   
        console.log(err);  
      }
      
    );
  }

  logout() {
    console.log(this.sessionID);
    // const headers = new HttpHeaders({
    //   'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    // });
    // return this.http.get(this.apiUrl + 'logout', { headers: headers })
    return this.http.get(this.apiUrl + 'logout')
    .pipe( 
      tap(data => {
        this.storage.remove("sessionID");
        console.log("Đã xóa sessionID")
        this.isLoggedIn = false;
        delete this.sessionID;
        return data;
      },
      err=>{
        console.log("Bạn chưa đăng nhập tài khoản");
      })
    )
  }  

  postThiXepLop(data: any, maLopthi:any){
    console.log(this.sessionID);
    // console.log("aaaaaaa:",maLopthi);
    return this.http.post(this.apiUrl + `post-trang-dang-ki-xep-lop/session-key/${this.sessionID.sessionKey}/ma-lop/${maLopthi}`,data)
  }

//phương thức put sẽ kích hoạt yêu cầu preflight được gửi bởi trình duyệt
  updateUser(sessionID:any,gioiTinh:any, ngaySinh:any): Observable<any> {
    return this.http
      .put<any>(this.apiUrl + `put-tai-khoan/session-key/${this.sessionID}/gioi-tinh/${gioiTinh}/ngay-sinh/${ngaySinh}`,{sessionID:sessionID, gioiTinh:gioiTinh, ngaySinh:ngaySinh})
      .pipe(
        catchError(this.handleError) 
      )
  }
 

  user(sessionID:any): Observable<any> { 
    return this.http.get(this.apiUrl +`get-user/session-key/${sessionID}`) 
  }
  


   private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      //Xảy ra lỗi phía máy khách hoặc mạng. Xử lý nó cho phù hợp..
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend trả về một mã phản hồi không thành công.
      // The response body có thể chứa manh mối về những gì đã sai,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
}
