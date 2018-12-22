import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentReadComponent } from './comment-read.component';

describe('CommentReadComponent', () => {
  let component: CommentReadComponent;
  let fixture: ComponentFixture<CommentReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
