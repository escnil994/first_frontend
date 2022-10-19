import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FiveCommentsComponent} from './five-comments.component';

describe('FiveCommentsComponent', () => {
  let component: FiveCommentsComponent;
  let fixture: ComponentFixture<FiveCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FiveCommentsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
