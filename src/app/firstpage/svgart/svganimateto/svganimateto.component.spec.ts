import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvganimatetoComponent } from './svganimateto.component';

describe('SvganimatetoComponent', () => {
  let component: SvganimatetoComponent;
  let fixture: ComponentFixture<SvganimatetoComponent>;
  let element;
  let de;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvganimatetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvganimatetoComponent);
    component = fixture.componentInstance;
    // component.artdata.animateTo = 'rotate'
    component.artdata = {id:1, name: "assets/svg/101317.svg", iterations: 0, animateTo: 'rotate', textdate: 'October 13', prompt: 'bar chart inspired' };
    element = fixture.nativeElement;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have defined input data (artdata)', () => {
    expect(component.artdata.name).toBeDefined();
  });

  it('should contain at least 1 <embed>', async(() => {    
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('embed').length).toBeGreaterThan(0);
  }));

  it('should contain at least 1 svg', async(() => {    
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('svg').length).toBeGreaterThan(0);
  }));


});
