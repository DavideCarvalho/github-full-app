import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubUserDetailsComponent } from './github-user-details.component';

describe('GithubUserDetailsComponent', () => {
  let component: GithubUserDetailsComponent;
  let fixture: ComponentFixture<GithubUserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubUserDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
