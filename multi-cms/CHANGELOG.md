# ArtIsWorship 
(new name)
# JourneyOfDrawings

## Change Log and TODOs 
## Multiple cms 
- These sources are now modified for multiple cms formats
### Quick log - to be copied across mult-cms, journey-of-drawings and ui-skins angular projects
- Start sharing git sources with Saayam.org
#### Feb 25 - March 2 2024
- (recap - multi cms is a generalize cms template applied to art gallery, general texts and large blogs)
- write interface for image elements for art gallery based on existing art-is-worship.web.app/journey-of-drawings.web.app
- add the 'text description' and 'ierations' to the card component
- apply this to ui-skin, and apply this and the card component to journey of drawings
- journey of drawings remove choice of carousel(sequential) vs  card.. keep only card (we will target how irfca switches from card to sequential view)

#### (Jan 3 2024 onward): cleanup, fixing logic and user role based issues...
##### card vs carousel - sometimes card view loads
- Nice to have target of Jan 9 - review and revamp the loadLists logic in core-content.service.ts - use an array 
- Jan 10 
- Jan 6-7 2024 target
  * User role stage wise phase 1. - two kinds: *all* or only *non-religious*
    -  Added logic to assign a default user name 'viewer' in case no user name was entered = themeNavComponent
    -  string ('true'/'false') variable to toggle view all vs view only religious content - added 'seeAll' optional to the interface 'User'. 
    - menus placed
    - Loading content 
      * stats: 
        - core-content.service.ts this._seeAll = localStorage.getItem('seeAll');  if (this._seeAll === 'true') 
        - landing page intro - moved invoking the stats (see above) to the 'isLoggedIn' check
      * new 'Religion and Guru' category.. logic in core-content.service '
        - for 'non-religious' user, ALL rellgious and guru sketches are not loaded
        - filterReligiousAndGuruLists loads selected drawings in this category
        - this function scans the religious and guru lists and JSONS to see which have the 'genericDescription' field
        - ordering is by genericCategory. Iterations are not loaded
  * Undo/refactor Jan 4 changes
  * rebalance special lists (e.g. 2021 best has only 3, 2023 has 15+ for best, non religous)
- *// QUICK FIX+DEPLOY JAN 4 2024 scrub lists for min religous content and temp freeze roles*
- Commented out in menu-tree.ts Jan 4 2024 - why was this added? one unused reference in category service '@Injectable()...'
- removed AreaSummaryPageComponent
- moved all localStorage.removeItem to a function clearCache in auth.service, *except* some  tabs and category contexts


Information:

### Pending
- Fix user roles Logic.. Right now hard coded for Amrutvani, but circle around and place a solid logic
- 
 Jan 6-7 2024 target
  * User role stage wise phase 1. - two kinds: all or only non-religious
    -  new category - 'Religious and Guru' - show 'politically correct' representative sketches
    - 
  * Undo/refactor Jan 4 changes
  * rebalance special lists (e.g. 2021 best has only 3, 2023 has 15+ for best, non religous)
- This includes changing the text based on context 
   * POLITICALLY CORRECT 'Presenting humbly, my collection of sketches, which I think can be viewed by all...' 
   * INCLUDE RELIGIOUS CONTENT '..., including sketches on religious themes -  Shree Ganesh, Devi, Mahadev and others...' 
   * INCLUDE GURU CONTENT '..., including sketches of Gurus and Saints...' 
   * Both - parse the above two statements to include 'and'
- register add user logic
probably will need dB to implement; right now hard coded users in auth.service.ts 
can add logic for now to send email to an admin user and manually entered in the above
- context (???)
intend to make this a mutiple template content management system. Should this be done dynamically, meaning all data for different templates sits on the same app, and loaded as per context, or static where a config file is set at build to load the right reader component, and the data in the app be for that context ONLY? Inclination is the latter for performance (load) reasons
- rename instance 'listFunnelSerice' to 'coreContentService'