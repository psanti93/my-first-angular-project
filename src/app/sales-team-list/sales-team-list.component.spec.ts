import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesTeamListComponent } from './sales-team-list.component';

describe('SalesTeamListComponent', () => {
  let component: SalesTeamListComponent;
  let fixture: ComponentFixture<SalesTeamListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesTeamListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesTeamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
