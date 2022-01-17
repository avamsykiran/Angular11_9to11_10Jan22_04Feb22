import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { ToVerbalPipe } from './to-verbal.pipe';
import { StructuralDirectivesDemoComponent } from './structural-directives-demo/structural-directives-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PipesDemoComponent,
    ToVerbalPipe,
    StructuralDirectivesDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
