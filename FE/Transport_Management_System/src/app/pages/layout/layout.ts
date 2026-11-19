import { NgClass } from '@angular/common';
import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  imports: [RouterOutlet, NgClass, RouterLink],
  selector: 'app-layout',
  styleUrl: './layout.css',
  templateUrl: './layout.html',
})
export class Layout implements AfterViewInit {
  isSideBarOpen: boolean = true;

  @ViewChildren('sidebarMenu')
  private sidebarMenus!: QueryList<ElementRef<HTMLDetailsElement>>;

  constructor(private readonly router: Router) {
    this.router.events
      .pipe(
        filter((event: unknown): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe((event) => this.syncOpenMenu(event.urlAfterRedirects));
  }

  ngAfterViewInit(): void {
    this.syncOpenMenu(this.router.url);
  }

  isActiveRoute(path: string): boolean {
    return this.router.url.split(/[?#]/)[0] === path;
  }

  private syncOpenMenu(url: string): void {
    const path = url.split(/[?#]/)[0];
    const activeMenu =
      ['/admin/overview', '/admin/create'].includes(path) ? 'booking' :
      ['/admin/road', '/admin/transmittial-document'].includes(path) ? 'job-order' :
      ['/admin/imprest', '/admin/bank-payment'].includes(path) ? 'finance' :
      [
        '/admin/contract-overview',
        '/admin/customer',
        '/admin/employee',
        '/admin/driver',
        '/admin/contract-customer',
        '/admin/contract-employee',
        '/admin/contract-driver',
      ].includes(path) ? 'contract' : null;

    this.sidebarMenus?.forEach(({ nativeElement }) => {
      nativeElement.open = nativeElement.dataset['menu'] === activeMenu;
    });
  }
}
