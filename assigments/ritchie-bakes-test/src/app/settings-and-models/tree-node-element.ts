import { BreadCrumb } from "./bread-crumbs";
import { ItemPrice } from "./commerce";

// CMS picture gallery hierarchy structure
// This is a tree structure, where the leaf key will load the 
// JSON containing a picture list
// This modifies and enhances the menu-tree logic of the old app
export interface TreeNodeElement {
    key:string; // unique id.. like a primary key, also picture list loader for leaf
    parentKey?:string; // like a foreign key and establishing parent. optional()
    levelIndex?:number ; // unused for now (May 2024)
    breadCrumb:BreadCrumb[]; // better safe than optimal for now May 3 2024
    label:string; 
    emptyMessage?:string;
    description?:string ;
    roleBasedDescription?: string;
    isCompiledList?:boolean; // use some criteria to load selected images like latest uploads or top rated
    isLeafParent:boolean; // 'true' = load the image list for that menu kee, 'false' = top or middle node
    dateUploaded?:string;
    cardLevelImage?:string;
    roles?:string[]; // roles match users roles many to many match
    shape?:string;
    className?:string;
    styleJSON?:string;
    itemPrice?:ItemPrice; 
    
}