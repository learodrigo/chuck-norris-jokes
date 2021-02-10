# Chuck Norris jokes random machine
## Project setup
```
git clone git@github.com:learodrigo/chuck-norris-jokes.git
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

## User Stories
[x] As a user I want to be able to navigate to a frontend app that displays a random joke
from the CNDb. The random joke should be renewed every 30 seconds

[] As a user I want to see a pageable list of all the jokes from the CNDb. The list should be
displayed beneath the random joke. The list should display a reasonable number of
jokes and should let me navigate back a distinct number of entries, forth, to the end and
to the beginning of the list. To make me feel comfortable the app should make use of a
decent design library such as Twitter Bootstrap or Google Material Design

[] As a user I want to know, what is happening, so I want to be informed that the app is
fetching data while I wait for anything to be displayed. If the CNDb is not responsive, as
a user I want to be informed by a meaningful error message. Also I want to have the
option to retry fetching data from the CNDb

[x] As a user I want to be able to filter the list of jokes for the known categories of jokes

[X] As a user I want to see a list of jokes that are the result of a simple text search query

[] As a user I want to send a specific joke from the list per email to a friend. The email
sending dialog should open the mail application when I use this function

[x] As a user I want to navigate to another page that displays some information to me about
the coder of the application and that displays a link to the repository where I can find the
application. As I am addicted to those random jokes I still want to see a random joke any
30 seconds, so the random joke should be displayed as an app header along with the
navigation menu bar
