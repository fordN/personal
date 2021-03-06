import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgartComponent } from './svgart.component';
import { MatCardModule } from '@angular/material'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { SvganimatetoComponent } from './svganimateto/svganimateto.component';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';

describe('SvgartComponent', () => {
  let component: SvgartComponent;
  let fixture: ComponentFixture<SvgartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        SvgartComponent,
        SvganimatetoComponent
      ],
      imports: [
        MatCardModule, 
        FlexLayoutModule,
        ScrollToModule
      ],
      providers: [ ScrollToService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h3 tag', async(() => {    
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('SVG SKETCHES');
  }));

  it('should have multiple .svgcontainer elements', async(() => {    
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.svgcontainer').length).toBeGreaterThan(1);
  }));

});
