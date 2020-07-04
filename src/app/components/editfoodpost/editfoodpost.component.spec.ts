import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfoodpostComponent } from './editfoodpost.component';

describe('EditfoodpostComponent', () => {
  let component: EditfoodpostComponent;
  let fixture: ComponentFixture<EditfoodpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditfoodpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditfoodpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
