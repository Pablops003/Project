import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PabpeiserComponenteComponent } from './pabpeiser-componente.component';

describe('PabpeiserComponenteComponent', () => {
  let component: PabpeiserComponenteComponent;
  let fixture: ComponentFixture<PabpeiserComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PabpeiserComponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PabpeiserComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
