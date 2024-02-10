import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxProtectComponent } from './max-protect.component';

describe('MaxProtectComponent', () => {
  let component: MaxProtectComponent;
  let fixture: ComponentFixture<MaxProtectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxProtectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaxProtectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
