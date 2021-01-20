import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedCountryComponent } from './detailed-country.component';

describe('DetailedCountryComponent', () => {
  let component: DetailedCountryComponent;
  let fixture: ComponentFixture<DetailedCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
