import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLibrairyComponent } from './show-librairy.component';

describe('ShowLibrairyComponent', () => {
  let component: ShowLibrairyComponent;
  let fixture: ComponentFixture<ShowLibrairyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowLibrairyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowLibrairyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
