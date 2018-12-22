import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentValueComponent } from './comment-value.component';

describe('CommentValueComponent', () => {
  let component: CommentValueComponent;
  let fixture: ComponentFixture<CommentValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
