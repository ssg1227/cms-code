
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
    appTitle:"Sanatan Aspects", 
    appAuthor:"- Sketches, blogs, quotes, paintings and more ",
 introContentList: [
    `<H1>Ritchie Bakes</H1>
    <div class='lower-ninety-landing'>
      <div class='image-container'> <img src='assets/gallery-files/images/Ritchie-bakes-logo.jpeg'></div>
      <div> <em> <h4>&nbsp;&nbsp;&nbsp;"I love to bake; cakes are my passion."</h4></em>
        Contact Details: Marisa Desouza <br/>9820848489<br/>ritchiebakes2021@gmail.com</div>`,

      `<div class=scrollable>
          <H3>Customer Feedback</H3>
          <span><em>Let some of my customers speak for me. A few testimonials; More to come!!!</em></span>
          <p class='testimonial'>Name : Vijay Acharekar<br/>
              Cake : Coffee cake 1 kg<br/>
              Comments: Thank you so much for the amazing coffee cake! It was the perfect addition to my Wife's birthday celebration. Everyone loved it and couldn't stop raving about how delicious it was. Your attention to detail and the quality of the cake truly made the occasion special. We look forward to ordering from you again for our future events!
              <br/>
Date : 24th August 2022</p>
<p class='testimonial'>I am Dr.R.K.Duggal and was regular consumer of Veg.eggless cakes 🎂 from Ms.Marisa Ritchie Bakes since 2017 and still prefer.Different taste different designs for different occasions lured me.The cakes are diet specific for health conscious people. 
I wish Ritchie bakes best of luck for every endeavor.</p>
<p class='testimonial'> 
    Sidona Fernandes<br/>
    Birthday cake (football theme)<br/>
    17th November 2023.<br/>
    Coffee cakes at the church stall.
    <br/>All so good!!</p>
    <p class='testimonial'> 
    Naro: <br/>
    Loved the coconut cake, moist and nicely baked with a lot of care.<br/> 
    It was special as Ritchie Bakes ensured it was properly packed and delivered  with utmost care. Loved its service. <br/>
    July -August 2023.</p>
    </div>
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
 