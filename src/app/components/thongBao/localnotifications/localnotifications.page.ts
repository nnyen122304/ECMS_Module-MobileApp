// import { AlertController } from '@ionic/angular';
import { Component, OnInit, Injectable } from '@angular/core';
// import { LocalNotifications, ELocalNotificationTriggerUnit} from '@ionic-native/local-notifications/ngx';
// import { Platform } from 'ionic-angular';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-localnotifications',
  templateUrl: './localnotifications.page.html',
  styleUrls: ['./localnotifications.page.scss'],
})
export class LocalnotificationsPage implements OnInit {
  // scheduled: any[];
  // constructor(
  //   public plt: Platform,
  //   private localNotifications: LocalNotifications,
  //   private alertCtrl : AlertController
  // ){
  //   this.plt.ready().then(()=>{
  //     this.localNotifications.on('click').subscribe(res => {
  //       console.log('click:', res);
  //       let msg = res.data ? res.data.mydata: '';
  //       this.showAlert(res.title, res.text, msg);
  //     });
  //     this.localNotifications.on('trigger').subscribe(res => {
  //       console.log('trigger:', res);
  //       let msg = res.data ? res.data.mydata: '';
  //       this.showAlert(res.title, res.text, msg);
  //     });

  //   });

  // }

  ngOnInit() {
  }

  // scheduleNotification(){
  //   this.localNotifications.schedule({
  //     id: 1,
  //     title: 'scheduleNotification',
  //     text: 'thong bao schedule',
  //     data: {mydata: 'Ngoc Yen'},
  //     trigger: {in: 5, unit: ELocalNotificationTriggerUnit.SECOND}
  //   });
  // }

  // recurringNotification(){
  //   this.localNotifications.schedule({
  //     id: 1,
  //     title: 'recurringNotification',
  //     text: 'thong bao recurring',
  //     trigger: {every: ELocalNotificationTriggerUnit.MINUTE}
  //   });
  // }

  // repeatingDaily(){
  //   this.localNotifications.schedule({
  //     id: 42,
  //     text: 'Good Morning',
  //     trigger: {every: {hour: 12, minute:10}}
  //   });
  // }

  // getAll(){
  //   this.localNotifications.getAll().then(res =>{
  //     this.scheduled = res;
  //   });
  // }

  // showAlert(header, sub, msg){
  //   this.alertCtrl.create({
  //     header: header,
  //     subHeader: sub,
  //     message: msg,
  //     buttons: ['Ok']
  //   }).then(alert => alert.present());
  // }

}
