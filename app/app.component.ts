import {Component, View, provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser'
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';


/* my-app start */
@Component({
  selector: 'my-app',
  templateUrl: "app/views/home/appcomp.html"
})
export class AppComponent { }
/* my-app end */

/*TestSelect start */
@Component({
  selector: 'login',
  templateUrl: "app/views/home/login.html"
})


export class LoginComponent { }
/*TestSelect end */

/*TestSelect start */
@Component({
  selector: 'dashboard',
  templateUrl: "app/views/home/dashboard.html"
})


export class DashboardComponent { }
/*TestSelect end */

/*TestSelect start */
@Component({
  selector: 'logout',
  templateUrl: "app/views/home/logout.html"
})

export class LogoutComponent { }
/*TestSelect end */

/* mainroot start */
@Component({
  selector: 'mainroot',
  directives: [ROUTER_DIRECTIVES],
  template: `<a [routerLink]="['Home']">Home</a>
            <a [routerLink]="['Login']">Login</a>
						<a [routerLink]="['Dashboard']">Dashboard</a>
						<a [routerLink]="['Logout']">Logout</a>
            <router-outlet></router-outlet>
            `
})

@RouteConfig([
  { path: '/', component: AppComponent, as: 'Default'},
  { path: '/home', component: AppComponent, as: 'Home'},
  { path: '/login', component: LoginComponent, as: 'Login'},
  { path: '/dashboard', component: DashboardComponent, as: 'Dashboard'},
  { path: '/logout', component: LogoutComponent, as: 'Logout'}
])

class RootComponent {

}

/* mainroot end*/
bootstrap(RootComponent, [ROUTER_PROVIDERS, provide(LocationStrategy, { useClass: HashLocationStrategy })]);
