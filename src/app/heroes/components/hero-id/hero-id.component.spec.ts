import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroIdComponent } from './hero-id.component';

describe('HeroIdComponent', () => {
  let component: HeroIdComponent;
  let fixture: ComponentFixture<HeroIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
