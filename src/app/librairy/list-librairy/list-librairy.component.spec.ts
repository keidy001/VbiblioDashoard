import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLibrairyComponent } from './list-librairy.component';

describe('ListLibrairyComponent', () => {
  let component: ListLibrairyComponent;
  let fixture: ComponentFixture<ListLibrairyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLibrairyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLibrairyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
