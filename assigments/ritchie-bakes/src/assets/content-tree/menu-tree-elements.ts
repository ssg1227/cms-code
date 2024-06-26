import { TreeNodeElement } from "../assets-common/tree-node-element"

export const MenuTreeElements:TreeNodeElement[] = [
    // #### ROOT
    {
        key:'top-level', levelIndex:0,isLeafParent:false, roles:["any"], // roles match users roles many to many match
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '', params:'top-level', label: 'HOME'}
        ],
        label:"HOME PAGE",
    },
    // #### LEVEL 1
    {
        parentKey:"top-level", key: "prices-list", levelIndex:1,isLeafParent:true, roles:['any'],
        label: "Price Lists",
        description:'Current listing of prices',
        
         cardLevelImage:'assets/gallery-files/images/price-lists/cookie-pricelist.jpeg',
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '', params:'prices-list', label: 'Price Lists'}
        ],
        
    },
    {
        parentKey:'top-level',key: "speciality-cakes-chocolate", levelIndex:1,isLeafParent:true, roles:['any'],
        label: "Speciality Cakes - Chocolate", 
         cardLevelImage:'assets/gallery-files/images/speciality-cakes-chocolate/chocolate-cake-1.jpeg',
        description:'',
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '', params:'speciality-cakes-chocolate', label: 'Speciality Cakes - Chocolate'}
        ],    
    }, 
    {
        parentKey:'top-level',key: "speciality-cakes-non-chocolate", levelIndex:1,isLeafParent:true, roles:['any'],
        label: "Speciality Cakes - Non Chocolate", 
        cardLevelImage:'assets/gallery-files/images/speciality-cakes-non-chocolate/birthday-cake-1-tbd.jpeg',
        description:'',
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '', params:'speciality-cakes-non-chocolate', label: 'Speciality Cakes - Non Chocolate'}
        ],    
    }, 
    {
        parentKey:'top-level',key: "tea-cakes", levelIndex:1,isLeafParent:true, roles:['any'],
        label: "Tea Cakes -Coffee Cakes, Eggless etc.", 
        cardLevelImage:'assets/gallery-files/images/tea-cakes/Eggless Chocolate Walnut Tea cake.jpeg',
        description:'',
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '', params:'tea-cakes', label: 'Tea Cakes -Coffee Cakes, Eggless etc.'}
        ],    
    }, 
    {
        parentKey:'top-level',key: "cup-cakes", levelIndex:1,isLeafParent:true, roles:['any'],
        label: "Cup Cakes", 
        cardLevelImage:'assets/gallery-files/images/cup-cakes/coffee-cup-cakes.jpeg', 
        description:'',
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '', params:'cup-cakes', label: 'Cup Cakes'}
        ],    
    }, 
    {
        parentKey:'top-level',key: "cookies-brownies-other", levelIndex:1,isLeafParent:true, roles:['any'],
        label: "Cookies, Brownies and Others", 
        cardLevelImage:'assets/gallery-files/images/cookies-brownies-other/butter-cookies.jpeg',  
        description:'',
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '', params:'cookies-brownies-other', label: 'Cookies, Brownies and Others'}
        ],    
    }
    , 
    {
        parentKey:'top-level',key: "special-lists-christmas-collection", levelIndex:1,isLeafParent:true, roles:['any'],
        label: "Special Lists: Christmas Collection", 
        description:'',
        cardLevelImage:'assets/gallery-files/images/cookies-brownies-other/Christmas collection- Red velvet Brownie.jpeg',
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '', params:'special-lists-christmas-collection', label: 'Special Lists: Christmas Collecttion'}
        ],    
    } , 
    {
        parentKey:'top-level',key: "contact-details-fsai", levelIndex:1,isLeafParent:true, roles:['any'],
        label: "Contact Details, FSAI cert, etc", 
        description:'',
        cardLevelImage:'assets/gallery-files/images/contact-details-fsai/contact-card.jpeg',
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '', params:'contact-details-fsai', label: 'Contact Details, FSAI cert, etc'}
        ],    
    }, 
    {
        parentKey:'top-level',key: "uncategorized", levelIndex:1,isLeafParent:true, roles:['any'],
        label: "Uncategorized", 
        description:'',
        cardLevelImage:'assets/gallery-files/images/uncategorized/shilpa-and-vijay.jpeg',
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '', params:'uncategorized', label: 'Uncategorized'}
        ],    
    },
]