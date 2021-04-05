import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewBenefComponent } from './new-benef.component';

describe('NewBenefComponent', () => {
  let component: NewBenefComponent;
  let fixture: ComponentFixture<NewBenefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBenefComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewBenefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
