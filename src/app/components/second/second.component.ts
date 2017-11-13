import {Component, OnInit} from '@angular/core';
import {GlobalService} from '../../services/global.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']

})
export class SecondComponent implements OnInit {

  constructor(public globalService: GlobalService) {
  }

  ngOnInit() {
  }

}
