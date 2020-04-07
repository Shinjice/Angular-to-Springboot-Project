import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AanmakenComponent } from './medewerkeraanmaken.component';

describe('RegistrationComponent', () => {
  let component: AanmakenComponent;
  let fixture: ComponentFixture<AanmakenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AanmakenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AanmakenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
