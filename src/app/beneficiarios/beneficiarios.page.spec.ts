import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BeneficiariosPage } from './beneficiarios.page';

describe('BeneficiariosPage', () => {
  let component: BeneficiariosPage;
  let fixture: ComponentFixture<BeneficiariosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeneficiariosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BeneficiariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
