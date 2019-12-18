import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BluestackComponent } from './bluestack.component';

describe('BluestackComponent', () => {
  let component: BluestackComponent;
  let fixture: ComponentFixture<BluestackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BluestackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BluestackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
