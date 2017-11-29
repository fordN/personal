import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmaildialogComponent } from './emaildialog.component';

import { MatDialogModule, MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('EmaildialogComponent', () => {
  let component: EmaildialogComponent;
  let fixture: ComponentFixture<EmaildialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmaildialogComponent ],
      imports: [MatDialogModule],
      providers: [MAT_DIALOG_DATA] 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmaildialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
