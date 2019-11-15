import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',

  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created";
  serverName = '';

  // username
  enableButton = false;
  userName = "";

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = "Server was created";
  }


  onUpdateServerName(event: Event) {
    this.serverName =  (<HTMLInputElement>event.target).value;
  }

  // // username
  // onCreateUser(event: Event) {
  //   this.userName =  (<HTMLInputElement>event.target).value;
  // }

  onChangeUser() {
    if (this.userName == "") {
      this.enableButton = false;
    } else {
      this.enableButton = true;
    }
  }

  resetField() {
    this.userName = "";
    this.enableButton = false;
  }

}
