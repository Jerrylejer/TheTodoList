import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricViewComponent } from './historic-view.component';

describe('HistoricViewComponent', () => {
  let component: HistoricViewComponent;
  let fixture: ComponentFixture<HistoricViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
