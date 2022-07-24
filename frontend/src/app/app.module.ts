import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SaveComponent } from './components/save/save.component';
import { IsReadyComponent } from './components/is-ready/is-ready.component';

import { AppRoutingModule } from './app-routing.module';

import { MenubarModule } from 'primeng/menubar';
import { TabViewModule } from 'primeng/tabview';
import { EditorModule } from 'primeng/editor';
import { PasswordModule } from 'primeng/password';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import { EditorComponent } from './components/editor/editor.component';


@NgModule({
  declarations: [
    AppComponent,
    SaveComponent,
    IsReadyComponent,
    EditorComponent
  ],
  imports: [
    DialogModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    PasswordModule,
    BrowserModule,
    MenubarModule,
    TabViewModule,
    EditorModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
