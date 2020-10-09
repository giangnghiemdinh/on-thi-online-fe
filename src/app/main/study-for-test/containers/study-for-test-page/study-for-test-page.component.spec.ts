import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyForTestPageComponent } from './study-for-test-page.component';

describe('StudyForTestPageComponent', () => {
  let component: StudyForTestPageComponent;
  let fixture: ComponentFixture<StudyForTestPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyForTestPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyForTestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
