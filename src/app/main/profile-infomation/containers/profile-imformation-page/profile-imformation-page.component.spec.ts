import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileImformationPageComponent } from './profile-imformation-page.component';

describe('ProfileImformationPageComponent', () => {
  let component: ProfileImformationPageComponent;
  let fixture: ComponentFixture<ProfileImformationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileImformationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileImformationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
