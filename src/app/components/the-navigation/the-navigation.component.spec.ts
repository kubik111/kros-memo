import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheNavigationComponent } from './the-navigation.component';

describe('TheNavigationComponent', () => {
  let component: TheNavigationComponent;
  let fixture: ComponentFixture<TheNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
