import { AuthenticationService } from './../../../services/authentication.service';
import { of } from 'rxjs';
import { async } from '@angular/core/testing';
import { ApikhoahocService } from './../../../services/apikhoahoc.service';
import { Component, OnInit, ViewChild, Inject, LOCALE_ID } from '@angular/core';
import { Router, RouterModule, ActivatedRoute} from '@angular/router';
import { IonSegment, AlertController} from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { formatDate,  DatePipe } from '@angular/common';


@Component({
  selector: 'app-thoi-khoa-bieu',
  templateUrl: './thoi-khoa-bieu.page.html',
  styleUrls: ['./thoi-khoa-bieu.page.scss'],
})
export class ThoiKhoaBieuPage implements OnInit {
  maLop;
  sessionID;
  layTKB: any[];
  
  event = {
    buoi: '',
    phong: '',
    diaChi: '',
    startTime: '',
    endTime: '',
    allDay: false
  };

  // ngày tối thiểu cho ng dùng chọn tại ngày hiện tại
  // thành phần thời gian luôn mong đợi chuỗi    this.getDeCuong();
//ISO => gọi đến chuỗi ISO
  minDate = new Date().toISOString();

  eventSource = [];

  viewTitle='';

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };

  @ViewChild(CalendarComponent, {static: true}) myCalendar: CalendarComponent;

  constructor(
    private alertCtrl: AlertController, 
    @Inject(LOCALE_ID) private locale: string,
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    private apikhoahocService: ApikhoahocService,
    private authService: AuthenticationService
  ) { }
  
  ngOnInit() {
    this.resetEvent();

    this.maLop = this.activatedRoute.snapshot.paramMap.get('maLop')
    this.sessionID = this.authService.sessionID;

    // this.apikhoahocService.getThoiKhoaBieuById(this.sessionID,this.maLop)
    this.apikhoahocService.getThoiKhoaBieuById(this.sessionID.sessionKey,'011019002')
      .subscribe(res => {
        console.log(res.DATA)
        this.layTKB = res.DATA;
        for(let item of this.layTKB){ 
          this.event = {
            buoi: item.buoi,
            phong: item.diaChi,
            diaChi: item.phong,
            startTime: new Date(item.thoiGianBD).toISOString(),
            endTime: new Date(item.thoiGianKT).toISOString(),
            allDay: false
          }
          console.log(this.event.startTime);

          if(this.event.buoi == ''){
            // console.log("rong");
          }else{
            // console.log("khong rong");
            this.addEvent();
          }
          
        }
        // console.log(this.layTKB)
        
      }, err => {
        console.log(err);
      });
    
  }

  resetEvent() {

    this.event = {
      buoi: '',
      diaChi: '',
      phong: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      allDay: false
    };

  }

  addEvent(){
    let eventCopy = {
      title: this.event.buoi,
      diaChi: this.event.diaChi,
      phong: this.event.phong,
      startTime: new Date(this.event.startTime),
      endTime: new Date(this.event.endTime),
      allDay: this.event.allDay

    }

    if (eventCopy.allDay) {
      let start = eventCopy.startTime;
      let end = eventCopy.endTime;

      eventCopy.startTime = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
      eventCopy.endTime = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1));
  
    }

    this.eventSource.push(eventCopy);
    console.log(eventCopy)
    this.myCalendar.loadEvents();
    // this.resetEvent();
  }

  // Change between month/week/day
  changeMode(mode) {
    this.calendar.mode = mode;
  }

  // Change current month/week/day
  next() {
    var swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slideNext();
  }
  
  back() {
    var swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slidePrev();
  }

  // Focus today
  today() {
    this.calendar.currentDate = new Date();
  }

  // Selected date reange and hence title changed
  onViewTitleChanged(title) {
    console.log("Title: ",title);
    this.viewTitle = title ;
    
  }
 

  // Calendar event was clicked
  async onEventSelected(event) {
    console.log(event)
    // Use Angular date pipe for conversion

    let start = formatDate(event.startTime, 'short', this.locale);
    let end = formatDate(event.endTime, 'short', this.locale);


    const alert = await this.alertCtrl.create({
      header: 'Buổi:' + event.title,
      subHeader: 'Tại: ' + event.diaChi + '. Phòng: ' + event.phong,
      message: 'Từ: ' + start + '<br><br>Đến: ' + end,
      buttons: ['OK']
    });
    alert.present();
  }
 
  // Time slot was clicked
  onTimeSelected(ev) {
    let selected = new Date(ev.selectedTime);
    this.event.startTime = selected.toISOString();
    selected.setHours(selected.getHours() + 1);
    this.event.endTime = (selected.toISOString());
  }
  

}
