import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubUserRepositoriesComponent } from './github-user-repositories.component';

describe('GithubUserRepositoriesComponent', () => {
  let component: GithubUserRepositoriesComponent;
  let fixture: ComponentFixture<GithubUserRepositoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubUserRepositoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubUserRepositoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
