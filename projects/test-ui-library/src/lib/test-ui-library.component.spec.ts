import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestUiLibraryComponent } from './test-ui-library.component';

describe('TestUiLibraryComponent', () => {
  let component: TestUiLibraryComponent;
  let fixture: ComponentFixture<TestUiLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestUiLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestUiLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
