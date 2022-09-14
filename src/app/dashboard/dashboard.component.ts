import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
all:boolean=true;
development:boolean=true;
business:boolean=true;
lifestyle:boolean=true;
 

  constructor() { }

  img= 'assets/Premium Vector _ Online class modern education digital schooling on laptop screen illustration.jpg'

  ngOnInit(): void {
  }
  switchTabs(value:any){
    if(value=='all'){
      this.all=true;
      this.business=true;
      this.development=true;
      this.lifestyle=true;
    }else if(value == 'development'){
      this.all=false;
      this.business=false;
      this.development=true;
      this.lifestyle=false;
    }else if(value == 'business'){
      this.all=false;
      this.business=true;
      this.development=false;
      this.lifestyle=false;
    }
    else if(value == 'lifestyle'){
      this.all=false;
      this.business=false;
      this.development=false;
      this.lifestyle=true;
      }else{
        alert('Something Went Wrong')
      }
    }
    }
  

