import { Component, OnInit } from '@angular/core';

import { TimelineMax, TimelineLite, TweenLite, TweenMax, Ease, Linear} from 'gsap';
	
import * as ScrollMagic from 'scrollmagic';

@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.css']
})
export class AdventureComponent implements OnInit {

	public adventurecontroller :any;

 	constructor() { }

	ngOnInit() {
		this.adventurecontroller = new ScrollMagic.Controller();

	    let timeline = new TimelineLite();
	    timeline.set(".advimg", {opacity: 0.0, x: 800})
	    timeline.to(".advimg", 3, {opacity: 1, x: 0})	    

		var scene = new ScrollMagic.Scene({
	      triggerElement: "#photocontainer",
	      // triggerHook: ".4",
	      offset: -200,
	      duration: 500
	    }).setTween(timeline)
	    .addTo(this.adventurecontroller);


	}

}
