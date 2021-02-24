import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectWeUsComponent } from './connect-we-us.component';

describe('ConnectWeUsComponent', () => {
  let component: ConnectWeUsComponent;
  let fixture: ComponentFixture<ConnectWeUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectWeUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectWeUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
