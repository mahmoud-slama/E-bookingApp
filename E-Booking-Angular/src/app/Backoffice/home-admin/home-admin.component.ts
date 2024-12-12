import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {

  constructor(private router: Router) { }

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

  ngOnInit(): void {
  }

  redirectToAuthenticate(){
    console.log("ok");
    this.router.navigate(['user/login']);
  }

}
