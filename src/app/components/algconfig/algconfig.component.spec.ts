import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgconfigComponent } from './algconfig.component';

describe('AlgconfigComponent', () => {
  let component: AlgconfigComponent;
  let fixture: ComponentFixture<AlgconfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlgconfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
