import { Users } from './../components/Session_Login/users';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrlKhoa = "http://103.53.231.144:8080/api/jsonws/ctu-edu-vn-cfla-service-portlet.lichthi/get-khoa-chieu-sinh/trang-thai-ky-thi-id";
const apiUrlLop = "http://103.53.231.144:8080/api/jsonws/ctu-edu-vn-cfla-service-portlet.lichthi/get-lop/khoa-chieu-sinh-id";
const apiUrlLopLQ= "http://103.53.231.144:8080/api/jsonws/ctu-edu-vn-cfla-service-portlet.lichthi/get-lop-cua-toi/session-key";
const apiUrlThoiKhoaBieu = "http://103.53.231.144:8080/api/jsonws/ctu-edu-vn-cfla-service-portlet.lichthi/get-thoi-khoa-bieu";
const apiUrlDeCuong = "http://103.53.231.144:8080/api/jsonws/ctu-edu-vn-cfla-service-portlet.lichthi/get-de-cuong/ma-lop";
const apiUrlUuDai =  "http://103.53.231.144:8080/api/jsonws/ctu-edu-vn-cfla-service-portlet.lichthi/get-uu-dai";
const apiUrlKQXepLop = "http://103.53.231.144:8080/api/jsonws/ctu-edu-vn-cfla-service-portlet.lichthi/get-ket-qua-xep-lop";
const apiUrlDiem = "http://103.53.231.144:8080/api/jsonws/ctu-edu-vn-cfla-service-portlet.lichthi/get-diem-thi"; 
const apiUrlNhanXet = "http://103.53.231.144:8080/api/jsonws/ctu-edu-vn-cfla-service-portlet.lichthi/get-nhan-xet";
const apiUrlHocVien = "http://103.53.231.144:8080/api/jsonws/ctu-edu-vn-cfla-service-portlet.lichthi/get-tai-khoan";

// const apiUrlKhoa = "http://192.168.137.1:3000/api/KhoaChieuSinh";
// const apiUrlLop = "http://192.168.137.1:3000/api/Lop";
// const apiUrlLopLQ = "http://192.168.137.1:3000/api/LopLienQuan";
// const apiUrlDeCuong = "http://192.168.137.1:3000/api/DeCuong";
// const apiUrlThoiKhoaBieu = "http://192.168.137.1:3000/api/ThoiKhoaBieu";
// const apiUrlThongBao = "http://192.168.137.1:3000/api/ThongBao";
// const apiUrlNhanXet =  "http://192.168.137.1:3000/api/NhanXet";
// const apiUrlHocVien = "http://192.168.137.1:3000/api/HocVien";
// const apiUrlUuDai =  "http://192.168.137.1:3000/api/UuDai";
// const apiUrlDiem = "http://192.168.137:3000/api/Diem";
// const apiUrlKQXepLop = "http://192.168.137:3000/api/KetQuaXL";

 


// const apiUrlKhoa = "http://localhost:3000/api/KhoaChieuSinh";
// const apiUrlLop = "http://localhost:3000/api/Lop";
// const apiUrlLopLQ = "http://localhost:3000/api/LopLienQuan";
// const apiUrlDeCuong = "http://localhost:3000/api/DeCuong";
// const apiUrlThoiKhoaBieu = "http://localhost:3000/api/ThoiKhoaBieu";
const apiUrlThongBao = "http://localhost:3000/api/ThongBao";
// const apiUrlNhanXet = "http://localhost:3000/api/NhanXet";
// const apiUrlHocVien = "http://localhost:3000/api/HocVien";
// const apiUrlUuDai =  "http://localhost:3000/api/UuDai";
// const apiUrlDiem = "http://localhost:3000/api/Diem";
// const apiUrlKQXepLop = "http://localhost:3000/api/KetQuaXL";

 
@Injectable({
  providedIn: 'root'
})
export class ApikhoahocService { 
 
  urlRegister = 'http://localhost:8082/register';
  urlLogin = 'http://localhost:8082/login';

  currentLop;
  //biến dùng chung
  trangThai; //khóa học
  layLop; // lớp 
  maHV;
  layKhoa; //khóa học
  dkThiThu; 
  constructor(public http:HttpClient) { }
  
 
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

  /*------------------Danh Mục----------------------*/
  getKhoaChieuSinh(maTrangThai: string): Observable<any> {
    const urlKhoa =`${apiUrlKhoa}/${maTrangThai}`;
    return this.http.get(urlKhoa, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  } 

  getLopById(makhoa: string): Observable<any> {
    const urlLop = `${apiUrlLop}/${makhoa}`;
    return this.http.get(urlLop, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }


  /*------------------Học Tập -> Lớp Học----------------------*/

  getLopLQById(sessionID: string): Observable<any> {
    const urlLopLQ = `${apiUrlLopLQ}/${sessionID}`;//do chưa có user
    return this.http.get(urlLopLQ, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  getDeCuongById(maLop: string): Observable<any> {
    const urlDeCuong = `${apiUrlDeCuong}/${maLop}`;
    return this.http.get(urlDeCuong, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  getKQXepLopById(sessionID: string, maLop: string): Observable<any> {
    const urlKQXepLop = `${apiUrlKQXepLop}/session-key/${sessionID}/ma-lop/${maLop}`;
    return this.http.get(urlKQXepLop, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
 
  // getThoiKhoaBieuById(sessionID:string, maLop: string): Observable<any> {
  getThoiKhoaBieuById(sessionID: string, maLop: string): Observable<any> {
    const urlTKB = `${apiUrlThoiKhoaBieu}/session-key/${sessionID}/ma-lop/${maLop}`;
    return this.http.get(urlTKB, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
 

  /*------------------Học Tập -> Thông báo----------------------*/

  getThongBaoById(sessionID:string, maLop: string): Observable<any> {
    const urlTBao = `${apiUrlThongBao}/${sessionID}/${maLop}`;
    return this.http.get(urlTBao, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)); 
  }

  /*----------------------------------------*/

  getNhanXetById(sessionID:string, maHocVien: string, maLop: string): Observable<any> {
    const urlNhanXet = `${apiUrlNhanXet}/session-key/${sessionID}/ma-hoc-vien/${maHocVien}/ma-lop/${maLop}`;
    return this.http.get(urlNhanXet, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)); 
  }

  /*----------------------------------------*/
  getHocVienById(sessionID: string, maHocVien: string): Observable<any> {
    const urlHocVien = `${apiUrlHocVien}/session-key/${sessionID}/ma-hoc-vien/${maHocVien}`;
    return this.http.get(urlHocVien, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)); 
  }


  /*----------------------------------------*/
  getUuDai(): Observable<any> {
    const urlUuDai = `${apiUrlUuDai}`;
    return this.http.get(urlUuDai, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));  
  }


  /*----------------------------------------*/
  getDiemById(sessionID: string, maHocVien: string, maLop: string): Observable<any> {
    const urlDiem = `${apiUrlDiem}/session-key/${sessionID}/ma-hoc-vien/${maHocVien}/ma-lop/${maLop}`;
    return this.http.get(urlDiem, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)); 
  }

  /*----------------------------------------*/
 

  getLogin(){
    return this.http.get<Users[]>(this.urlLogin);
  }
  
  postRegister(user: Users){
    return this.http.post<any>(this.urlRegister, user);
  }

  // postLogin(user: Users){
  //   const urlDangNhap = `${apiUrlDangNhap}`;
  //   return this.http.post<any>(urlDangNhap, user).pipe(
  //     map(this.extractData),
  //     catchError(this.handleError)); 
  // }
/*-------------chuyển có dấu sang hk dấu---------------------------*/
  change_alias(alias) {
    var str = alias;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
    str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
    str = str.replace(/đ/g,"d");
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
    str = str.replace(/ + /g," ");
    str = str.trim(); 
    return str;
  }

  //dc sử dụng phổ biến trong ES6
  //hàm bỏ dấu tiếng việt
  removeAccents(str) {
    return str.normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .replace(/đ/g, 'd').replace(/Đ/g, 'D');
  }

}
