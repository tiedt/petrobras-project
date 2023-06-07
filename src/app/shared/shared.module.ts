import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MessageService } from "primeng/api";
import {ToastModule} from 'primeng/toast';

@NgModule({
    declarations: [],
    exports: [
        CommonModule,
        ToastModule,
        ReactiveFormsModule,
    ],
    providers: [
        MessageService
    ],
})
export class SharedModule { }