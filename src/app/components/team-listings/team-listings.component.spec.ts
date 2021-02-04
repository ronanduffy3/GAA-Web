import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamListingsComponent } from './team-listings.component';

describe('TeamListingsComponent', () => {
  let component: TeamListingsComponent;
  let fixture: ComponentFixture<TeamListingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamListingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
