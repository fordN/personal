import { Component, OnInit} from '@angular/core';
import { TimelineMax, TimelineLite, TweenLite, TweenMax, Ease, Linear} from 'gsap';	
import * as ScrollMagic from 'scrollmagic';

@Component({
  selector: 'app-svgart',
  templateUrl: './svgart.component.html',
  styleUrls: ['./svgart.component.css']
})
export class SvgartComponent implements OnInit {

	public svgcontroller :any;

	fullfilenames: { id: number, name: string, iterations: number, animateTo: string, textdate: string, prompt: string }[] 

	// = [{id:1, name: "assets/svg/101317.svg", iterations: 0, animateTo: 'rotate', textdate: 'October 13', prompt: 'bar chart inspired' },
	// 		{id:2, name: "assets/svg/101617.svg", iterations: 0, animateTo: 'rotateAroundCenter', textdate: 'October 16', prompt: 'center out animation' },
	// 		{id:3, name: "assets/svg/101717.svg", iterations: 0, animateTo: 'assets/svg/101717_animateTo.svg', textdate: 'October 17', prompt: 'balance' },
	// 		{id:4, name: "assets/svg/101817.svg", iterations: 0, animateTo: 'rotate', textdate: 'October 18', prompt: '(10 lines, 1 shape) > chaos' }];
	
	constructor() { 
		this.fullfilenames = [
			{id:1, name: "assets/svg/101317.svg", iterations: 0, animateTo: 'rotate', textdate: 'October 13', prompt: 'bar chart inspired' },
			{id:2, name: "assets/svg/101617.svg", iterations: 0, animateTo: 'rotateAroundCenter', textdate: 'October 16', prompt: 'center out animation' },
			{id:3, name: "assets/svg/101717.svg", iterations: 0, animateTo: 'assets/svg/101717_animateTo.svg', textdate: 'October 17', prompt: 'balance' },
			{id:4, name: "assets/svg/101817.svg", iterations: 0, animateTo: 'rotate', textdate: 'October 18', prompt: '(10 lines, 1 shape) > chaos' }
		]
	}

	ngOnInit() {
		console.log('init');
		console.log(document.querySelectorAll('#svggrid'));
		this.svgcontroller = new ScrollMagic.Controller();
	    let tline = new TimelineLite();
	    tline.set("#svggrid", {opacity: 0.0, x:-500})
	    tline.to("#svggrid", 3, {opacity: 1, x: 0})	    

		var scene = new ScrollMagic.Scene({
	      triggerElement: "#artcontainer",
	      // triggerHook: ".4",
	      offset: -300,
	      duration: 200,
	      reverse: false	   
	    }).setTween(tline)
	    .addTo(this.svgcontroller);

	}
}