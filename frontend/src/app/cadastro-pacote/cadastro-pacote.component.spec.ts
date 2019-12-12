import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPacoteComponent } from './cadastro-pacote.component';

describe('CadastroPacoteComponent', () => {
  let component: CadastroPacoteComponent;
  let fixture: ComponentFixture<CadastroPacoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroPacoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPacoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
