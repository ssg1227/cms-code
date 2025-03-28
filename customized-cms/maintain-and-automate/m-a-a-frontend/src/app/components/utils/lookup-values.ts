export class LookupValues {
    imageTabs = [
        { name: "Ganesh", menus:  ["ganesh", "ganesh-gte-Q2-2021", "ganesh-gte-Q3-2022", "ganesh-gte-Q1-2023"]},
        {name: "Gods Goddesses", menus:  ["mahadev", "mahadev and family", "devi", "laxmi-narayan-vishnu-avatars-hanuman", "devi"]},
        {name: 
        "Gurus and Mystics", menus:  ["all-dattavatars", "swami-samartha", "ganesh-gte-Q3-2022", "ganesh-gte-Q1-2023"]},
        {name: 
        "Shirdi Sai", menus:  ["sai-Q3-2020", "sai-Q2-2021", "Sai Satcharit", "ganesh-gte-Q1-2023"]},
        {name: 
        "Mumbai Meri Jaan", menus:  ["ganesh", "ganesh-gte-Q2-2021", "ganesh-gte-Q3-2022", "ganesh-gte-Q1-2023"]},
        
      ];
      canvassSizes:string[] = [
        'A3', 'A4', 'A5', 'soft','other'
      ];
      contentTypes = [
        'color-pencil',
        'black-white',
        'color-crayon',
        'color-pencil black-white',
        'poem black-white',
         'watercolor-pencil',
        'poem color',
        'soft',
      ];
      canvassMaterial = [
        'Watercolor paper',
        'Plain paper',
        'Photo print matt paper',
        'other'
      ]
      evolutionSequences = [
        {value:'1', label: 'b4 2022'},

        {value:'2', label: '2022'},
        {value:'3', label: '2023'},
        {value:'4', label: '2024'},
      ]
      keys = [
      'shree-ganesh', 
      'shree-ganesh-gte-q4-2021',
      'shree-ganesh-gte-q1-2023', 
      'devi',
       'mahadev',
       'mahadev-family',
        'laxmi-vishnu-hanuman',
        'dattavatar',
        'swami-samartha',
        'shirdi-sai-q1-q2-2021',
        'shirdi-sai-q3-q4-2021',
         'shirdi-sai-q2-q3-2022',
         'shirdi-sai-q4-2022-q1-2023', 
         'shirdi-sai-q2-q3-2023', 
         'baba-themes-1', 
         'people-places', 
          'places-scenes-objects', 
          'themes-misc',
           'animate-to-be-oragnized1', 
           'trains',
           'trains-ir-alcos', 
            'trains-ir-special-trains', 
            'mumbai-meri-jaan', 
            'mumbai-meri-jaan-2', 
            'planes', 
            'planesQ12023', 
            'technical',
      ]
    currentEvolutionSequence = 3;
    rootImageSourceFolder = `/Users/shantanug/Downloads/Sketch-transit`
    // galleryRoot = `/Users/shantanu/Documents/GitHub/js-frameworks/Angular_lte_4/shan-cms-template` ;
    galleryRoot = `//Users/shantanug/Documents/GitHub/cms-code/customized-cms/cms-main/`;
    // /Users/shantanug/Documents/GitHub/cms-code/customized-cms/cms-main/src/app/services/auth.service.ts
    galleryRootRitchieBakes = `/Users/shantanug/Documents/GitHub/cms-code/assigments/cms-hub`;
    macbookAirGalleryRoot = `/Users/shantanu/Documents/GitHub/ssg1227-GuruDatta@9/cms-code/customized-cms/cms-main/` // ssg1227-GuruDatta@9/cms-code/customized-cms/cms-main/`
    rootImageDestinationFolder = `${this.galleryRoot}/src/assets/gallery-files/images`
    //  rootImageDestinationFolder = `${this.galleryRoot}
   // rootImageDestinationFolder = `${this.galleryRoot}/src/assets/all-images/`
   // rootConfigFolder = `${this.galleryRoot}/src/assets/data-and-config/`
    // /Users/shantanu/Documents/GitHub/ssg1227-GuruDatta@9/cms-code/customized-cms/cms-main//src/assets/gallery-files/lists-and-other/image-lists
   // rootConfigFolder = `${this.galleryRoot}/src/assets/data-and-config/`
    rootConfigFolder = `${this.galleryRoot}/src/assets/gallery-files/lists-and-other/image-lists`
    downloadedImageRootFile2 = `../../../../../../../../../../../../Downloads/Sketch-transit/` ;
    downloadedImageRootFile = `../../../../../../..//../../../../../../shantanug/Downloads/Sketch-transit/`
    albumsInsertTextFile = `/Users/shantanug/Downloads/Sketch-transit-test/AlbumEntry.txt`;
    /// Ganesh07262023-forautoTest-2.jpeg
    menutreePath = '/Users/shantanug/Documents/GitHub/cms-code/customized-cms/cms-main//src/assets/content-tree/menu-tree-elements.ts';
    menutreeBackupPath = '/Users/shantanug/Documents/GitHub/cms-code/customized-cms/cms-main//src/assets/content-tree/menu-tree-elements.pre-add.bak.ts';
    menutreeEditPath = '/Users/shantanug/Documents/GitHub/cms-code/customized-cms/maintain-and-automate/m-a-a-frontend/src/app/settings-models-xfer-data/menu-tree-elements.ts';
    menutreeTestBackupPath = '/Users/shantanug/Documents/GitHub/cms-code/customized-cms/maintain-and-automate/m-a-a-frontend/src/app/components/utils/menu-tree-one-off.pre-add.bak.ts';
    menutreeFinalPath = '/Users/shantanug/Documents/GitHub/cms-code/customized-cms/cms-main//src/assets/content-tree/menu-tree-elements.ts';
    menutreeTestPath = '/Users/shantanug/Documents/GitHub/cms-code/customized-cms/maintain-and-automate/m-a-a-frontend/src/app/components/utils/menu-tree-one-off.ts';
    menutreeTempPath = '/Users/shantanug/Documents/GitHub/cms-code/customized-cms/maintain-and-automate/m-a-a-frontend/src/app/components/utils/menu-tree-elements_ts';
    // /Users/shantanug/Documents/GitHub/cms-code/customized-cms/maintain-and-automate/m-a-a-frontend/src/app/components/utils/lookup-values.ts
    listFileFrameLines = [
          `import {  ImageElement } from '@settings-and-models/image-detail'`,

    `enum PicsIndex  {
        aumkarGaneshSept2020Final,
        AumGaShivParKashiVishwCTLightNov172020Final,
        unsignedShivVeena12272020,
        ShreeSiddhivinayakQ42020,
        DeviMaaMay13182021,
        MixGenPlaneSept2020,
    };`,
    `export class <CLASSNAME> {`,
    `imageRoot = <imageroot>; reverseStack =  'false';`,
    `public allImageList:ImageElement[]  =  [`,
    `  {  
            folder:'<folderName>',
            theme:'<theme>',
            themeSummary: '',`,
            `files: [`,
          `  ]}]}`
        ]
    contextedCoreText = [
      `import {<listClass> } from '<listFileDir>';`,
      `contentList.push( { contentFile:new <listClass>(),contentCategory:'<listkey>', roles:[<roles>]}, reverseStack:'false') ;`]
};