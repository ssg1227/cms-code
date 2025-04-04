import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  webServiceURL = `http://localhost:8080/api`
  imageroot = "/Users/shantanu/Documents/GitHub/js-frameworks/Angular_lte_4/shan-cms-template/src/assets/all-images/";
  imageFolderName = 'image-folder-name';
  imageListRole='["all"]';
  constructor(private http: HttpClient) { }
  // getters and setters
  // DUPLICATE-11-2024
  public get ImageRoot(): string {
    return this.imageroot ;
  }
  public set ImageRoot(value:string) {
    this.imageroot = value ;
  }
  // ..DUPLICATE-11-2024
  // NEW-CATEGORY-REFINE-11-2024
  public get ImageFolderName(): string {
    return this.imageFolderName ;
  }
  public set ImageFolderName(value:string) {
    this.imageFolderName = value ;
  }
  public get ImageListClassName(): string {
    return `${this.kebabToPascal(this.imageFolderName)}ImageList` ;
  }
  public set ImageListClassName(value:string) {
    this.imageFolderName = value;
  }
  public get ImageListFileName(): string {
    return `${this.imageFolderName}.image.list.ts` ;
  }
  public set ImageListFileName(value:string) {
    this.imageFolderName = value ;
  }
  public get ImageListRole():string {
    return this.imageListRole ;
  }
  public set ImageListRole(value:string ) {
     this.imageListRole = value ;
  }
   kebabToPascal(kebab: string): string {
    return kebab
        .split('-') // Split the string at hyphens
        .map((word, index) => {
            // Capitalize the first letter of each word
            // Lowercase the rest of the word
            return index === 0 
                ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join(''); // Join the words back together
}
menuTreeParentKey="parent-key"
public get MenuTreeParentKey():string {
  return this.menuTreeParentKey ; 
}
public set MenuTreeParentKey(value:string)  {
   this.menuTreeParentKey = value; 
}
  /*
  
        */
  // .. NEW-CATEGORY-REFINE-11-2024
  getFolderContent(parentFolder:string) {
    return this.http.post<any>(`${this.webServiceURL}/listing`,parentFolder)
    .pipe(catchError(this.handleError));
  }
  copyFile(copyDetail:any):Observable<HttpResponse<any>> {
    return this.http.post<any>(`${this.webServiceURL}/copy`,copyDetail)
    .pipe(catchError(this.handleError));
  }

  moveImageFile(moveDetail:any):Observable<HttpResponse<any>> {
    return this.http.post<any>(`${this.webServiceURL}/move`,moveDetail)
    .pipe(catchError(this.handleError));
  }
  moveImageFileTest(moveDetail:any):Observable<HttpResponse<any>> {
    return this.http.post<any>(`${this.webServiceURL}/move-test`,moveDetail)
    .pipe(catchError(this.handleError));
  }
  moveImageFileTestReverse(moveDetail:any):Observable<HttpResponse<any>> {
    return this.http.post<any>(`${this.webServiceURL}/move-test-reverse`,moveDetail)
    .pipe(catchError(this.handleError));
  }
   addAlbumEntry(nameAndEntries:string[]):Observable<HttpResponse<any>> {
    return this.http.post<any>(`${this.webServiceURL}/append`,nameAndEntries)
    .pipe(catchError(this.handleError));
 
  }
  createFile(nameAndEntries:string[]):Observable<HttpResponse<any>> {
    alert('servirs');
    return this.http.post<any>(`${this.webServiceURL}/create-file`,nameAndEntries)
    .pipe(catchError(this.handleError));
 
  }
  createFolder(folder:string) {
    return this.http.post<any>(`${this.webServiceURL}/create-folder`,folder)
    .pipe(catchError(this.handleError));
 
  }

  // NEW-CATEGORY-REFINE-11-2024
  // will be used to add category entries in menu tree and core service
  insertInFile(fileTagAndLines:string[]) {
    return this.http.post<any>(`${this.webServiceURL}/insert-in-file`,fileTagAndLines)
    .pipe(catchError(this.handleError));
 
  }
  updateListFile(stringsToAddParan:string[], fileToUpdateParam:string):Observable<HttpResponse<any>> {

    let newImageList = {
      stringsToAdd:stringsToAddParan ,
      fileToUpdate: fileToUpdateParam
    }
    /*
    let newImageListTest = {
      fileToUpdate: `/Users/shantanu/Documents/GitHub/js-frameworks/Angular_lte_4/shan-cms-template-next/src/assets/data-and-config/data/ganesh-gte-q1-2023.image.list.ts`, 
      stringsToAdd: [
        "{",
        "fullFileName: `assets/all-images/religion/shree-ganesh-gte-q1-2023/Ganesh-final-GudiPadwa-March22-2023.jpeg`,",
        "description: `Ganapati - Gudi Padwa 02/22/2023. <br/>",
                     "final version - photo edited",
                     "<p>A first of sorts - I have begun drawing flowers and chanced upon a theme of surrounding the main sketch with these</p>",
                      "<p> probably do others e.g. use dolphins around a sailing ship sketch`,",
                     "dateUploaded: '06-15-2023',",
                     "canvassSize: 'A4', content:'color-pencil',",
                     "rating: 1,",
                     "ratingYear:2023,",
                     
            "},"
      ],
    }
    */
    console.log(`Calling service with ${newImageList}`)
    return this.http.post<any>(`${this.webServiceURL}/update-list`,newImageList)
    .pipe(catchError(this.handleError));
  }
  private handleError(error:HttpErrorResponse ){
    return throwError(() => { new Error(error.message); console.log(error.message) }) ;
  }
}
