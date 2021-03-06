import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../services/gallery.service';
import { Image } from '../../model/image';

@Component({
  selector: 'app-photo-grid',
  templateUrl: './photo-grid.component.html',
  styleUrls: ['./photo-grid.component.css']
})
export class PhotoGridComponent implements OnInit {
  album: Array<Image> = [];  // got no time to spend on good coding conventions lol
  albumID: string = "sd5BgnnMtPdMnGZc8";
  callbackAlbum = (album) => { this.album = album };

  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
    this.galleryService.setAlbum(this.callbackAlbum, this.albumID);
    this.album = this.galleryService.getAlbum();

    // this.galleryService.getAlbum(this.albumID)
    //   .subscribe(data => {
    //     for (const d of (data as any)) {
    //       this.album.push(d);
    //     }
    //     console.log(this.album[0]);
    //   });

    // this.galleryService.getAlbum(this.albumID
    //   ).subscribe((response) => {
    //     Object.values(response).forEach((image: Image) => {
    //       this.album.push(image);
    //       //this.callbackAlbum(this.album);
    //   });
    // });

    // this.galleryService.getAlbum(this.albumID)
    //   .subscribe((response) => {
    //     this.album = [];
    //     Object.values(response).forEach((img) => {
    //       this.album.push(new Image(img['src'], img['srct'], img['title']));
    //       this.callbackAlbum(this.album);
    //     });
    //   });

    console.log("images retrieved");

    let top = document.querySelector("#top");
    if (top) {
      top.scrollIntoView();
    };
  }

  // wait until html view loaded before using jquery
  ngAfterViewInit(): void{
    console.log("in componenent: ", this.album[0]);
    
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


