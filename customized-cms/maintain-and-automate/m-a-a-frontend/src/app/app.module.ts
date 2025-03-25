import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
// import { ListUpdateOComponent } from './components/optimizations/list-update-o/list-update-o.component';
import { ReactiveTestComponent } from './components/reactive-test/reactive-test.component';
import { ListService    } from './services/list.service';
// import { ImageMoveComponent } from './components/feature-components/add-images/image-move/image-move.component';
import { ImagesFoldersComponent } from  './components/common/images-folders/images-folders.component'
import { CreateJsonContentComponent } from './components/optimizations/create-json-content/create-json-content.component';
import { CompileJsonContentComponent } from './components/feature-components/add-images/compile-json-content/compile-json-content.component';
import { MultilineComponent } from './components/common/multiline/multiline.component';
import { ListUpdateComponent } from './components/list-update/list-update.component';
import { AddImagesComponent } from './components/feature-components/add-images/add-images.component';
import {CreateListsFoldersComponent } from './components/feature-components/create-lists-folders/create-lists-folders.component';
import { FolderTreeExpandComponent } from './components/common/folder-tree-expand/folder-tree-expand.component';
import { SetListFolderComponent } from './components/feature-components/add-images/set-list-folder/set-list-folder.component';
import { ListsFoldersComponent } from './components/common/lists-folders/lists-folders.component'
import { UpdateAlbumEntriesComponent } from './components/feature-components/add-images/update-album-entries/update-album-entries.component';
// import { CreateNewListFileComponent } from './components/feature-components/create-lists-folders/create-new-list-file/create-new-list-file.component';
import { AutomationTabsComponent } from './components/feature-components/automation-tabs/automation-tabs.component';
import { MultiparaComponent } from './components/common/multipara/multipara.component';
import { UpdateMenuTreeServiceEntriesComponent } from './components/feature-components/create-lists-folders/update-menu-tree-service-entries/update-menu-tree-service-entries.component'
@NgModule({
  declarations: [
    AppComponent,
    // ListUpdateOComponent,
    ReactiveTestComponent,
    // ImageMoveComponent,
    ImagesFoldersComponent,
    CreateJsonContentComponent,
    CompileJsonContentComponent,
    MultilineComponent,
    ListUpdateComponent,
    AddImagesComponent,
   CreateListsFoldersComponent,
    FolderTreeExpandComponent,
    SetListFolderComponent,
    ListsFoldersComponent,
    UpdateAlbumEntriesComponent,
    // CreateNewListFileComponent,
    AutomationTabsComponent,
    MultiparaComponent,
    UpdateMenuTreeServiceEntriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([{
      // path: '', component:ReactiveTestComponent,}, {
        path: '', component:AutomationTabsComponent,}, {
     //     path: '', component:AddImagesComponent,}, {
          path: 'list-update', component:ListUpdateComponent
    }])
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
