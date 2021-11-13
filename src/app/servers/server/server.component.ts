import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverName : String = "MainServer";
  constructor() { 
    setTimeout(() => {
      this.serverName = "ClusterServer";
    }, 3000);
  }

  ngOnInit(): void {
  }
  callWarningMessage = function(event) {
    alert("The server1 button is clicked");
  }

}
