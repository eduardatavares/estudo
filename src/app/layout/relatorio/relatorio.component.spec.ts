import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioComponent } from './relatorio/relatorio.component';

describe('RelatorioComponent', () => {
  let component: RelatorioComponent;
  let fixture: ComponentFixture<RelatorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});