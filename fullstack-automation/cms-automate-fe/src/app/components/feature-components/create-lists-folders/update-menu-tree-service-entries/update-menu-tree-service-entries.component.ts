import { LookupValues } from '@utils//lookup-values';
import { TreeNodeElement } from '@models-xfer-data/tree-node-element';
import { MenuTreeElements, } from '@models-xfer-data/menu-tree-elements';
import { Component, OnInit } from '@angular/core';
import { ListService } from '@services/list.service';
import { Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { concatMap } from 'rxjs/operators';
// NEW-CATEGORY-REFINE-11-2024
interface BreadCrumb {
  link: string;
  params?: string;
  label: string;
  levelIndex?: number;

}

@Component({
  selector: 'app-update-menu-tree-service-entries',
  templateUrl: './update-menu-tree-service-entries.component.html',
  styleUrls: ['./update-menu-tree-service-entries.component.css']
})
export class UpdateMenuTreeServiceEntriesComponent {
  @Input() imageTreeMode = 'moveFiles';
  menuTreeElement: TreeNodeElement = {
    parentKey: '',
    key: this.listService.ImageFolderName,
    levelIndex: 0,
    isLeafParent: false,
    roles: ['any'],
    label: '',
    description: '',
    emptyMessage: 'Empo',
    breadCrumb: [],
  }

  finalText = '';
  strRoles = `['any']`;
  lookups: LookupValues = new LookupValues();
  destinationStart = this.lookups.rootImageDestinationFolder;
  rootImageDestinationFolder = this.lookups.rootImageDestinationFolder;
  currentParentFolder = this.lookups.rootImageDestinationFolder;
  webAppRelativeFolderRoot = this.WebAppRoot;
  currentWebAppParentFolder = this.WebAppRoot;
  menuTreeTestPath = this.lookups.menutreeTestPath;
  menuTreePath = this.lookups.menutreePath;
  level0JSON: TreeNodeElement[] = MenuTreeElements.filter((a: any) => a.levelIndex == 0);
  level0key = this.level0JSON[0].key;
  level0Label = this.level0JSON[0].label;
  level1Select = "";
  level1WebAppSelect = "";
  level1Keys = ["", ""];
  level2Keys = ["", ""];
  level2Select = "";
  level3Keys = ["", ""];
  level3Select = "";
  level4Keys = ["", ""];
  level4Select = "";
  level5Keys = ["", ""];
  level5Select = "";
  parentKey = this.level0JSON[0].key;//this.listService.MenuTreeParentKey ;
  levelIndex = 1;
  description = '';
  isLeafParent = 'false';
  jsonTextLines = [`{ parentKey: ${this.parentKey},isLeafParent: ${this.isLeafParent}, levelIndex: ${this.levelIndex}`]
  get WebAppRoot(): string {
    ;
    return this.currentParentFolder.substring(this.currentParentFolder.indexOf('asset'));
  }
  constructor(private listService: ListService) { }
  strMenuTreeElement = JSON.stringify(this.menuTreeElement);
  get MenuTreeElement(): string {
    return this.strMenuTreeElement;
  }
  set MenuTreeElement(value: string) {
    this.strMenuTreeElement = value;
  }
  ngOnInit(): void {
    let level1String = [""];
    MenuTreeElements.filter((a: any) => a.levelIndex === 1).forEach((b: any) => level1String.push(b.key));
    this.level1Keys = ["select", ...level1String]
  }
  /// Menu tree elements are different from image and list folders - using the data extracted off menu-tree element
  getImageSubFolder(parentkey: any, level: number) {
    this.levelIndex = level;
    let levelList = [""]
    this.strRoles = JSON.stringify(MenuTreeElements.filter((a: any) => a.key === parentkey.target.value)[0].roles);
    switch (level) {
      case 2: this.level1Select = parentkey.target.value;
        this.parentKey = this.level1Select;
        MenuTreeElements.filter((a: any) => a.parentKey === this.level1Select).forEach((b: any) => levelList.push(b.key));
        this.level2Keys = ["select", ...levelList];
        break;
      case 3: this.level2Select = parentkey.target.value;
        this.parentKey = this.level2Select;
        MenuTreeElements.filter((a: any) => a.parentKey === this.level2Select).forEach((b: any) => levelList.push(b.key));
        this.level3Keys = ["select", ...levelList];
        break;
      case 4: this.level3Select = parentkey.target.value;
        this.parentKey = this.level3Select;
        MenuTreeElements.filter((a: any) => a.parentKey === this.level3Select).forEach((b: any) => levelList.push(b.key));
        this.level4Keys = ["select", ...levelList];
        break;
      case 5: this.level4Select = parentkey.target.value;
        this.parentKey = this.level4Select;
        MenuTreeElements.filter((a: any) => a.parentKey === this.level5Select).forEach((b: any) => levelList.push(b.key));
        this.level5Keys = ["select", ...levelList];
        break;
    }

  }
  passImageFolders(imageFolders: string[]) {
    if (imageFolders && imageFolders.length > 0) {
      this.parentKey = imageFolders[0].split(`/`)[1];
    }
  }
  getParentKey(emitParentKeyIndex: any) {
    let parentElement = MenuTreeElements.filter((a: any) => a.key === this.parentKey)[0];
    this.menuTreeElement.parentKey = this.parentKey;
    this.menuTreeElement.roles = JSON.parse(JSON.stringify(parentElement.roles));
    this.menuTreeElement.breadCrumb = JSON.parse(JSON.stringify(parentElement.breadCrumb));
    this.menuTreeElement.breadCrumb[this.menuTreeElement.breadCrumb.length - 1].link = `/view`;
    this.menuTreeElement.label = this.kebabToPascalCase(this.menuTreeElement.key)
    this.menuTreeElement.breadCrumb.push({ link: '', params: this.menuTreeElement.key, label: this.menuTreeElement.label });
    /*
   parentKey:'',
   key: this.listService.ImageFolderName,
   levelIndex: 0,
   */
    this.menuTreeElement.parentKey = this.parentKey;
    // @ts-ignore: Object is possibly 'null'.
    this.menuTreeElement.levelIndex = parentElement.levelIndex + 1;
    // @ts-ignore: Object is possibly 'null'.
    this.levelIndex = parentElement.levelIndex + 1;
    this.strMenuTreeElement = JSON.stringify(this.menuTreeElement);

  }
  // move to commom
  kebabToPascalCase(kebabStr: string): string {
    return kebabStr
      .split('-')           // Split the string by hyphens
      .map(word =>           // Capitalize the first letter of each word
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
      .join(' ');            // Join all words together without any spaces
  }
  // ################ WRITE TO MENU TREE COMBOS 
  tryNew = true;
  // Emited from multiline. To Copy paste
  getMenuEntryJSONText(textLines: string[]) {
    let evolutionHTML = ``;
    if (this.tryNew === true) {
      this.addMenuEntryNew(textLines);
      this.listService.ImageListRole = this.strRoles ;
      return;
    }
    this.finalText = textLines.join(`\n`);

    // @ts-ignore: Object is possibly 'null'.
    document.getElementById('div-container').style.display = 'flex';
    return;

  }
  addMenuEntryNew(textLines: string[]) {
    let fileTagAndLines: string[] =
      [this.lookups.menutreeFinalPath, this.lookups.menutreeBackupPath, this.lookups.menutreeBackupPath, ` // NEW INSERTS`, ...textLines];
    console.log(`${JSON.stringify(fileTagAndLines)}`);
    this.listService.insertInFile(fileTagAndLines)
      .subscribe(
        (response: any) => {
          alert('success');
        
          //     this.imageList = [""];
        },
        (err: any) => {
          alert(`ERROR ${err}`)
       

        },
        () => {
          //   if (confirm("Data Submitted; clear it?")) this.reset() ;
          alert('complete');
          
        }
      )
    return;


  }
  allowEventRefresh = false;
  backUpAndCompileMenuEntry(test = true) {
   
    let copyDetail = {
      sourceFileName: test === true ? this.lookups.menutreeTestPath :
        this.lookups.menutreeFinalPath,
      destFileName: test === true ? this.lookups.menutreeTestBackupPath :
        this.lookups.menutreeBackupPath
    };
    this.listService.copyFile(copyDetail)
      .pipe(

    )
      .subscribe({
        next: (v: any) => {

          let copyDetail2 = {
            sourceFileName: this.lookups.menutreeFinalPath,
            destFileName: this.lookups.menutreeTempPath
          }
          this.listService.copyFile(copyDetail2)
            .subscribe({
              next: (v2: any) => { console.log('2st copy'); },
              error: (v3: any) => { console.log(`2st err ${JSON.stringify(v3)}`); },
            });
          // this.listService.copyFile(copyDetail)
        },
        error: (v: any) => {
          alert(`error ${JSON.stringify(v)}`);
          this.addMenuEntry(test);
        }

      }

      )

    return;
  }

  backupLive() {
    let copyDetail = {
      sourceFileName: this.lookups.menutreePath,
      destFileName: this.lookups.menutreeBackupPath
    };
    this.copyFiles(copyDetail, "backed up successfully");
  }

  copyFromLive() {
    let copyDetail = {
      sourceFileName: this.lookups.menutreePath,
      destFileName: this.lookups.menutreeEditPath
    };
    this.copyFiles(copyDetail, "copied successfully");
  }

  copyBackFromLiveToAutomate(event:any) {
    let copyDetail = {
      sourceFileName: this.lookups.menutreePath,
      destFileName: this.lookups.menutreeEditPath
    };
    this.copyFiles(copyDetail, "copied back successfully");
    if (this.allowEventRefresh === false)
    event.stopPropagation();
  }

  copyFiles(copyDetail: any, message: String) {
    this.listService.copyFile(copyDetail)
      .pipe(

    )
      .subscribe({
        next: (v: any) => { alert(message); },
        /* next:(v:any) => {
           //alert('1st copy');
           let copyDetail2 = {
             sourceFileName: this.lookups.menutreeFinalPath,  
             destFileName: this.lookups.menutreeTempPath
           }
           this.listService.copyFile(copyDetail2)
           .subscribe({
             next:(v2:any) => { console.log('2st copy');},
             error:(v3:any)  => { console.log(`2st err ${JSON.stringify(v3)}`);},
           });
           // this.listService.copyFile(copyDetail)
         },*/
        error: (v: any) => {
          alert(message);
          alert('error');
        }
      });

  }
  get JSONTextLines(): string[] {
    return this.jsonTextLines;
  }
  addMenuEntry(test = false) {
    this.jsonTextLines = [];// [`{ parentKey: ${this.parentKey},isLeafParent: ${this.isLeafParent}, levelIndex: ${this.levelIndex}`]
    let elementLabel = this.kebabToPascalCase(this.listService.ImageFolderName);
    let parentElement = MenuTreeElements.filter((a: any) => a.key === this.parentKey)[0];
    this.menuTreeElement.breadCrumb = JSON.parse(JSON.stringify(parentElement.breadCrumb));
    this.menuTreeElement.breadCrumb[this.menuTreeElement.breadCrumb.length - 1].link = `/view`; // parent
    this.menuTreeElement.breadCrumb.push({ link: '', params: this.menuTreeElement.key, label: elementLabel });
    // @ts-ignore: Object is possibly 'null'.
    this.menuTreeElement.levelIndex = parentElement.levelIndex + 1;
    let fileTagAndLines: string[] = test === true ?
      [this.menuTreeTestPath, ` // NEW INSERTS`] :

      [this.menuTreePath, ` // NEW INSERTS`];
    fileTagAndLines.push(',{');
    fileTagAndLines.push(`parentKey: '${this.parentKey}',`);
    fileTagAndLines.push(`key: '${this.listService.ImageFolderName}',`);
    fileTagAndLines.push(`levelIndex: ${this.levelIndex},`);

    fileTagAndLines.push(`isLeafParent: ${this.isLeafParent},`);
    fileTagAndLines.push(`roles: ${this.strRoles},`);// ${JSON.stringify(this.menuTreeElement.roles)},`) ;
    this.jsonTextLines = [',{']
    this.jsonTextLines.push(`parentKey: '${this.parentKey}',key: '${this.listService.ImageFolderName}', isLeafParent: ${this.isLeafParent}, levelIndex: ${this.levelIndex}, roles:${this.strRoles},`);
    fileTagAndLines.push(`label: '${elementLabel}',`);
    fileTagAndLines.push(`description: '${this.description}',`);
    this.jsonTextLines.push(`label: '${elementLabel}',  description: \`${this.description}\`,`);
    this.jsonTextLines.push(`breadCrumb:[`);
    fileTagAndLines.push(`breadCrumb:[`);
    this.menuTreeElement.breadCrumb.forEach((bc: any) => {
      fileTagAndLines.push(`${JSON.stringify(bc)},`);
      this.jsonTextLines.push(`${JSON.stringify(bc)},`);
    });
    fileTagAndLines.push(`],`);
    fileTagAndLines.push(`emptyMessage: 'No Content'`,);
    fileTagAndLines.push('}');
    this.jsonTextLines.push(`], emptyMessage: 'No Content'`,);
    this.jsonTextLines.push('}');
    this.finalText = (JSON.stringify(fileTagAndLines));
    console.log(this.finalText);
    return;
    this.listService.insertInFile(fileTagAndLines)
      .subscribe(
        (response: any) => {
          console.log('success');

          //     this.imageList = [""];
        },
        (err: any) => {
          console.log(`ERROR ${err}`)

        },
        () => {
          //   if (confirm("Data Submitted; clear it?")) this.reset() ;
          console.log('complete');

        }
      )
    this.addMenuEntry(false);
  }
  closeDivModal() {


    // @ts-ignore: Object is possibly 'null'.
    document.getElementById('div-container').style.display = 'none';
  }
}
