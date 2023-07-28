import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PhotoGridComponent } from './photo-grid.component';

describe('PhotoGridComponent', () => {
  let component: PhotoGridComponent;
  let fixture: ComponentFixture<PhotoGridComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
