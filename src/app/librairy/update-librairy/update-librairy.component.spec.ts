import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLibrairyComponent } from './update-librairy.component';

describe('UpdateLibrairyComponent', () => {
  let component: UpdateLibrairyComponent;
  let fixture: ComponentFixture<UpdateLibrairyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateLibrairyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLibrairyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
