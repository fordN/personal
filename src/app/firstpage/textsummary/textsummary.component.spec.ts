import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextsummaryComponent } from './textsummary.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';

describe('TextsummaryComponent', () => {
  let component: TextsummaryComponent;
  let fixture: ComponentFixture<TextsummaryComponent>;
  let element;
  let de;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextsummaryComponent ],
      imports: [ FlexLayoutModule, ScrollToModule],
      providers: [ScrollToService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextsummaryComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 .textbox elements', async(() => {
    const compiled = de.nativeElement;
    expect(compiled.querySelectorAll('.textbox').length).toEqual(3);
  }));

});
