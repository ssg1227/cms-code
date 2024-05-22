export interface ImageDetail {
    imageFileName?: string; // to replace the one below with this
    fullFileName?:string; // to remove this 
    description?: string;
    iterativeText?: string;
    footNote?: string;
    canvassSize?: string;
    drawingStyle?: string; 
    content?: string;
    evolution?: string;
    evolutionSequence?: number;
    evolutionDate?: string;

    rating?: number;
    dateUploaded?: string;
    iterations?:any[];  
}
export   interface ImageElement {
    folder:string;
    theme?:string;
    themeSummary?:string;
    files:ImageDetail[];
} 
