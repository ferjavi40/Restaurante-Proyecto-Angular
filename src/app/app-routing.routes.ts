import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';


//modulos










const app_route: Routes = [


    // {path:'**',pathMatch:'full', redirectTo:'home'}
];



@NgModule({
    imports: [
        RouterModule.forRoot(app_route, {useHash:true} )//esto es para configurar el uso del hash
    ],
    exports:[
        RouterModule
    ]

})
export class AppRoutingModule {

}