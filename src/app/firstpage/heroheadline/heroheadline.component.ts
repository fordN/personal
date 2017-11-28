import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { TimelineMax, TimelineLite, TweenMax, Ease } from 'gsap';
// import DrawSVGPlugin from '/assets//js/DrawSVGPlugin.js'
// import CSSPlugin from "gsap/CSSPlugin";
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

import { MatDialogModule, MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmaildialogComponent } from '../emaildialog/emaildialog.component';


@Component({
  selector: 'app-heroheadline',
  templateUrl: './heroheadline.component.html',
  styleUrls: ['./heroheadline.component.css']
})

export class HeroheadlineComponent implements OnInit {
	constructor(
		public dialog: MatDialog,
  		iconRegistry: MatIconRegistry, 
  		sanitizer: DomSanitizer
  	) { 
  		iconRegistry.addSvgIconSet(
        sanitizer.bypassSecurityTrustResourceUrl("https://fonts.googleapis.com/icon?family=Material+Icons"));
        iconRegistry.addSvgIcon(
        	'github',
        	sanitizer.bypassSecurityTrustResourceUrl('assets/svg/icons/github-logo.svg'));
        iconRegistry.addSvgIcon(
        	'instagram',
        	sanitizer.bypassSecurityTrustResourceUrl('assets/svg/icons/instagram-logo.svg'));
        iconRegistry.addSvgIcon(
        	'linkedin',
        	sanitizer.bypassSecurityTrustResourceUrl('assets/svg/icons/linkedin-logo.svg'));
  	}

  	openEmailDialog(): void {
		this.dialog.open(EmaildialogComponent, {
		  data: {
		  },
		  hasBackdrop: true,
		  backdropClass: 'modal-backdrop'
		});
		this.trackOutBoundLink('myemail');
	};

	trackOutBoundLink(url: string): void {
		gtag('event', 'outbound', {
		  'event_category': 'clicklink',
		  'event_label': url
		});
	}

	ngOnInit() {
	}
 	ngAfterViewInit(){
 		var master = new TimelineLite();
		// master.timeScale(1.4);
		master.timeScale(20);
		master.add(mainLine(), "mt1")
			.add(secondaryLines(), "mt2-=2.5")
			.add(thirdLines(), "mt3-=2")
			.add(fourthLines(), "mt4-=3")
			.add(headline(), "headline-=2")
			.add(filter(), "filter-=10")
			.add(button(), "button-=9")
			.add(toplinks(), "toplinks-=6");


	    function mainLine(): TimelineLite {
	    	var tl = new TimelineLite();			
			tl.fromTo(".cls-2", 4, {drawSVG: "100% 100%"}, {drawSVG: "100% 0%"});
			return tl;
	    }
	    function secondaryLines(): TimelineLite {
	    	var tl = new TimelineLite
	    	tl.staggerFromTo(".cls-3", 1.5, {drawSVG: "0"}, {drawSVG: "100%"}, 0.1)
	    	return tl;
	    }
	    function thirdLines(): TimelineLite {
	    	var tl = new TimelineLite
	    	tl.staggerFromTo(".cls-4", .5, {drawSVG: "0"}, {drawSVG: "100%"}, 0.1)
	    	return tl;
	    }
	    function fourthLines(): TimelineLite {
	    	var tl = new TimelineLite
	    	tl.staggerFromTo(".cls-5", .5, {drawSVG: "0"}, {drawSVG: "100%"}, 0.01)
	    	return tl;
	    }
	    function filter(): TimelineLite {
	    	var tl = new TimelineLite
	    	tl.to(".cls-1", 7, {opacity: .75})
	    	tl.to(".cls-1", 5, {opacity: .64})
	    	return tl;
	    }   
	    function headline(): TimelineLite {
	    	var tl = new TimelineLite 

			let mtns: HTMLElement[] = [].slice.call(document.querySelectorAll('.cls-2, .cls-3, .cls-4, .cls-5, .cls-6'));
			let text: HTMLElement[] = [].slice.call(document.querySelectorAll('.cls-7')).reverse();
			let mtnpaths: HTMLElement[] = mtns.filter(item => item.nodeName=="path");
			let mtnothers: HTMLElement[] = mtns.filter(item => item.nodeName!=="path");
			let shapetime: number = 5

			tl.to([mtnpaths.slice(text.length,-1), mtnothers], shapetime/2, {opacity:0}, shapetime/3) 
		    text.forEach((element, i) => {
		    	tl.to(mtnpaths[i], shapetime, {morphSVG: element, opacity: 1}, 0)
		    });
		    tl.to(mtns, 2, {opacity: 0}, shapetime )
	    	tl.to('#headline path', 3, {fill: "#ffffff", stroke: "#ffffff", opacity: 1}, shapetime)  
	    	// tl.to(mtns.slice(text.length,-1), 3, {opacity: 0}, 0)  	
	    	return tl;
	    }
	    function button(): TimelineLite {
	    	let tl = new TimelineLite
	    	let btn: Element = document.querySelector('.floatbutton')
	    	tl.to(btn, 5, {opacity: 1})
	    	return tl;
	    }
	    function toplinks(): TimelineLite {
	    	let tl = new TimelineLite
	    	let links: HTMLElement[] = [].slice.call(document.querySelectorAll('.toplinks'))
	    	tl.staggerTo(links, 5, {opacity: 1}, .75)
	    	return tl;
	    }
  	}
}

