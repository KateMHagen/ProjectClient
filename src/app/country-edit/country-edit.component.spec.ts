import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryEditComponent } from './country-edit.component';

describe('CountryEditComponent', () => {
  let component: CountryEditComponent;
  let fixture: ComponentFixture<CountryEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});