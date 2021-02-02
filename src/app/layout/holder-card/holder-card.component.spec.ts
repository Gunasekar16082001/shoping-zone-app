import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolderCardComponent } from './holder-card.component';

describe('HolderCardComponent', () => {
  let component: HolderCardComponent;
  let fixture: ComponentFixture<HolderCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolderCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HolderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
