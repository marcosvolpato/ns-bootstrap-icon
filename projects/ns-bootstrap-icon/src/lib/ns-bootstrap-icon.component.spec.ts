import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NsBootstrapIconComponent } from './ns-bootstrap-icon.component';


describe('NsBootstrapIconComponent', () => {
  let component: NsBootstrapIconComponent;
  let fixture: ComponentFixture<NsBootstrapIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NsBootstrapIconComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NsBootstrapIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
