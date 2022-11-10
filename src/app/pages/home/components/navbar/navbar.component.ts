import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Menu} from "../../home.model";
import {TrackBy} from "../../../../shared/utils/trackBy";
import {NavigationEnd, Router, RouterLink} from "@angular/router";
import {filter} from "rxjs";
import {CommonModule} from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [
    RouterLink,
    CommonModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent  extends TrackBy implements OnInit {
  @Input() menu: Menu[] = [];


  show = false;
  route = this.router.url;
  constructor(
    private router: Router,
    private cdr$: ChangeDetectorRef
  ) {
    super();
  }

  ngOnInit(): void {
    this.initRouteListener();
  }

  isActiveMenu(value: string): boolean {
    return this.route.includes(value);
  }

  private initRouteListener(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe((event: any) => {
        this.cdr$.markForCheck()
        this.route = event.url;
      });
  }
}
