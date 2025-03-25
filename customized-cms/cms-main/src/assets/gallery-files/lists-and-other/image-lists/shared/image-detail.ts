export interface ImageDetail {
    imageFileName?: string; // to replace the one below with this
    fullFileName?:string; // to remove this 
    description?: string;
    summaryLabel?:string;
    iterativeText?: string;
    footNote?: string;
    canvassSize?: string;
    canvassMaterial?: string;
    drawingStyle?: string; 
    content?: string;
    evolution?: string;
    evolutionSequence?: number;
    evolutionDate?: string;
    duplicate?:boolean;
    rating?: number;
    ratingYear?: number;
    dateUploaded?: string;

generic?:string;
genericCategory?:number; // 1 Ganesh, 2 Goddesses, 3 shiva (+ family), 4 Narayan + family + Hanuman, 5 Gurus
genericDescription?: string;
    iterations?:any[];  
}
export   interface ImageElement {
    folder:string;
    theme?:string;
    themeSummary?:string;
    files:any[];
} 
export   interface ContentList {
    contentFile:any ;
    contentCategory:string ;
    roles:string[]; // maybe multiple, but for now keep it flattened as a csv string
    latest?:boolean; // for latest uploads
  }