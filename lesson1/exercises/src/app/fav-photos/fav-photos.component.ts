import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = "Emily's Random Images";
  image1 = 'https://littleblacksubs.files.wordpress.com/2021/01/7317d471f7fadf6918662555f9369252.jpg';
  image2 = 'https://i.imgur.com/gGg1AK0.jpeg';
  image3 = 'https://i.imgur.com/hZ85NZi.jpeg';

  constructor() { }

  ngOnInit() {
  }

}