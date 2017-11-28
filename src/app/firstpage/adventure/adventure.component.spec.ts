import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureComponent } from './adventure.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';

describe('AdventureComponent', () => {
  let component: AdventureComponent;
  let fixture: ComponentFixture<AdventureComponent>;
  let element;
  let de;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdventureComponent ],
      imports: [
        FlexLayoutModule,
        ScrollToModule
      ],
      providers: [
        ScrollToService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdventureComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should contain 3 elements of class .advimg', async(() => {
    const compiled = de.nativeElement;
    expect(compiled.querySelectorAll('.advimg').length).toEqual(3);
  }));


});
