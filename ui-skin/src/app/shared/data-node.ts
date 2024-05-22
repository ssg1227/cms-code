import { ImageDetail } from "./image-detail";
export interface DataNode {
    // common
    isLeaf: boolean;
    description:string ;
    label: string;
    // category
    className?:string;
    // leaf
    fullFileName?: string ;
    imageDetail?: ImageDetail;
                iterativeText: 'Black and White / Color *',
                footNote: '* Click to see color OR Black and white version',
                canvassSize: 'A4', content:'color-pencil black-white',
                evolution: `- <b>Not the first</b>, but traditionally, one starts something with Lord Ganesh.And also decent enough<br/>
                            - <b>My first color pencil sketch and</b>, also duplicated with black and white sketch using<b>'glass trace'</b>(as will be repeated later)<br/>`,
                evolutionSequence: 1, evolutionDate: `01-01-1990`,

}