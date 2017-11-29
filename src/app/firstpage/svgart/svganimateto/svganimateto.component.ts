import { Component, Input, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

import { TimelineLite, TweenMax, Ease, Linear} from 'gsap';

import * as MorphSVGPlugin from "assets/js/MorphSVGPlugin.js";

@Component({
  selector: 'app-svganimateto',
  inputs: ['artdata'],	
  templateUrl: './svganimateto.component.html',
  styleUrls: ['./svganimateto.component.css']
})

export class SvganimatetoComponent implements OnInit {

	@Input() artdata: { id: number, name: string, iterations: number, animateTo: string, textdate: string, prompt: string };
	
	tween: TimelineLite;
	tweentime: number = 0.7;

	constructor(public sanitizer: DomSanitizer) { 		
	}

	ngOnInit() {

	}
	ngAfterViewInit() {
		// console.log('SvganimatetoComponent:artdata--> ', this.artdata);
	}
	createId(id, type): string {
		let newId: string = type.concat(id);
		return newId;
	}

	isAnimateTo(item): boolean {
		if(item.animateTo.length>0 && item.animateTo!=='rotate' && item.animateTo!=='rotateAroundCenter'){
			return true;
		} else {
			return false;
		}
	}

	startSketch(item): void {
		if(item.animateTo){		
			if(item.animateTo=='rotate'){
				let initQuery: string = this.createId(item.id, 'init')
				let initEls: HTMLElement[] = getPaths(initQuery);
				let tl = new TimelineLite({paused:true});	
				initEls.forEach((element, i) => {
					tl.to(element, this.tweentime, {rotation: 360, transformOrigin: "50% 50%", repeat: item.iterations, visibility: 'visible', opacity: .8, ease:Linear.easeNone}, 0)
				});	
				this.tween=tl;
				this.tween.play();
			}
			else if(item.animateTo=='rotateAroundCenter'){
				let initQuery: string = this.createId(item.id, 'init')
				let initEls: HTMLElement[] = getPaths(initQuery);
				let tl = new TimelineLite({paused:true});	
				initEls.forEach((element, i) => {
					tl.to(element, this.tweentime, {rotation: 360, svgOrigin: "512 512", repeat: item.iterations, visibility: 'visible', opacity: 1, ease:Linear.easeNone}, 0)
				});	
				this.tween=tl;
				this.tween.play();
			}
			else if(item.animateTo=='draw'){
				let initQuery: string = this.createId(item.id, 'init')
				let initEls: HTMLElement[] = getPaths(initQuery);
				let tl = new TimelineLite({paused:true});	
				initEls.forEach((element, i) => {
					tl.fromTo(element, 0.08, {drawSVG: "100%"}, {drawSVG: "0%"})
				});	
				this.tween=tl;
				this.tween.play();
			}
			else{
				let initQuery: string = this.createId(item.id, 'init')
				let initEls: HTMLElement[] = getPaths(initQuery);
				console.log('initEls: ', initEls);
					
				let destQuery = this.createId(item.id, 'dest')
				let destEls: HTMLElement[] = getPaths(destQuery);
				console.log('destEls: ', destEls);						

				let tl = new TimelineLite({paused:true});	
				initEls.forEach((element, i) => {
					tl.to(element, this.tweentime, {morphSVG: destEls[i], visibility: 'visible', opacity: 1}, 0)
				});	
				this.tween=tl;
				this.tween.play();
			}
		}


		function getPaths(embedName: string): HTMLElement[]{
			// console.log(embedName);
			let embedElement: HTMLEmbedElement = document.embeds[embedName];
			// console.log(embedElement);
			let svgDoc: Document = embedElement.getSVGDocument()
			// console.log(svgDoc)
			let svgGroups: SVGGElement[] = [].slice.call(svgDoc.querySelectorAll('g[id]:not(#background)'))
			// console.log(svgGroups);

			var animateEls: HTMLElement[] = []
			for(let group of svgGroups){
				if(group.id!=='back'){
					let rawEls: HTMLElement[] = [].slice.call(group.querySelectorAll('*[class]'))
					MorphSVGPlugin.convertToPath(rawEls);
					let convertedEls: HTMLElement[] = [].slice.call(group.querySelectorAll('*[class]'))
					for (let el of convertedEls){						
						animateEls.push(el)	
					}
				}
			}
			return animateEls;
		}

	}

	reverseSketch(item): void {	
		if(item.animateTo){		
			if(item.animateTo=='rotate'){
				this.tween.reverse();
			}else{
				this.tween.reverse(0);
			}
		}
	}

}


