import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCompareComponent } from './hero-compare.component';

describe('HeroCompareComponent', () => {
  let component: HeroCompareComponent;
  let fixture: ComponentFixture<HeroCompareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroCompareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
