import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TeamMemberModalComponent } from './team-member-modal.component';

describe('TeamMemberModalComponent', () => {
  let component: TeamMemberModalComponent;
  let fixture: ComponentFixture<TeamMemberModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamMemberModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamMemberModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
