import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultpageComponent } from './defaultpage.component';

describe('DefaultpageComponent', () => {
  let component: DefaultpageComponent;
  let fixture: ComponentFixture<DefaultpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
