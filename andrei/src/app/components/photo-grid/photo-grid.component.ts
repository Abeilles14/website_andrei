import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../services/gallery.service';
import * as $ from 'jquery'

@Component({
  selector: 'app-photo-grid',
  templateUrl: './photo-grid.component.html',
  styleUrls: ['./photo-grid.component.css']
})
export class PhotoGridComponent implements OnInit {
  
  items: any = [];  // got no time to spend on good coding conventions lol
  albumID: string = "sd5BgnnMtPdMnGZc8";

  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
    this.items = this.galleryService.getAlbum(this.albumID);
    console.log("images retrieved");

    let top = document.querySelector("#top");
    if (top) {
      top.scrollIntoView();
    }

    $("#my_nanogallery2").nanogallery2({
      items: [{

      }],
      itemsBaseURL: "https://lh3.googleusercontent.com/",
      locationHash: false,
      thumbnailBorderVertical: 0,
      thumbnailBorderHorizontal: 0,
      thumbnailLabel: {
        position: "overImageOnBottom"
      },
      thumbnailHoverEffect2: "imageScaleIn80|labelAppear75",
      thumbnailAlignment: "center",
      thumbnailOpenImage: true,
      thumbnailWidth: "auto",
      thumbnailHeight: 300
    });
  }

  // $(document).ready(function() {
  //   $("#my_nanogallery2").nanogallery2({
  //     items: [{

  //     }],
  //     itemsBaseURL: "https://lh3.googleusercontent.com/",
  //     locationHash: false,
  //     thumbnailBorderVertical: 0,
  //     thumbnailBorderHorizontal: 0,
  //     thumbnailLabel: {
  //       position: "overImageOnBottom"
  //     },
  //     thumbnailHoverEffect2: "imageScaleIn80|labelAppear75",
  //     thumbnailAlignment: "center",
  //     thumbnailOpenImage: true,
  //     thumbnailWidth: "auto",
  //     thumbnailHeight: 300
  // });
}
