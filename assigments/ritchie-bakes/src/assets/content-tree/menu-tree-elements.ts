import { TreeNodeElement } from "@settings-and-models/tree-node-element"

export const MenuTreeElements:TreeNodeElement[] = [
    // #### ROOT
    {
        key:'top-level', levelIndex:0,isLeafParent:false, roles:["any"], // roles match users roles many to many match
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '', params:'top-level', label: 'HOME'}
        ],
        label:"HOME PAGE",
    },
    {
        parentKey:'top-level',key: "cream-cakes-chocolate-ganache", levelIndex:1,isLeafParent:true, roles:['any'],
        label: "Cream Cakes - Chocolate with Ganache", 
         cardLevelImage:'assets/gallery-files/images/speciality-cakes-chocolate/chocolate-cake-1.jpeg',
        description:'Need 2 days notice to order',
        itemPrice: {
            category:'cream-cakes-chocolate-ganache',
            itemUnitPrice: [
                {
                    unitPrice:600, 
                    unit:'1/2 kg'
                },{
                     unitPrice:1200, 
                    unit:'1 kg'
                }],
        },
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '', params:'cream-cakes-chocolate-ganache', label: 'Cream Cakes - Chocolate with Ganache'}
        ],    
    },
    {
        parentKey:'top-level',key: "cream-cakes-rainbow-checker", levelIndex:1,isLeafParent:true, roles:['any'],
        label: "Cream Cakes - Rainbow Checker", 
         cardLevelImage:'assets/gallery-files/images/cream-cakes-rainbow-checker/rainbow-checker-cake-1-kg.jpeg',
        description:'Need 2 days notice to order',
        itemPrice: {
            category:'cream-cakes-rainbow-checker',
            itemUnitPrice: [
                {
                    unitPrice:900, 
                    unit:'1/2 kg'
                },{
                     unitPrice:1800, 
                    unit:'1 kg'
                }],
        },
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '', params:'cream-cakes-chocolate-ganache', label: 'Cream Cakes - Chocolate with Ganache'}
        ],    
    }, 
    {
        parentKey:'top-level',key: "cup-cakes", levelIndex:1,isLeafParent:true, roles:['any'],
        label: "Cup Cakes", itemPrice: {
            category:'cup-cakes',
            itemUnitPrice: [
                {
                    unitPrice:780, 
                    unit:'Single Frosted Flavor:1 doz'
                },{
                     unitPrice:500, 
                    unit:'Single Frosted Flavor:1/2 doz'
                },{
                    unitPrice:600, 
                    unit:'Single Plain Flavor:1 doz'
                },{
                     unitPrice:400, 
                    unit:'Single Plain Flavor:1/2 doz'
                }, {
                    unitPrice:1200, 
                    unit:'Mix(any two flavor):1 doz frosted'
                },{
                     unitPrice:850, 
                    unit:'Mix(any two flavor):1 doz plain'
                }],
        },
        cardLevelImage:'assets/gallery-files/images/cup-cakes/coffee-cup-cakes.jpeg', 
        description:'',
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '', params:'cup-cakes', label: 'Cup Cakes'}
        ],    
    }, {
        parentKey:'top-level',key: "cookies-brownies-other", levelIndex:1,isLeafParent:true, roles:['any'],
        label: "Cookies, Brownies and Others", 
        cardLevelImage:'assets/gallery-files/images/cookies-brownies-other/butter-cookies.jpeg',  
        description:'',
        itemPrice: {
            category:'cup-cakes',
            itemUnitPrice: [
                {
                    unitPrice:350, 
                    unit:'Eggless Cookies, 500gms'
                },{
                    unitPrice:700, 
                    unit:'Eggless Cookies, 1 Kg'
                },{
                    unitPrice:300, 
                    unit:'Masala Cookies, 500gms'
                },{
                    unitPrice:600, 
                    unit:'Masala Cookies, 1 Kg'
                },{
                    unitPrice:300, 
                    unit:'Mini Marble Cookies, 500gms'
                },{
                    unitPrice:600, 
                    unit:'Mini Marble  Cookies, 1 Kg'
                },{
                    unitPrice:350, 
                    unit:'Mini Coconut Cookies, 500gms'
                },{
                    unitPrice:700, 
                    unit:'Mini Coconut Cookies, 1 Kg'
                },{
                    unitPrice:350, 
                    unit:'Coconut Cookies, 500gms'
                },{
                    unitPrice:700, 
                    unit:'Coconut Cookies, 1 Kg'
                },{
                    unitPrice:350, 
                    unit:'Cheese Cookies, 500gms'
                },{
                    unitPrice:700, 
                    unit:'Cheese Cookies, 1 Kg'
                }],
        },
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '', params:'cookies-brownies-other', label: 'Cookies, Brownies and Others'}
        ],    
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