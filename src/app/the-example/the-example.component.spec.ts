import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheExampleComponent } from './the-example.component';

describe('TheExampleComponent', () => {
  let component: TheExampleComponent;
  let fixture: ComponentFixture<TheExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
