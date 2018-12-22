import { TestBed } from '@angular/core/testing';

import { GetCommentService } from './get-comment.service';

describe('GetCommentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetCommentService = TestBed.get(GetCommentService);
    expect(service).toBeTruthy();
  });
});
