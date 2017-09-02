import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdSidenavModule, MdIconModule, MdButtonModule, MdToolbarModule, MdListModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { PerfectScrollbarConfigInterface, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { DashboardLayoutComponent } from './layout/dashboard/dashboard-layout.component';
import { AccordionLinkDirective, AccordionAnchorDirective, AccordionDirective } from './directives/accordion';
import { ApiService } from './services/api.service';
import { RequestService } from './services/request.service';
import { SearchService } from './services/youtube/search.service';

const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    DashboardLayoutComponent,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdIconModule,
    MdListModule,
    MdSidenavModule,
    MdToolbarModule,
    PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG),
    RouterModule,
  ],
  providers: [
    ApiService,
    RequestService,
    SearchService,
  ]
})
export class CoreModule {

  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
