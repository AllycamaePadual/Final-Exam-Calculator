import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycaculatorComponent } from './mycaculator.component';

describe('MycaculatorComponent', () => {
  let component: MycaculatorComponent;
  let fixture: ComponentFixture<MycaculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MycaculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MycaculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
