import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MessagesComponent } from './components/messages/messages.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';

const COMPONENTS = [
  MessagesComponent,
  ToolbarComponent
];

const MODULES = [
  MaterialModule,
  FlexLayoutModule,
  RouterModule
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, MODULES],
  exports: [MODULES, COMPONENTS],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if(parentModule){
      throw new Error('CoreModule has already been loaded. Import this module only in AppModule');
    }
  }
}
