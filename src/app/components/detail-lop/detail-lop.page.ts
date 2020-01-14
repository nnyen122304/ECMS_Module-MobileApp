import { ApikhoahocService } from './../../services/apikhoahoc.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-lop',
  templateUrl: './detail-lop.page.html',
  styleUrls: ['./detail-lop.page.scss'],
})
export class DetailLopPage implements OnInit {
  lop;
  isCSS=true;
  constructor(private apikhoahocService:ApikhoahocService) { }

  ngOnInit() {
    this.lop = this.apikhoahocService.currentLop;
    console.log(this.apikhoahocService.currentLop);
  }

}
