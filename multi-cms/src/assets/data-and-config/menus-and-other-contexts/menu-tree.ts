// import { MenuItem } from './../../../../docs/assets/data-and-config/menus-and-other-contexts/menu-tree';
import { Injectable } from '@angular/core';
import { LabeledStatement } from 'typescript';

export interface MenuItem {
    uniqueKey: string;
    parentKey: string;
    parent?: boolean;// also use for expand
    child: boolean
    key: string;
    label: string;
    roles: string[]; 
    children?: MenuItem[];
    dateUploaded?: string;
    tab:string;
};
export interface TabWithRoles {
    
    tab:string;
    roles: string[]; 
};
const userRoles: string[] = [
"admin",
"all",
"sanatani",
"guru",
"transports",
"events",
"places",
'non-living',
"people",
"non-religious"
]
// flat structure - use uniqueKey - parentKey as one to many relationsho[
export const tabs: string[] = [
 "Quote: 'Singles'",
 "Quotes: 'Sequences'",
 "Narratives, other",
];
export const tabsWithRoles: TabWithRoles[] = [
    ,{ tab: "Narratives, other",roles:['non-religious','non-living'] }
   ];

export const MenuTree: MenuItem[] = [
    { tab:"Quotes: 'Singles'", label:  `Quotes: 'Singles'`, child: true, uniqueKey: '', parentKey: 'art', key: 'no-link', roles: ['non-living',  'non-religious', 'all'], dateUploaded: '02-03-2022' },
    { tab:"Quotes: 'Sequences'", label:  `Quotes: 'Sequences'`, child: true, uniqueKey: '', parentKey: 'art', key: 'no-link', roles: ['non-living',  'non-religious', 'all'], dateUploaded: '02-03-2022' },
    { tab:"Quotes: 'Sequences", label:  `-  Faith `, child: false, uniqueKey: '', parentKey: 'art', key: 'inactive: kanha-rukhmini', roles: ['non-living',  'non-religious', 'all'], dateUploaded: '02-03-2022' },
    { tab:"Quotes: 'Sequences", label:  `-  Sur Sagar July 2016 `, child: false, uniqueKey: '', parentKey: 'art', key: 'inactive: kanha-rukhmini', roles: ['non-living',  'non-religious', 'all'], dateUploaded: '02-03-2022' },
   { tab:"Narratives, other", label:  'Narratives, other', child: false, uniqueKey: '', parentKey: 'art', key: 'no-link', roles: ['non-living',  'non-religious', 'all'], dateUploaded: '02-03-2022' },
    { tab:"Narratives, other", label:  '- Sundara Kandam (extract of Ramayan)', child: false, uniqueKey: '', parentKey: 'art', key: 'sundara-kaandam', roles: ['non-living',  'non-religious', 'all'], dateUploaded: '02-03-2022' },
    { tab:"Narratives, other", label:  '- Poems', child: false, uniqueKey: '', parentKey: 'art', key: 'poems-others', roles: ['non-living',  'non-religious', 'all'], dateUploaded: '02-03-2022' },
    { tab:"Narratives, other", label:  `- Krishna and Rukhmini's Love Story `, child: false, uniqueKey: '', parentKey: 'art', key: 'kanha-rukhmini', roles: ['non-living',  'non-religious', 'all'], dateUploaded: '02-03-2022' },
   { tab:"Narratives, other", label:  '- Seven Days of Penance (Parikshit)', child: false, uniqueKey: '', parentKey: 'art', key: 'seven-days-of-penance', roles: ['non-living',  'non-religious', 'all'], dateUploaded: '02-03-2022' },
   { tab:"Narratives, other", label:  '- The Rhea Story', child: false, uniqueKey: '', parentKey: 'art', key: 'rhea-story', roles: ['non-living',  'non-religious', 'all'], dateUploaded: '02-03-2022' },
   // WIP { tab:"Misc", label:  'Technical', child: false, uniqueKey: '', parentKey: 'art', key: 'technical', roles: ['non-living', 'all'], dateUploaded: '02-03-2022' },
];
/* TODO - Jan 4 2024 - why was this added? one unused reference in category service
    @Injectable()
export class MenuNav {
    _menuTree: MenuItem[] = [
        { tab:'', label:'Evolution', child: false, uniqueKey: '', parentKey: 'art', key: 'changers-b4-2022', roles: ["any"] },
        { tab:'', label:'The Best', child: false, uniqueKey: '', parentKey: 'art', key: 'showpiece', roles: ["any"] },
        { tab:'', label:'Latest Uploads', child: false, uniqueKey: '', parentKey: 'art', key: 'latest-uploads', roles: ["sanatani"] },
        { tab:'', label:'Shree Ganesh ', child: false, uniqueKey: '', parentKey: 'art', key: 'shree-ganesh', roles: ["sanatani"], dateUploaded: '12-11-2021' },
        { tab:'', label:'Shree Ganesh Q4 2021 onward', child: false, uniqueKey: '', parentKey: 'art', key: 'shree-ganesh-gte-q4-2021', roles: ["sanatani"], dateUploaded: '12-14-2021' },
        { tab:'', label:'Goddesses', child: false, uniqueKey: '', parentKey: 'art', key: 'devi', roles: ["sanatani"] },
        { tab:'', label:'Mahadev', child: false, uniqueKey: '', parentKey: 'art', key: 'mahadev', roles: ["sanatani"], dateUploaded: '12-13-2021' },
        { tab:'', label:'Mahadev and Family', child: false, uniqueKey: '', parentKey: 'art', key: 'mahadev-family', roles: ["sanatani"], dateUploaded: '12-11-2021' },
        { tab:'', label:'Laxmi, Narayan, Shree Ram, and family, Bajrangbali', child: false, uniqueKey: '', parentKey: 'art', key: 'kanha-rukhmini', dateUploaded: '01-19-2022', roles: ["sanatani"] },
        { tab:'', label:'Satgurus of Lord Datta Lineage', child: false, uniqueKey: '', parentKey: 'art', key: 'dattavatar', roles: ["guru"] },
        { tab:'', label:'Shree Swami Samartha', child: false, uniqueKey: '', parentKey: 'art', key: 'swami-samartha', roles: ["guru"], dateUploaded: '12-09-2021' },
        { tab:'', label:'Shirdi Sai Q1 Q2(+Q3)2021', child: false, uniqueKey: '', parentKey: 'art', key: 'shirdi-sai-q1-q2-2021', roles: ["guru"] },
        { tab:'', label:'Shirdi Sai Q3 Q4 2021', child: false, uniqueKey: '', parentKey: 'art', key: 'shirdi-sai-q3-q4-2021', roles: ["guru"], dateUploaded: '12-12-2021' },
        { tab:'', label:'Shirdi Sai Satcharitra', child: false, uniqueKey: '', parentKey: 'art', key: 'baba-themes-1', roles: ["guru"], dateUploaded: '12-06-2021' },
        { tab:'', label:'People', child: false, uniqueKey: '', parentKey: 'art', key: 'people-places', roles: ['non-living', 'all'], dateUploaded: '02-24-2022' },
        { tab:'', label:'Places, Scenes and Objects', child: false, uniqueKey: '', parentKey: 'art', key: 'places-scenes-objects', roles: ['non-living', 'all'], dateUploaded: '12-06-2021' },
        { tab:'', label:'Misc, Themes', child: false, uniqueKey: '', parentKey: 'art', key: 'themes-misc', roles: ['non-living', 'all'] },
        { tab:'', label:'Rail', child: false, uniqueKey: '', parentKey: 'art', key: 'trains', roles: ['non-living', 'all'], dateUploaded: '12-08-2021' },
        { tab:'', label:'Aircraft, Ships and Cars', child: false, uniqueKey: '', parentKey: 'art', key: 'planes', roles: ['non-living', 'all'], dateUploaded: '07-20-2022' },];
  
    get MenuTree(): MenuItem[] {
        return this._menuTree;
    }

};
*/