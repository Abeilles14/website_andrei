import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../services/gallery.service';

@Component({
  selector: 'app-photo-grid',
  templateUrl: './photo-grid.component.html',
  styleUrls: ['./photo-grid.component.css']
})
export class PhotoGridComponent implements OnInit {
  album: Array<[any, any, any]> = [];  // got no time to spend on good coding conventions lol
  albumID: string = "sd5BgnnMtPdMnGZc8";
  callbackAlbum = (album) => { this.album = album };

  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
    // this.galleryService.setAlbum(this.callbackAlbum, this.albumID);
    // this.album = this.galleryService.getAlbum();
    this.album = [];

    this.galleryService.getAlbum(this.albumID
      ).subscribe((response) => {
        Object.values(response).forEach((image) => {
          this.album.push(image);
          //this.callbackAlbum(this.album);
      });
    });

    console.log("images retrieved");

    let top = document.querySelector("#top");
    if (top) {
      top.scrollIntoView();
    };
  }

  // wait until html view loaded before using jquery
  ngAfterViewInit(): void{
    (<any>jQuery('#my_nanogallery2')).nanogallery2({
      items: this.album,
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
    })
  }
}


