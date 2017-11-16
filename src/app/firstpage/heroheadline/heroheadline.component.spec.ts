import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroheadlineComponent } from './heroheadline.component';
import {MatButtonModule, MatIconModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

describe('HeroheadlineComponent', () => {
  let component: HeroheadlineComponent;
  let fixture: ComponentFixture<HeroheadlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroheadlineComponent ],
      imports: [
        MatButtonModule,
        MatIconModule,
        FlexLayoutModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroheadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
