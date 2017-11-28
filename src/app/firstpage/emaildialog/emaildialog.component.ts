import { Component, Inject } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-emaildialog',
  templateUrl: './emaildialog.component.html',
  styleUrls: ['./emaildialog.component.css']
})
export class EmaildialogComponent {

  constructor(
  	@Inject(MAT_DIALOG_DATA) public data: any
  ) { }



  clickCard(input): void {
  	console.log(input);
  	let node = input;
  	let range = document.createRange();
  	range.selectNodeContents(node);
  	window.getSelection().removeAllRanges();
  	window.getSelection().addRange(range);
  }
}
