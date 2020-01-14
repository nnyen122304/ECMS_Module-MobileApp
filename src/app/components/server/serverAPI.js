const express = require('express');
const bodyParser = require('body-parser')
const session = require('express-session');
var cookieParser = require('cookie-parser')
const app = express();


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(cookieParser())
// app.get('/', function (req, res) {
//   // Cookies that have not been signed
//   console.log('Cookies: ', req.cookies)

//   // Cookies that have been signed
//   console.log('Signed Cookies: ', req.signedCookies)
// })
 
const KhoaChieuSinh = [ 
    {maTrangThai:01, maKhoa:'k1', tenKhoa:"Khóa học IELTS", tenChungChi:"IELTS", ngayBD:"2019-09-01", ngayKT:"2019-10-01 ", tenTrangThai:"Đang chiêu sinh"},
    {maTrangThai:01, maKhoa:'k2', tenKhoa:"Khóa học TOEIC", tenChungChi:"TOEIC", ngayBD:"2019-09-01", ngayKT:"2019-10-01", tenTrangThai:"Đang chiêu sinh"},
    {maTrangThai:01, maKhoa:'k3', tenKhoa:"Khóa học bằng A", tenChungChi:"Bằng A", ngayBD:"2019-09-01", ngayKT:"2019-10-01", tenTrangThai:"Đang chiêu sinh"},
    {maTrangThai:01, maKhoa:'k4', tenKhoa:"Khóa học KID1", tenChungChi:"KID1", ngayBD:"2019-09-01", ngayKT:"2019-10-01", tenTrangThai:"Đang chiêu sinh"},
    {maTrangThai:02, maKhoa:'k5', tenKhoa:"Khóa học KID2", tenChungChi:"KID2", ngayBD:"2019-09-01", ngayKT:"2019-10-01", tenTrangThai:"Đang học"},  
];

app.get('/api/KhoaChieuSinh', (req, res) =>{
    res.send(KhoaChieuSinh);
});

app.get('/api/KhoaChieuSinh/:maTrangThai', (req, res) => {
    const khoahoc = KhoaChieuSinh.filter(a => a.maTrangThai === parseInt(req.params.maTrangThai));
    if(!khoahoc) res.status(404).send('the coure with the give maTrangThai was not found.');
    res.send(khoahoc);
    
});

/*-------------------------------------------------------------------------*/
 
const Lop = [ 
    {maKhoa:'k1', maLop:"I1", tenChungChi: "IELTS", tenChuongTrinh: "Lớp IELTS dành cho người mới bắt đầu", loaiLop: "Đang chờ", tenKhoa:"Khóa học IELTS", tenLop:"Lớp IELTS-N1-Tối-2,4,6", soTuan:"4 tuần", lichHoc:"Tối thứ 2,4,6. thời gian: 19h-20h30", hocPhi:"5 triệu/khóa"},
    {maKhoa:'k1', maLop:"I2", tenChungChi: "IELTS", tenChuongTrinh: "Lớp IELTS dành cho người mới bắt đầu", loaiLop: "Đang chờ", tenKhoa:"Khóa học IELTS", tenLop:"Lớp IELTS-N2-Tối-3,5,7", soTuan:"4 tuần", lichHoc:"Tối thứ 3,5,7. thời gian: 19h-20h30", hocPhi:"5 triệu/khóa"},
    {maKhoa:'k2', maLop:"T1", tenChungChi: "TOEIC", tenChuongTrinh: "Lớp TOEIC dành cho người mới bắt đầu", loaiLop: "Đang chờ", tenKhoa:"Khóa học TOEIC", tenLop:"Lớp TOEIC-N1-Tối-2,4,6", soTuan:"4 tuần", lichHoc:"Tối thứ 2,4,6. thời gian: 19h-20h30", hocPhi:"4 triệu/khóa"},
    {maKhoa:'k2', maLop:"T2", tenChungChi: "TOEIC", tenChuongTrinh: "Lớp TOEIC dành cho người mới bắt đầu", loaiLop: "Đang chờ", tenKhoa:"Khóa học TOEIC", tenLop:"Lớp TOEIC-N2-Tối-3,5,7", soTuan:"4 tuần", lichHoc:"Tối thứ 3,5,7. thời gian: 19h-20h30", hocPhi:"4 triệu/khóa"},
    {maKhoa:'k3', maLop:"A1", tenChungChi: "Bằng A", tenChuongTrinh: "Lớp dạy bằng A1 cơ bản", loaiLop: "Đang chờ", tenKhoa:"Khóa học bằng A", tenLop:"Lớp bằng A1-N1-Tối-2,4,6", soTuan:"4 tuần", lichHoc:"Tối thứ 2,4,6. thời gian: 19h-20h30", hocPhi:"3 triệu/khóa"},
    {maKhoa:'k3', maLop:"A2", tenChungChi: "Bằng A", tenChuongTrinh: "Lớp dạy bằng A2 cơ bản", loaiLop: "Đang chờ", tenKhoa:"Khóa học bằng A", tenLop:"Lớp bằng A2-N2-Tối-3,5,7", soTuan:"4 tuần", lichHoc:"Tối thứ 3,5,7. thời gian: 19h-20h30", hocPhi:"3 triệu/khóa"},
    {maKhoa:'k4', maLop:"KI1", tenChungChi: "KID1", tenChuongTrinh: "Lớp dạy KID1 dành cho bé", loaiLop: "Đang chờ", tenKhoa:"Khóa học KID1", tenLop:"Lớp KID1-N1-Tối-2,4,6", soTuan:"4 tuần", lichHoc:"Tối thứ 2,4,6. thời gian: 19h-20h30", hocPhi:"2 triệu/khóa"},
    {maKhoa:'k4', maLop:"KI2", tenChungChi: "KID1", tenChuongTrinh: "Lớp dạy KID1 dành cho bé nâng cao", loaiLop: "Đang chờ", tenKhoa:"Khóa học KID1", tenLop:"Lớp KID1-N2-Tối-3,5,7", soTuan:"4 tuần", lichHoc:"Tối thứ 3,5,7. thời gian: 19h-20h30", hocPhi:"2 triệu/khóa"},
    {maKhoa:'k5', maLop:"KD1", tenChungChi: "KID2", tenChuongTrinh: "Lớp dạy KID2 dành cho bé", loaiLop: "Đang học", tenKhoa:"Khóa học KID2", tenLop:"Lớp KID2-N1-Tối-3,5,7", soTuan:"4 tuần", lichHoc:"Tối thứ 3,5,7. thời gian: 19h-20h30", hocPhi:"2 triệu/khóa"},
    {maKhoa:'k5', maLop:"KD2", tenChungChi: "KID2", tenChuongTrinh: "Lớp dạy KID2 dành cho bé nâng cao", loaiLop: "Đang học", tenKhoa:"Khóa học KID2", tenLop:"Lớp KID2-N2-Tối-2,4,6", soTuan:"4 tuần", lichHoc:"Tối thứ 2,4,6. thời gian: 19h-20h30", hocPhi:"2 triệu/khóa"},

];


app.get('/api/Lop', (req, res) =>{
    res.send(Lop);
});


app.get('/api/Lop/:maKhoa', (req, res, next) => {
    const LopHoc = Lop.filter(b => b.maKhoa === req.params.maKhoa);
    if(!LopHoc) res.status(404).send('the coure with the give maKhoa was not found.');
    res.send(LopHoc);

});



/*-------------------------------------------------------------------------*/

const DeCuong=[
    {maLop:"KI1", buoi:1, maDC:"DC1", chuDe:"Làm quen với các chủ đề dành cho bé căn bản"},
    {maLop:"KI1", buoi:2, maDC:"DC1", chuDe:"Dạy bé chào hỏi cùng hình ảnh"},
    {maLop:"KI1", buoi:3, maDC:"DC1", chuDe:"Thực hành chào hỏi"},
    {maLop:"KI1", buoi:4, maDC:"DC1", chuDe:"Cùng hát tiếng anh với các câu chào hỏi"},
    {maLop:"KI2", buoi:1, maDC:"DC2", chuDe:"Làm quen với các chủ đề dành cho bé nâng cao"},
    {maLop:"KI2", buoi:2, maDC:"DC2", chuDe:"Dạy bé giới thiệu về bản thân"},
    {maLop:"KI2", buoi:3, maDC:"DC2", chuDe:"Thực hành giới thiệu bản thân"},
    {maLop:"KI2", buoi:4, maDC:"DC2", chuDe:"Dạy bé các loại trái cây bằng tiếng anh"}

];

app.get('/api/DeCuong', (req, res) =>{
    res.send(DeCuong);
});

app.get('/api/DeCuong/:maLop', (req, res, next) => {
    const deCuong = DeCuong.filter(dc => dc.maLop === req.params.maLop);
    if(!deCuong) res.status(404).send('the coure with the give maKhoa was not found.');
    res.send(deCuong);

});
/*-------------------------------------------------------------------------*/

const LopLienQuan=[
    {maLop:"I1", id:1, tenLop:"Lớp IELTS-N1-Tối-2,4,6", maHocVien:"HV1", tenHocVien: "Ngọc Yến" },
    {maLop:"I1", id:2, tenLop:"Lớp IELTS-N1-Tối-2,4,6", maHocVien:"HV2", tenHocVien: "Ngọc Hân" },
    
    {maLop:"T1", id:3, tenLop:"Lớp TOEIC-N1-Tối-2,4,6", maHocVien:"HV3", tenHocVien: "Ngọc Hà" },
    {maLop:"T2", id:3, tenLop:"Lớp TOEIC-N2-Tối-3,5,7", maHocVien:"HV3", tenHocVien: "Ngọc Hà" },
    
    {maLop:"A1", id:4, tenLop:"Lớp bằng B1-N1-Tối-2,4,6", maHocVien:"HV4", tenHocVien: "Văn A" },
    
    {sessionID: "ID5", maLop:"KI1", id:5, tenLop:"Lớp KID1-N1-Tối-2,4,6", maHocVien:"HV5", tenHocVien: "Văn B" },
    {sessionID: "ID5", maLop:"KI2", id:5, tenLop:"Lớp KID1-N2-Tối-3,5,7", maHocVien:"HV6", tenHocVien: "Văn C" },

    {maLop:"KD1", id:6, tenLop:"Lớp KID2-N1-Tối-2,4,6", maHocVien:"HV7", tenHocVien: "Văn D" },
    {maLop:"KD1", id:6, tenLop:"Lớp KID2-N1-Tối-2,4,6", maHocVien:"HV8", tenHocVien: "Văn F" },

];

app.get('/api/LopLienQuan',(req, res)=>{
    res.send(LopLienQuan)
});

app.get('/api/LopLienQuan/:sessionID', (req, res) => {
    const LopHocLQ = LopLienQuan.filter(llq => llq.sessionID === (req.params.sessionID));
    if(!LopHocLQ) res.status(404).send('the coure with the give id was not found.');
    res.send(LopHocLQ);

});



/*-------------------------------------------------------------------------*/

const users = [
    { id: 1, name: "NgocYen", email: 'ngocyen@gmail.com', password: 'secret'},
    { id: 2, name: "NgocHan", email: 'ngochan@gmail.com', password: 'secret'},
    { id: 3, name: "NgocHa", email: 'ngocha@gmail.com', password: 'secret'},
    { id: 4, name: "VanA", email: 'vana@gmail.com', password: 'secret'},
    { sessionID: "ID5", id: 5, name: "VanB", email: 'vanb@gmail.com', password: 'secret'},
    { id: 6, name: "VanC", email: 'vanc@gmail.com', password: 'secret'},

]

app.get('/api/users', (req, res) => {
    res.send(users)
})

/*-------------------------------------------------------------------------*/

const ThoiKhoaBieu=[

]

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}...`));