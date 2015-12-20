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
  template: `<a [routerLink]="['/home']">Home</a>

              <a [routerLink]="['/login']">Login</a>

							<a [routerLink]="['/dashboard']">Dashboard</a>

							<a [routerLink]="['/logout']">Logout</a>

              <router-outlet></router-outlet>

              `

})

@RouteConfig([
	{path: '/',	component: AppComponent,	as:	'home'},
  {path: '/login',	component: AppComponent,	as:	'login'},
  {path: '/dashboard',	component: TestSelect,	as:	'dashboard'},
	{path: '/logout', component: TestSelect,  as: 'dashboard'}
])

class RootComponent {

}

/* mainroot end*/
bootstrap(RootComponent, [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);
