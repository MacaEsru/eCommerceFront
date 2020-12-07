import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {

  images:any[]=[
    {
      img: 'assets/images/imga.jpg'
    },
    {
      img: 'assets/images/imgb.jpg'
    },
    {
      img: 'assets/images/imgc.png'
    },
    {
      img: 'assets/images/imge.jpg'
    },
  ];

  constructor(private _config:NgbCarouselConfig) {
    _config.interval = 3000;
    _config.pauseOnHover = true;
    _config.showNavigationArrows = false;
   }

  ngOnInit(): void {
  }

}
