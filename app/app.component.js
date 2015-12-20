System.register(['angular2/core', 'angular2/platform/browser', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1, router_1;
    var AppComponent, TestSelect, RootComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            /* my-app start */
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: "app/views/home/appcomp.html"
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
            /* my-app end */
            /*TestSelect start */
            TestSelect = (function () {
                function TestSelect() {
                }
                TestSelect = __decorate([
                    core_1.Component({
                        selector: 'test-select',
                        templateUrl: "app/views/home/test.html"
                    }), 
                    __metadata('design:paramtypes', [])
                ], TestSelect);
                return TestSelect;
            })();
            exports_1("TestSelect", TestSelect);
            /*TestSelect end */
            /* mainroot start */
            RootComponent = (function () {
                function RootComponent() {
                }
                RootComponent = __decorate([
                    core_1.Component({
                        selector: 'mainroot',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "<a [routerLink]=\"['/Home']\">Home</a>\n\n              <a [routerLink]=\"['/Test']\">Login</a>\n\n              <router-outlet></router-outlet>\n\n              "
                    }),
                    router_1.RouteConfig([
                        { path: '/', component: AppComponent, as: 'Home' },
                        { path: '/Home', component: AppComponent, as: 'Home' },
                        { path: '/Test', component: TestSelect, as: 'Test' }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], RootComponent);
                return RootComponent;
            })();
            /* mainroot end*/
            browser_1.bootstrap(RootComponent, [router_1.ROUTER_PROVIDERS, core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })]);
        }
    }
});
//# sourceMappingURL=app.component.js.map