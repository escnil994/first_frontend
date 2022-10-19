import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MoreProjectComponent} from './more-project.component';

describe('MoreProjectComponent', () => {
  let component: MoreProjectComponent;
  let fixture: ComponentFixture<MoreProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MoreProjectComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
