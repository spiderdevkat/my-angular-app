import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchesMapComponentComponent } from './branches-map-component.component';

describe('BranchesMapComponentComponent', () => {
  let component: BranchesMapComponentComponent;
  let fixture: ComponentFixture<BranchesMapComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BranchesMapComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BranchesMapComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
