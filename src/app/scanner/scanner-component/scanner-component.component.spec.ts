import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScannerComponentComponent } from './scanner-component.component';

describe('ScannerComponentComponent', () => {
  let component: ScannerComponentComponent;
  let fixture: ComponentFixture<ScannerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScannerComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScannerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
