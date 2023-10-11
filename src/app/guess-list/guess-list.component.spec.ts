import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessListComponent } from './guess-list.component';

describe('GuessListComponent', () => {
  let component: GuessListComponent;
  let fixture: ComponentFixture<GuessListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GuessListComponent]
    });
    fixture = TestBed.createComponent(GuessListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
