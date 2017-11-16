import { Component, OnInit } from '@angular/core';

import { TimelineMax, TimelineLite, TweenLite, TweenMax, Ease, Linear} from 'gsap';
	
import * as ScrollMagic from 'scrollmagic';

import "imports-loader?define=>false!scrollMagic/scrollmagic/uncompressed/plugins/animation.gsap";

@Component({
  selector: 'app-textsummary',
  templateUrl: './textsummary.component.html',
  styleUrls: ['./textsummary.component.css']
})


export class TextsummaryComponent implements OnInit {

	public textcontroller :any;

	
	options = {
    direction :  'row',
    mainAxis  : 'space-around',
    crossAxis :  'center'
  };

  layoutAlign() {
    return `${this.options.mainAxis} ${this.options.crossAxis}`;
  }
	
	constructor() {
    
	 }

  ngOnInit() {


		this.textcontroller = new ScrollMagic.Controller();

		// let timeline = new TimelineLite();
  //   timeline.to("#textcontainer p", 2, {scale: 2})	

    let tm = new TimelineLite();
    tm.set(".subtext", {opacity: 0.0, x: -100})
    // tm.set(".title", {opacity: 0.0})
    tm.to("#title1", 5, {scrambleText:{text:"ANALYST", chars:"0123456789Xio|><-_][~", revealDelay:0.5, ease:Linear.easeNone, tweenLength:false}});
    tm.to("#title2", 5, {scrambleText:{text:"DEVELOPER", chars:"0123456789Xio|><-_][~", revealDelay:0.5, ease:Linear.easeNone, tweenLength:false}});
    tm.to("#title3", 5, {scrambleText:{text:"CREATIVE", chars:"0123456789Xio|><-_][~", revealDelay:0.5, ease:Linear.easeNone, tweenLength:false}});
    tm.staggerTo(".subtext", 6, {opacity: 1, x: 0}, 0.5, 3);

    

		var scene = new ScrollMagic.Scene({
      triggerElement: "#textcontainer",
      // triggerHook: ".4",
      offset: -250,
      duration: 500
    }).setTween(tm)
    .addTo(this.textcontroller);


  	// <script src="/assets/js/ScrollMagic.js"></script>
  	// <script src="/assets/js/animation.gsap.js"></script>

  	// import('/assets/js/ScrollMagic.js').then(file => {
  	// 			this.controller = new this.ScrollMagic.Controller();
   // 			// perform additional interactions after the resource has been asynchronously fetched
			// 	});  			
  }

}
