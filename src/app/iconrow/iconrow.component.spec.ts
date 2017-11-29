import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconrowComponent } from './iconrow.component';

describe('IconrowComponent', () => {
  let component: IconrowComponent;
  let fixture: ComponentFixture<IconrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
