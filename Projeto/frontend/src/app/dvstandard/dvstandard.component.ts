import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';  

@Component({
  selector: 'app-dvstandard',
  templateUrl: './dvstandard.component.html',
  styleUrls: ['./dvstandard.component.css']
})
export class DVStandardComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {  
    config.interval = 2000;  
    config.wrap = true;  
    config.keyboard = false;  
    config.pauseOnHover = false;  
  }  

  ngOnInit(): void {
  }

}
