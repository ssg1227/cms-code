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
        parentKey:'top-level',key: "sai-amrutvani", levelIndex:1,isLeafParent:true, roles:['any'],
        label: "Sai Amrutvani", 
        description:'Philosophical Pearls of Wisom ',
        
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '', params:'sai-amrutvani', label: 'Sai Amrutvani'}
        ],    
    },
    {
        parentKey:'top-level',key: "cream-cakes-chocolate-other-frosting", levelIndex:1,isLeafParent:true, roles:['any'],
        label: "Cream Cakes - Chocolate with Mocha / Chocolate/ Ganache and truffle", 
         cardLevelImage:'assets/gallery-files/images/speciality-cakes-chocolate/chocolate-cake-1.jpeg',
        description:'',
        itemPrice: {
            category:'cream-cakes-chocolate-ganache',
            itemUnitPrice: [
                {
                    unitPrice:850, 
                    itemClass:'Chocolate Cake (Mocha/Chocolate/Ganache/Truffle)',unit:'1/2 kg'
                },{
                     unitPrice:1500, 
                    itemClass:'Chocolate Cake (Mocha/Chocolate/Ganache/Truffle)',unit:'1 kg'
                }],
        },
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '', params:'cream-cakes-chocolate-other-frosting', label: 'Cream Cakes - Chocolate with Mocha / Chocolate/ Ganache and truffle'}
        ],    
    },
    {
        parentKey:'top-level',key: "cream-cakes-rainbow-checker", levelIndex:1,isLeafParent:true, roles:['any'],
        label: "Cream Cakes - Rainbow Checker", 
         cardLevelImage:'assets/gallery-files/images/cream-cakes-rainbow-checker/rainbow-checker-cake-1-kg.jpeg',
        description:'',
        itemPrice: {
            category:'cream-cakes-rainbow-checker',
            itemUnitPrice: [
                {
                    unitPrice:900, 
                    itemClass:'Rainbow Checker Cake',unit:'1/2 kg'
                },{
                     unitPrice:1800, 
                    itemClass:'Rainbow Checker Cake',unit:'1 kg'
                }],
        },
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '', params:'cream-cakes-rainbow-checker', label: 'Cream Cakes - Rainbow Checker'}
        ],    
    },
    {
        parentKey:'top-level',key: "cream-cakes-strawberry", levelIndex:1,isLeafParent:true, roles:['any'],
        label: "Cream Cakes - Strawberry with fresh Strawberries frosting", 
         cardLevelImage:'assets/gallery-files/images/cream-cakes-strawberry/strawberry-1.jpeg',
        description:'',
        itemPrice: {
            category:'cream-cakes-strawberry',
            itemUnitPrice: [
                {
                    unitPrice:600, 
                    itemClass:'Strawberry Cake',unit:'1/2 kg'
                },{
                     unitPrice:1200, 
                    itemClass:'Strawberry Cake',unit:'1 kg'
                }],
        },
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '', params:'cream-cakes-strawberry', label: 'Cream Cakes - Strawberry with fresh Strawberries frosting'}
        ],    
    },
    {
        parentKey:'top-level',key: "cream-cakes-oreo-bf-wf-van", levelIndex:1,isLeafParent:true, roles:['any'],
        label: "Cream Cakes - Oreo, Black Forest, White Forest, Vanilla", 
         cardLevelImage:'assets/gallery-files/images/cream-cakes-oreo-bf-wf-van/Oreo Cake.jpg',
        description:'',
        itemPrice: {
            category:'cream-cakes-oreo-bf-wf-van',
            itemUnitPrice: [
                {
                    unitPrice:600, 
                    itemClass:'Oreo cake',unit:'Oreo cake,1/2 kg'
                },{
                     unitPrice:1200, 
                    itemClass:'Oreo cake',unit:'Oreo cake,1 kg'
                },
                {
                    unitPrice:550, 
                    itemClass:'Black Forest cake',unit:'Black Forest cake,1/2 kg'
                },{
                     unitPrice:1100, 
                    itemClass:'Black Forest cake',unit:'Black Forest cake,1 kg'
                },{
                    unitPrice:550, 
                   itemClass:'White Forest cake',unit:'White Forest cake,1/2 kg'
               },{
                     unitPrice:1100, 
                    itemClass:'White Forest cake',unit:'White Forest cake,1 kg'
                },
                {
                    unitPrice:450, 
                    itemClass:'Vanilla Cake',unit:'Vanilla Cake,1/2 kg'
                },{
                     unitPrice:800, 
                    itemClass:'Vanilla Cake',unit:'Vanilla Cake, 1 kg'
                }],
        },
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '', params:'cream-cakes-oreo-bf-wf-van', label: 'Cream Cakes - Oreo, Black Forest, White Forest, Vanilla'}
        ],    
    },
    {
       parentKey:"top-level", key: "fruit-cakes", levelIndex:1,isLeafParent:true, roles:['any'],
       label: "Fruit Cakes", itemPrice: {
           category:'fruit-cakes',
           itemUnitPrice: [
            {
                unitPrice:600, itemClass:'Fruit Cake',
                 unit:'1/2 kg'
            },{
                 unitPrice:1200
                 , itemClass:'Fruit Cake',unit:'1 kg'
            }],
       },
       cardLevelImage:'assets/gallery-files/images/fruit-cakes/blueberry-crush-cake-whipped-cream-frst.jpeg', 
       description:'',
       emptyMessage: 'Empty Content or Error', breadCrumb:[
           {link: '/view', params:'top-level', label: 'HOME'},
           {link: '', params:'fruit-cakes', label: 'Fruit Cakes'}
       ],    
   },
    {
       parentKey:"top-level", key: "coffee-cakes", levelIndex:1,isLeafParent:true, roles:['any'],
       label: "Coffee Cakes", itemPrice: {
           category:'coffee-cakes',
           itemUnitPrice: [
            {
                unitPrice:500, 
                itemClass:'',unit:'1/2 kg'
            },{
                 unitPrice:900, 
                itemClass:'',unit:'1 kg'
            }],
       },
       cardLevelImage:'assets/gallery-files/images/coffee-cakes/Coffee cake with coffee buttercream.jpeg', 
       description:'',
       emptyMessage: 'Empty Content or Error', breadCrumb:[
           {link: '/view', params:'top-level', label: 'HOME'},
           {link: '', params:'coffee-cakes', label: 'Coffee Cakes'}
       ],    
   },
    {
       parentKey:"top-level", key: "red-velvet-cakes", levelIndex:1,isLeafParent:true, roles:['any'],
       label: "Red Velvet Cakes", itemPrice: {
           category:'red-velvet-cakes',
           itemUnitPrice: [
            {
                unitPrice:600, 
                itemClass:'',unit:'1/2 kg'
            },{
                 unitPrice:1200, 
                itemClass:'',unit:'1 kg'
            }],
       },
       cardLevelImage:'assets/gallery-files/images/red-velvet-cakes/red-velvet-cake-bayko-0.jpeg', 
       description:'Red Velvet Cakes',
       emptyMessage: 'Empty Content or Error', breadCrumb:[
           {link: '/view', params:'top-level', label: 'HOME'},
           {link: '', params:'red-velvet-cakes', label: 'Coffee and Red Velvet Cakes'}
       ],    
   }, 
    {
        parentKey:'top-level',key: "cup-cakes", levelIndex:1,isLeafParent:true, roles:['any'],
        label: "Cup Cakes", itemPrice: {
            category:'cup-cakes',
            itemUnitPrice: [
                {
                    unitPrice:780, 
                    itemClass:'',unit:'Single Frosted Flavor:1 doz'
                },{
                     unitPrice:500, 
                    itemClass:'',unit:'Single Frosted Flavor:1/2 doz'
                },{
                    unitPrice:600, 
                    itemClass:'',unit:'Single Plain Flavor:1 doz'
                },{
                     unitPrice:400, 
                    itemClass:'',unit:'Single Plain Flavor:1/2 doz'
                }, {
                    unitPrice:1200, 
                    itemClass:'',unit:'Mix(any two flavor):1 doz frosted'
                },{
                     unitPrice:850, 
                    itemClass:'',unit:'Mix(any two flavor):1 doz plain'
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
                    itemClass:'',unit:'Eggless Cookies, 500gms'
                },{
                    unitPrice:700, 
                    itemClass:'',unit:'Eggless Cookies, 1 Kg'
                },{
                    unitPrice:300, 
                    itemClass:'',unit:'Masala Cookies, 500gms'
                },{
                    unitPrice:600, 
                    itemClass:'',unit:'Masala Cookies, 1 Kg'
                },{
                    unitPrice:300, 
                    itemClass:'',unit:'Mini Marble Cookies, 500gms'
                },{
                    unitPrice:600, 
                    itemClass:'',unit:'Mini Marble  Cookies, 1 Kg'
                },{
                    unitPrice:350, 
                    itemClass:'',unit:'Mini Coconut Cookies, 500gms'
                },{
                    unitPrice:700, 
                    itemClass:'',unit:'Mini Coconut Cookies, 1 Kg'
                },{
                    unitPrice:350, 
                    itemClass:'',unit:'Coconut Cookies, 500gms'
                },{
                    unitPrice:700, 
                    itemClass:'',unit:'Coconut Cookies, 1 Kg'
                },{
                    unitPrice:350, 
                    itemClass:'',unit:'Cheese Cookies, 500gms'
                },{
                    unitPrice:700, 
                    itemClass:'',unit:'Cheese Cookies, 1 Kg'
                }],
        },
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '', params:'cookies-brownies-other', label: 'Cookies, Brownies and Others'}
        ],    
    },{
        parentKey:"top-level", key: "feedback-testimonial-posts", levelIndex:1,isLeafParent:true, roles:['any'],
        label: "Feedback, Testimonials",
        description:'What my customers are saying',
        
        
        emptyMessage: 'Empty Content or Error', breadCrumb:[
            {link: '/view', params:'top-level', label: 'HOME'},
            {link: '', params:'feedback-testimonials', label: 'Feedback, Testimonials'}
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
    }
]