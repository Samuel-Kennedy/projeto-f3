import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMenuComponent } from './info-menu.component';
jest.mock('@swimlane/ngx-charts', () => ({
  LegendPosition: {
    Below: 'below',
    Above: 'above',
  }
}));
describe('InfoMenuComponent', () => {
  let component: InfoMenuComponent;
  let fixture: ComponentFixture<InfoMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoMenuComponent]
    });
    fixture = TestBed.createComponent(InfoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
