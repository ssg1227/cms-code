
interface StaticText {
     appTitle: string ;
     appAuthor:string;
     introContentList:string[];
}
interface User {
  userName: string;
  userRoles: string[] ;
  landingPage?: '',
}
export const latestUploads = 60;
export const staticText:StaticText = {
    appTitle:"Ritchie Bakes", 
    appAuthor:"- Bakes to give culinary nirvana",
 introContentList: [
    `<H1>Ritchie Bakes</H1>
    <div class='lower-ninety-landing'>
      <div> <img src='assets/gallery-files/images/Ritchie-bakes-logo.jpeg'></div>
      <div> <em> <h4>&nbsp;&nbsp;&nbsp;"I love to bake; cakes are my passion."</h4></em><br/>
      Contact Details: Marisa Desouza <br/>9820848489<br/>ritchiebakes2021@gmail.com</div>
    <div>
   
    `,

    ]  
}
export const needLogin = false ;

export  const Roles:any = [
  "ADMIN",
  "TECHNICAL",
  "USER-ALL",
  "USER-OBJECTS",
  "USER-BEINGS"
]
export  const userList: User[] = [
  { 
    userName: 'shantanu',
    userRoles: ["superuser"] 
  },
  { 
    userName: 'super',
    userRoles: ["superuser"] 
  },
  { 
    userName: 'saint',
    userRoles: ["guru"] 
  },

  { 
    userName: 'pandit',
    userRoles: ["sanatani", "guru"] 
  },

  { 
    userName: 'default',
    userRoles: ["sanatani", "guru"] 
  },

  { 
    userName: 'mechanic',
    userRoles: ['non-living'] 
  },

  { 
    userName: 'generic',
    userRoles: ['non-religious'] 
  },
]; 
export  const users = [
  "shantanu",
  "technician",
  "other"
]
 