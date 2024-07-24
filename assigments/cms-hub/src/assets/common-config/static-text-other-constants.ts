
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
          <p class='testimonial'>(Google Review) Date: July 2024<br/>  Name: Sachin Patil<br/>Really nice nice taste ,must try<br/>
                * Service: Delivery<br/>*  Price per person:₹400–600
<br/>*  Food: 5
<br/>*  Service: 5
<br/>*  Atmosphere: 5
<br/>*  Recommended dishes
Chocolate Cake with Ganache, Red Velvet Cake

           <p class='testimonial'>(Google Review) Date: July 2024<br/> Name: Vedant Bhandare<br/>I really like eat Ritchie Bakes cake 🎂 like Coffee Cup Cake with Coffee Buttercream it too good.<br/>
          * Food: 5<br/>*  Service: 5<br/>*  Food: 5<br/>*  Service: 5<br/>*  Atmosphere: 5 <br/>
*  Recommended dishes: Chocolate Cake with Ganache
</p>
<p class='testimonial'>Date:  
2nd July, 2024.<br/>SUCHITRA RAMANI <br/>
Product purchased: DESIGNER BIRTHDAY CAKES, CHRISTMAS CAKES<br/>
Comments:<br/>
The cakes from Ritchie Bakes are delicious, excellent quality and well packed. Marisa has designed amazing cakes for us. She understands how I  visualize the cake and makes it real.


</p>
<p class="testimonial">Deepashree <br/>Product purchased coffee and chocolate cake<br/>
  <br/>
  Comments when i plan to buy cake or gift someone a cake i always prefer Marisa who bakes cake so well ,the taste is 10/10 , presentation,packing is perfect.<br/>
  Thanks Marisa for making our occasion just perfect 😊 lots of success to ur business ❤️ <br/>
  <br/>
  15 March 2024, 14 Nov 2023</p>
  <p class='testimonial'>Mira<br/>
Coffee Cake<br/>
Early March 2024<br/>
Very delicious and would definitely buy again when available and also recommend to all others to try it too.</p>
<p class='testimonial'>Swapnali<br/>
Product purchased : Christmas Cake Loaf<br/>
Comments : Yummy, Moist, Quickly delivered.<br/>
Date  December 2023</p>
 <p class='testimonial'>Lawrence Coelho <br/><br/>
  Cakes <br/><br/>
  Excellent, will buy again <br/>
  August 23</p>
<p class='testimonial'>
Name : Mamta Nagda<br/>
<br/>
All varieties of yummy cup cake including Coffee, Vanila, Blue Berry, Red Velvet.<br/>
<br/>
Review : Mouth melting, Delicious, Yummy and the best tasting cupcakes I had ever tasted till now. One must not miss ordering n tasting them at least once. Am sure, you will recommend it to your loved ones. Vanila n coffee are my all time favorites 😋😋<br/>
</p><p class='testimonial'>
Mira<br/>
Coffee Cake<br/>
Early March 2024<br/>
Very delicious and would definitely buy again when available and also recommend to all others to try it too.<br/>
</p><p class='testimonial'>
Dr. Francis D'Costa<br/>
<br/>
Testimony... Experience of coffee cupcakes<br/>
The coffee cup cakes that I ordered was yummy , delicious and mouth watering . Even my family enjoyed having it . Looking forward to order more <br/>
Thanks Marisa for making such delicious cup cakes <br/>
</p><p class='testimonial'>
Maria D'souza<br/>
<br/>
Product purchased : Orange bar cakes<br/>
<br/>
Comments : They were absolutely delicious, fluffy, and fruity taste. Enjoyed every bit of it. I'm looking forward to many more of your baking skills.<br/>
Date : Ordered during Easter 2024 as Easter gifts.<br/>
</p><p class='testimonial'>
Pooja Kumar <br/>
<br/>
Product purchased- Cupcakes<br/>
<br/>
Comments- I had the cupcakes from Ritchie Bakes and trust me it is just so delicious.I couldn’t stop myself from digging a spoon in it..The sponge was soft & the ganache just melted in my mouth..It was flavoursome. My favourite one is the Chocolate ganache cupcake. Thank you Ritchie Bakes.<br/>
Date - 7th July 2024<br/>
</p><p class='testimonial'>
Mrs. Sheryl Eklahare <br/>
Chocolate  cup cakes<br/>
Was yummy n delicious <br/>
10th February '2023 n 25th December '24.<br/>
</p><p class='testimonial'>
Mrs. Li Shu Fen<br/>
<br/>
I discovered a coffee cake that redefines indulgence and flavor. This exquisite creation stood out not only for its visual appeal but also for its rich, complex taste that left an unforgettable impression.<br/>
What truly impressed was the craftsmanship behind this coffee cake. Made with premium ingredients and a meticulous attention to detail, it showcased the baker's expertise in blending flavors harmoniously. Whether enjoyed with a morning espresso or as an elegant dessert after dinner, each slice was a testament to the artistry and dedication poured into its creation.<br/>
& <br/>
<br/>
The chocolate cake I had was absolutely divine! The layers were moist and rich, with a perfect balance of cocoa flavor. The frosting was smooth and not overly sweet, complementing the cake perfectly. It was definitely a treat worth savoring, perfect for any chocolate lover.  Each bite melts in your mouth with its rich, decadent chocolate flavor. The cake itself is wonderfully moist, and the frosting is like a velvety chocolate cloud that adds just the right amount of sweetness.<br/>
</p><p class='testimonial'>
Vaibhavi kadam<br/>
<br/>
Coffee cup cake <br/>
<br/>
Good tastes<br/>
</p><p class='testimonial'>
Martin <br/>
<br/>
Product purchased : Rainbow checker cake one kg<br/>
<br/>
Comments : awesome <br/>
Date: 14.11.2023<br/>
</p>

<p class='testimonial'>I am Dr.R.K.Duggal and was regular consumer of Veg.eggless cakes 🎂 from Ms.Marisa Ritchie Bakes since 2017 and still prefer.Different taste different designs for different occasions lured me.The cakes are diet specific for health conscious people. 
I wish Ritchie bakes best of luck for every endeavor.</p>
<p class='testimonial'> 
    Sidona Fernandes<br/>
    Birthday cake (football theme)<br/>
    17th November 2023.<br/>
    Coffee cakes at the church stall.
    <br/>All so good!!</p>
    <p class='testimonial'> 
    Nukshinaro Pongen: <br/>
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
 