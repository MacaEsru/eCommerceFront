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
      img: 'assets/images/imga.jpg',
      name: 'Creaciones Magik',
      description:'Contamos con manualidades enfocados en las temáticas de tu agrado.'
    },
    {
      img: 'assets/images/imgb.jpg',
      name: 'Creaciones Magik',
      description: 'Detalles para esa personita especial.'
    },
    {
      img: 'assets/images/imgc.png',
      name: 'Creaciones Magik',
      description: 'Creaciones para algún tipo de evento o fiesta sin importar el enfoque.'
    },
    {
      img: 'assets/images/imge.jpg',
      name:'Creaciones Magik',
      description: 'Nuestras manualidades son definidas por ser únicas e inigualables.'
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
