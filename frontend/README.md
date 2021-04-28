### This is the frontend part of the react-comments-django application

You can use this app as a standalone app (HTML file + javascript bundle). 
In this case, you can log in/and sing-up into the application (local sqlite3 database will be used).   

Also, you can embed app into your SPA application via following code (see components-demo-project folder for details):    
`import { TopicsListComponent } from '@studyhub.co/react-comments-django-client/lib/TopicsListComponent'`

or ThreadComponent

`import { ThreadComponent } from 'import ThreadComponent from '@studyhub.co/react-comments-django-client/lib/ThreadComponent'`

(see rollup configuration: external section, to understand what packages you need 
to install in your js application) 

You can use some conf variables. You need to add it to do document DOM
 before the application will run (e.g. in Django template).
 
`
const REACT_COMMENTS_DJANGO_CONFIG = {
    API_PROFILE_URL: '/api/v1/profiles/me/',
    EMBEDDED_MODE: true,
    API_URL_POSTFIX: 'react-comments/',
    DISPLAY_USERNAME_FIELD: 'display_name',
    ANON_AS_USER_OBJECT: true
}`
