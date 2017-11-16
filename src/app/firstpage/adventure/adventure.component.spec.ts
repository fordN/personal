import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureComponent } from './adventure.component';
import { FlexLayoutModule } from '@angular/flex-layout';

describe('AdventureComponent', () => {
  let component: AdventureComponent;
  let fixture: ComponentFixture<AdventureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdventureComponent ],
      imports: [FlexLayoutModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdventureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
