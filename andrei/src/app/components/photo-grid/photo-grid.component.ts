import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../services/gallery.service';
import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as $ from 'jquery';//'nanogallery2';

@Component({
  selector: 'app-photo-grid',
  templateUrl: './photo-grid.component.html',
  styleUrls: ['./photo-grid.component.css']
})
export class PhotoGridComponent implements OnInit {
  album: Array<[any, any, any]> = [];  // got no time to spend on good coding conventions lol
  albumID: string = "sd5BgnnMtPdMnGZc8";
  callbackAlbum = (album) => { this.album = album };

  constructor(private renderer2: Renderer2, @Inject(DOCUMENT) private _document,
    private galleryService: GalleryService) { }

  ngOnInit(): void {
    const jquery = this.renderer2.createElement('script');
    jquery.onload = this.loadNanogalleryScript.bind(this);
    jquery.type = 'text/javascript';
    jquery.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js';
    jquery.text = '';
    this.renderer2.appendChild(this._document.body, jquery);
  }

  loadNanogalleryScript(): void {
    const nanogallery = this.renderer2.createElement('script');
    nanogallery.onload = this.loadNanogalleryScript.bind(this);
    nanogallery.type = 'text/javascript';
    nanogallery.src = 'https://unpkg.com/nanogallery2/dist/jquery.nanogallery2.js'
    nanogallery.text = '';
    this.renderer2.appendChild(this._document.body, nanogallery);
  }

  loadGalleryScript(): void {
    (<any>$("#my_nanogallery2")).nanogallery2({
      items:[
        { src: 'berlin1.jpg', srct: 'berlin1t.jpg', title: 'Berlin 1' },
        { src: 'berlin2.jpg', srct: 'berlin2t.jpg', title: 'Berlin 2' },
        { src: 'berlin3.jpg', srct: 'berlin3t.jpg', title: 'Berlin 3' }
      ],
      thumbnailWidth:  'auto',
      thumbnailHeight: 100,
      itemsBaseURL:    'https://nanogallery2.nanostudio.org/samples/',
      
      locationHash:    false
    });
  }

    // (<any>$('#my_nanogallery2')).nanogallery2({
      // items: this.album,
      // itemsBaseURL: "https://lh3.googleusercontent.com/",
      // locationHash: false,
      // thumbnailBorderVertical: 0,
      // thumbnailBorderHorizontal: 0,
      // thumbnailLabel: {
      //   position: "overImageOnBottom"
      // },
      // thumbnailHoverEffect2: "imageScaleIn80|labelAppear75",
      // thumbnailAlignment: "center",
      // thumbnailOpenImage: true,
      // thumbnailWidth: "auto",
      // thumbnailHeight: 300
    // })

    // this.galleryService.setAlbum(this.callbackAlbum, this.albumID);
    // this.album = this.galleryService.getAlbum();
    // console.log("images retrieved");

    // let top = document.querySelector("#top");
    // if (top) {
    //   top.scrollIntoView();
    //};

    // (<any>$("#my_nanogallery2")).nanogallery2({
    //   items: this.album,
    //   itemsBaseURL: "https://lh3.googleusercontent.com/",
    //   locationHash: false,
    //   thumbnailBorderVertical: 0,
    //   thumbnailBorderHorizontal: 0,
    //   thumbnailLabel: {
    //     position: "overImageOnBottom"
    //   },
    //   thumbnailHoverEffect2: "imageScaleIn80|labelAppear75",
    //   thumbnailAlignment: "center",
    //   thumbnailOpenImage: true,
    //   thumbnailWidth: "auto",
    //   thumbnailHeight: 300
    // })

  // $("#my_nanogallery2").ready(function() {
  //   (<any>$("#my_nanogallery2")).nanogallery2({
  //     items: this.album,
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
  //   })
  // });
}


