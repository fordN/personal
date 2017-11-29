import { Component, OnInit } from '@angular/core';

import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import { MatDialogModule, MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmaildialogComponent } from './emaildialog/emaildialog.component';

@Component({
  selector: 'app-iconrow',
  templateUrl: './iconrow.component.html',
  styleUrls: ['./iconrow.component.css']
})
export class IconrowComponent implements OnInit {

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

}
