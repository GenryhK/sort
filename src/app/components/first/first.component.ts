import {Component, OnInit} from '@angular/core';
import {GlobalService} from '../../services/global.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']

})
export class FirstComponent implements OnInit {

  constructor(public globalService: GlobalService) {
  }

  ngOnInit() {
  }

}
