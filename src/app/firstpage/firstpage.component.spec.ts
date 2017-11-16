import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { FirstpageComponent } from './firstpage.component';
import { HeroheadlineComponent } from './heroheadline/heroheadline.component';
import { TextsummaryComponent } from './textsummary/textsummary.component';
import { AdventureComponent } from './adventure/adventure.component';
import { SvgartComponent } from './svgart/svgart.component';
import { FooterComponent } from './footer/footer.component';
import { DatavizComponent } from './dataviz/dataviz.component';

import {MatButtonModule, MatIconModule, MatCardModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

describe('FirstpageComponent', () => {
  let component: FirstpageComponent;
  let fixture: ComponentFixture<FirstpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [    
        FirstpageComponent,
        HeroheadlineComponent,
        TextsummaryComponent,
        AdventureComponent,
        SvgartComponent,
        FooterComponent
      ],
      imports: [
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        FlexLayoutModule
      ],
      schemas: [ NO_ERRORS_SCHEMA ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have the herodeadline component', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-heroheadline')).not.toBe(null);
  }));
  it('should have the textsummary component', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-textsummary')).not.toBe(null);
  }));
  it('should have the adventure component', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-adventure')).not.toBe(null);
  }));
  it('should have the svgart component', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-svgart')).not.toBe(null);
  }));
  it('should have the footer component', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-footer')).not.toBe(null);
  }));
});
