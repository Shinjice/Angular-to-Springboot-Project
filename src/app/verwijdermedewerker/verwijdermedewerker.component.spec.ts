import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerwijderComponent } from './verwijdermedewerker.component';

describe('VerwijderComponent', () => {
  let component: VerwijderComponent;
  let fixture: ComponentFixture<VerwijderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerwijderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerwijderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
