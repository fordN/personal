import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroheadlineComponent } from './heroheadline.component';
import {MatButtonModule, MatIconModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';

import { MatDialogModule, MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';


describe('HeroheadlineComponent', () => {
  let component: HeroheadlineComponent;
  let fixture: ComponentFixture<HeroheadlineComponent>;
  let element;
  let de;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroheadlineComponent ],
      imports: [
        HttpClientModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        FlexLayoutModule,
        ScrollToModule
      ],
      providers: [
        ScrollToService,
        MatDialog
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroheadlineComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('toplinks container should contain 4 mat-icon elements', async(() => {
    const compiled = de.nativeElement;
    expect(compiled.querySelectorAll('.toplinkscontainer mat-icon').length).toEqual(4);
  }));

});
