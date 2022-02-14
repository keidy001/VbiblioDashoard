import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLibrairyComponent } from './add-librairy.component';

describe('AddLibrairyComponent', () => {
  let component: AddLibrairyComponent;
  let fixture: ComponentFixture<AddLibrairyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLibrairyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLibrairyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
