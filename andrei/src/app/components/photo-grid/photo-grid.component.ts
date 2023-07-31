import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../services/gallery.service';
import { Image } from '../../model/image';

@Component({
  selector: 'app-photo-grid',
  templateUrl: './photo-grid.component.html',
  styleUrls: ['./photo-grid.component.css']
})
export class PhotoGridComponent implements OnInit {
  album: Array<Image> = [];
  albumID: string = "g1SWLdaYe6fp5qg56";    // part of shortened link obtained by sharing album
  // prev albumID sd5BgnnMtPdMnGZc8

  constructor(private galleryService: GalleryService) { }

  callbackAlbum = (album) => { this.album = album };

  // wait until html view loaded before using jquery
  callbackNanogallery = () => {
    console.log("formatting nanogallery for album: ", this.album[0]);
    
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
  }; 

  ngOnInit(): void {
    this.galleryService.setAlbum(this.callbackAlbum, this.callbackNanogallery, this.albumID)
    .then(() => {
      console.log("images retrieved");

    });
    
    let top = document.querySelector("#top");
    if (top) {
      top.scrollIntoView();
    };
  };

}


