export interface PicDescr {
    fullFileName?:string;
    fileName?:string;
    description:string;
    categories?:string ;
    title?:string;
    iterations?:PicDescr[];
}

export   interface CoreContentElement {
    folder:string;
    theme?:string;
    themeSummary?:string;
    files:any[];
    template?: string;
} 
enum PicsIndex  {
    aumkarGaneshSept2020Final,
    AumGaShivParKashiVishwCTLightNov172020Final,
    unsignedShivVeena12272020,
    ShreeSiddhivinayakQ42020,
    DeviMaaMay13182021,
    MixGenPlaneSept2020,
};