import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  images= [

    {
      imageSrc:
        '/assets/R.jpg',
      imageAlt: 'nature1',
    },
    {
      imageSrc:
        '/assets/R (1).jpg',
      imageAlt: 'nature2',
    },
    {
      imageSrc:
        '/assets/images/Tunis11.jpg',
      imageAlt: 'person1',
    },
    {
      imageSrc:
        '/assets/images/R (3).jpg',
      imageAlt: 'person2',
    },
  ]
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectToAuthenticate() {
    console.log("ok");
    this.router.navigate(['user/login']);
  }

}
