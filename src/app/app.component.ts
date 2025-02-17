import {Component, OnInit} from '@angular/core';
import {Unsubscribable} from './component/Unsubscribable';
import { Location } from '@angular/common';
import {HttpService} from './http.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})

export class AppComponent extends Unsubscribable implements OnInit {

  private userPaths: Array<string> = ['/manager/apartments', '/manager/booking',
                          '/manager/services', '/manager/staff', '/manager/tasks'];
  condition: boolean;

  constructor(private location: Location) {
    super();
  }

  ngOnInit() {
    if (this.userPaths.includes(this.location.path())) {
      this.condition = false;
    } else {
      this.condition = true;
    }
  }
}
