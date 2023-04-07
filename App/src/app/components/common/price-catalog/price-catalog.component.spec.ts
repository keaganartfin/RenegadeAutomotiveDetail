import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceCatalogComponent } from './price-catalog.component';

describe('PriceCatalogComponent', () => {
  let component: PriceCatalogComponent;
  let fixture: ComponentFixture<PriceCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceCatalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
