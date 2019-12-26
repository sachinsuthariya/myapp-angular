import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home.component";
import { PostComponent } from "../post/post.component";

const route: Routes = [
    {
        path: '',
        component: HomeComponent
    }
]
@NgModule({
    declarations: [
        HomeComponent,
        PostComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(route)
    ],
    providers: [],
})

export class HomeModule {

}

