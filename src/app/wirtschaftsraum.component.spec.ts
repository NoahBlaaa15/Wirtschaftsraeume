import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WirtschaftsraumComponent } from './wirtschaftsraum.component';

describe('WirtschaftsraumComponent', () => {
  let component: WirtschaftsraumComponent;
  let fixture: ComponentFixture<WirtschaftsraumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WirtschaftsraumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WirtschaftsraumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
