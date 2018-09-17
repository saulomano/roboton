import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundamentacionComponent } from './fundamentacion.component';

describe('FundamentacionComponent', () => {
  let component: FundamentacionComponent;
  let fixture: ComponentFixture<FundamentacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundamentacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundamentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
