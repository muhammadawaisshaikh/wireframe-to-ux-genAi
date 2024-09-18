import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAiComponent } from './image-ai.component';

describe('ImageAiComponent', () => {
  let component: ImageAiComponent;
  let fixture: ComponentFixture<ImageAiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageAiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
