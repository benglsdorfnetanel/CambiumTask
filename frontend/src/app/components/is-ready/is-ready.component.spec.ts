import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsReadyComponent } from './is-ready.component';

describe('IsReadyComponent', () => {
  let component: IsReadyComponent;
  let fixture: ComponentFixture<IsReadyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsReadyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsReadyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
