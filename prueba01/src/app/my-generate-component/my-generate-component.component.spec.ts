import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGenerateComponentComponent } from './my-generate-component.component';

describe('MyGenerateComponentComponent', () => {
  let component: MyGenerateComponentComponent;
  let fixture: ComponentFixture<MyGenerateComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyGenerateComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGenerateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
