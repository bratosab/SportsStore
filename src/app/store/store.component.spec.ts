import { TestBed } from "@angular/core/testing";
import { StoreComponent } from "./store.component";
import { provideHttpClient } from "@angular/common/http";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { provideRouter } from "@angular/router";
import { routes } from "../app.routes";

describe("StoreComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreComponent],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter(routes)],
    }).compileComponents();
  });

  it("should create component", () => {
    const fixture = TestBed.createComponent(StoreComponent);
    const store = fixture.componentInstance;

    expect(store).toBeTruthy();
  });

  it("has navbar with text", () => {
    const fixture = TestBed.createComponent(StoreComponent);

    const dom = fixture.nativeElement as HTMLElement
    expect(dom.querySelector(".navbar-brand")?.textContent).toContain("SPORTS STORE")
  })
});
