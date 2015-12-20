import {Component, View, provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser'
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS,LocationStrategy, HashLocationStrategy} from 'angular2/router';


/* my-app start */
@Component({
	selector: 'my-app',
	templateUrl: "app/views/home/appcomp.html"
})
export class AppComponent{}
/* my-app end */

/*TestSelect start */
@Component({
  selector: 'test-select',
  templateUrl: "app/views/home/test.html"
})


export class TestSelect {}
/*TestSelect end */

/* mainroot start */
@Component({
  selector: 'mainroot',
  directives: [ROUTER_DIRECTIVES],
  template: `<a [routerLink]="['/Home']">Home</a>

              <a [routerLink]="['/Test']">Logins</a>

              <router-outlet></router-outlet>

              `

})

@RouteConfig([
	{path: '/',	component: AppComponent,	as:	'Home'},
  {path: '/Home',	component: AppComponent,	as:	'Home'},
  {path: '/Test',	component: TestSelect,	as:	'Test'}
])

class RootComponent {

}

/* mainroot end*/
bootstrap(RootComponent, [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);
