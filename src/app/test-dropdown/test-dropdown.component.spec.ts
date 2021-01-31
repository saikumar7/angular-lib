import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDropdownComponent } from './test-dropdown.component';

describe('TestDropdownComponent', () => {
  let component: TestDropdownComponent;
  let fixture: ComponentFixture<TestDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
