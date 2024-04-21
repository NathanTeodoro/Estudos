import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewprodutosComponent } from './viewprodutos.component';

describe('ViewprodutosComponent', () => {
  let component: ViewprodutosComponent;
  let fixture: ComponentFixture<ViewprodutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewprodutosComponent]
    });
    fixture = TestBed.createComponent(ViewprodutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
