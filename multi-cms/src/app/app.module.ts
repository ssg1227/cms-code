import { RegularViewerComponent } from './components/viewers/regular-viewer/regular-viewer.component';
import { UnpluggedViewerComponent } from './components/viewers/unplugged-viewer/unplugged-viewer.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageIntroduction } from './components/main-section/landing-page-introduction/landing-page-introduction.component';
import { TopNavBarComponent } from './components/top-nav-bar/top-nav-bar.component';

import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { RegisterAddUserComponent } from './components/admin/register-add-user/register-add-user.component';
import { MenuItemsComponent } from './components/menu-items/menu-items.component';
// import { ViewerComponent } from './components/viewer/viewer.component';
import { ContentManagementComponent } from './components/admin/content-management/content-management.component';
import { CategoriesService } from './services/categories.service';
// import { ListsFunnelService } from './services/lists-funnel.service';
import { CoreContentService } from './services/core-content.service';
import { AuthService } from './services/auth.service';
import { TabbingContainerComponent } from './components/tabbing-and-layers/tabbing-container/tabbing-container.component';
import { ThemeNavigationComponent } from './components/theme-navigation/theme-navigation.component';
import { TechnicalDetailComponent } from './components/admin/technical-detail/technical-detail.component';
import { AuthGuard } from './services/auth.guard';
import { RegularImageViewerComponent } from './components/viewers/templates/regular-image-viewer/regular-image-viewer.component';
import { CardImageViewerComponent } from './components/viewers/templates/card-image-viewer/card-image-viewer.component';
import { RegularBookChapterViewerComponent } from './components/viewers/templates/regular-book-chapter-viewer/regular-book-chapter-viewer.component';
import { CardBookChapterViewerComponent } from './components/viewers/templates/card-book-chapter-viewer/card-book-chapter-viewer.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingPageIntroduction,
    TopNavBarComponent,
    RegisterAddUserComponent,
    MenuItemsComponent,
    // ViewerComponent,
    RegularViewerComponent,
    UnpluggedViewerComponent,
    ContentManagementComponent,
    TabbingContainerComponent,
    ThemeNavigationComponent,
    TechnicalDetailComponent,
    RegularImageViewerComponent,
    CardImageViewerComponent,
    RegularBookChapterViewerComponent,
    CardBookChapterViewerComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule
    FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: LandingPageIntroduction },
      /*{
        path: 'technical', component: TechnicalDetailComponent,
        canActivate: [AuthGuard],
        data: {
          role: 'TECHNICAL',
        }
      },
      */
      {
        path: 'technical', component: TechnicalDetailComponent,
        canActivate: [AuthGuard],
        data: {
          role: ['ADMIN', 'TECHNICAL'],
        },
      },
      { path: 'intro/:index', component: LandingPageIntroduction },
      { path: 'register', component: RegisterAddUserComponent },
      { path: 'category/:theme', component: TabbingContainerComponent },
      { path: 'view/:theme', component: RegularViewerComponent },
      // {path: 'unplugged-view/:theme', component: UnpluggedViewerComponent }, till it gets fixed
      { path: 'unplugged-view/:theme', component: RegularViewerComponent },
      { path: 'content-manage', component: ContentManagementComponent },
      { path: 'technical2', component: TechnicalDetailComponent },
      { path: '', component: LandingPageIntroduction },
      { path: '**', component: LandingPageIntroduction },
    ])
  ],
  providers: [CategoriesService, AuthService, CoreContentService], //, ListsFunnelService, CoreContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
