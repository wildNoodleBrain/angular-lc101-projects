import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
favLinks = [
  {
    name: "Mental Floss",
    URL: "https://www.mentalfloss.com/"
  },
  {
    name: "sci-hub",
    URL: "sci-hub.se"
  }
];
  constructor() { }

  ngOnInit() {
  }

}
