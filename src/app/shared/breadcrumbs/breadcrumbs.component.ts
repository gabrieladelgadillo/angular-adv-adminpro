import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public tituloPrincipal: string = '';
  public tituloSubs$: Subscription = new Subscription;

  constructor(private router: Router, private route: ActivatedRoute) {

    this.tituloSubs$ = this.getArgumentoRuta()
                                .subscribe( ({ title }) => {
                                  this.tituloPrincipal = title;
                                  document.title = `AdminPro - ${ title }`;
                                });

  }

  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  getArgumentoRuta() {
    
    return this.router.events
    .pipe(
      filter( (event: any) => event instanceof ActivationEnd),
      filter( (event: ActivationEnd) => event.snapshot.firstChild === null ),
      map( (event: ActivationEnd) => event.snapshot.data ),
    );

  }

}
