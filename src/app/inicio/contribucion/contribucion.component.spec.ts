import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContribucionComponent } from './contribucion.component';

describe('ContribucionComponent', () => {
  let component: ContribucionComponent;
  let fixture: ComponentFixture<ContribucionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContribucionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContribucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
