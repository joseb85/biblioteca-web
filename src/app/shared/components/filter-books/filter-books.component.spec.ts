import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FilterBooksComponent } from "./filter-books.component";

describe("FilterBooksComponent", () => {
  let component: FilterBooksComponent;
  let fixture: ComponentFixture<FilterBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FilterBooksComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'biblioteca-web'`, () => {});
});
