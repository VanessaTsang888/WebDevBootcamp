MY COURSE NOTES:

SECTION 1: Front-End Web Development:
L1. What You'll Get in This Course.

Angela Yu is the Lead Instructor at the App Brewery Londons highest-rated programming Bootcamp.

L2. Syllabus:
I've downloaded this and will get this printed out for my folder.

L3. Bookmark the Course Resources.
I have booked the Giant List of Resoures web page ready to use when I need that.

L4. How to Get the Most Out of the Course:

Watch the video for 10 minutes and try to understand the purpose of the code (rather than trying to code with Angela). Then type out the code and try to replicate what happened in the 10 minutes. This will force me to really understand what is really going on, absorb the content and then test myself. Take key notes using the Cornell Note Taking System and to come back to then or review in the future. Print this note taking system and use it. Some modules are optional. For the modules I struggle, read around the topic, bookmark it, come back to it later. Use Google and Stack Overflow
for help.

L5. Download the 12 Rules to Learn to Code.
Will get this printed.

L6. How Does the Internet Actually Work?

some computers attached to the internet have a special job as they have to be online 24/7 ready to serve you all the data and files you request
when you access website and the computer that are doing this job is called a Server. Computers that user would use to access the internet is called
a client. A server is like a library that is open 24/7.

Client: I want to see Google.com
ISP: will tell DNS (Domain Name System) Server - its like a phonebook.
DNS Server: will lookup in its database as to what is the exact IP Address of that website.
Every computer has an IP address. So the DNS can send the IP address back to user so they can find the Google homepage.
The Internet Backbone: under water the sea.

L7. How Do Websites Actually Work?
The code: HTML, CSS and JS:
1. HTML: build the structure of my website.
2. CSS: responsible the styling my website. How I want my website to look, i.e. my btn's.
3. JS: allows my website to do things - the behavior, i.e. when we click a btn, this will take the user to...

Chrome -> right-click on an element on your screen and choose Inspect: will highlight to you the thing you right-clicked.
Right inside Chrome develoer tools, dbl click on the bit of text that corresponds to the the title, I can edit it to what I want it to say.
I can use this to test my web apps before committing to an actual change. When I refresh that page, my changes will be lost as I'm just editing
a local copy of this file that I got back from the servers.

L8. What You'll Need to Get Started - Setup Your Local Web Development Environment:
1. Chrome and Atom code editor.
2. I've installed all the Atom plugins and VSCode plugins.

L9. How to Get Help When Your're Stuck:
When i get stuck:
What did I expect to happen or what did I expect my code to do? And actually happened?
Then try to figure out what is casuing the difference?

Errors/error messages. Past the error message into Google. If no luck, past into StackOverflow website.

re-watch some of the video up to the point when the code started breaking or something unexpected.

Check my code against Angela's code. At end of each tutorial module, there is a completed project that I can download, can scroll through the completed code, compare it to my own and see if there is any error, can copy code from here to my code base to see if that line helped to resolve
the issue.

Q&A: underneth every lesson there is a Q&A secion, and it's good idea to check in the lesson when your app is broken to see  whether if anybody
else had a similar issues to me. If no luck, ask in the lesson where I'm having the issue as it will be easy for Angela to identify the issue.
Include the time stamp at which it occures in the video so she can better answer my questions. Follow the 4 Step Approach:

1. What did I expect to happen?
2. What actually happened?
3. Screenshot of my code.
4. Screenshot of the debug console that include any errors.


L10. Pathfinder:

Tailor the course to me so I can have the best learning experience, I pick
2. some experience: I have learnt a bit of HTML and CSS in the past. This has taken me to L125. Random Number Generation in JS: Building a Love Calculator. However, I need to start a the begining as I've not touch HTML5, CSS2/3, Bootstrap for a while.


SECTION 2: Intro to HTML:

L11. Intro to HTML:
HyperText Markup Language:

HTML is the foundation of all website, i.e. you'll not see a site using just a CSS file or just a JS file, but you can file a site using just
an HTML file. It will look like a site that comes from the 1990's but the site can display text or various elements such as images or forms or
tables depending how you code up the HTML file.
Important = Markup: HTML - you can structure the layout and structure of your site by using HTML tags. Have a play around using:
https://codepen.io/
Allows us to input HTML, CSS and JS code which will together will get interpreted and get shown on the both side as your website.

http://www.gutenberg.org/ebooks/1661
can view the book as plain text (no structure), or read this book online as HTML (with structure).

Add HTML to the plain text that I've pasted into codePen code editor.
<h1> to <h6> don't get any smaller.
Resources:
Learn more about HTML heading elements:
In Google search for: heading html mdn
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements
https://www.w3schools.com/html/html_headings.asp

https://devdocs.io/
Website of useful documentation in a structure that is useful.

A line break on new line: self-closing tag: <br>

L12. The Anatomy of an HTML Tag:

<h1>Hello World!</h1>
The content is located between the open and close tag.

A line break on new line: self-closing tag: <br>
Other self-closing tags, check here: https://devdocs.io/

The <hr> tag: also a self-closing tag.
<hr size="3" noshade>
The size 3 is the html attribute can check this on the devdocs.io docs.

Comments:
<!--
A comment: anything inside of here will not get interpeted

 -->

 L13. What we're building - HTML Personal Site:

 To find out what Google or Yahoo used to look like in the 1990s: Way Back Machine:
 https://archive.org/web/

 I can see Yahoo.com used to look like in 1996. It's just HTML with a lot of structure and HTML.
Looks similar to top famous people website i.e. Thomas H.Cormen Professor Department of Computer Science:
https://www.cs.dartmouth.edu/~thc/
Another famous computer guy:
https://www-cs-faculty.stanford.edu/~knuth/

I can do something similar but for my personal CV.

L14. What is The THML Bilerplate?

Home page: index.html
Most commonly used Atom keyboard shortcuts:
https://github.com/nwinkler/atom-keyboard-shortcuts
Take a look at the commands.

Create boilerplate (a code template that can be reused) code, we use the Emmet plugin we can write html and hit Enter key. If that don't work try the tab key after writing HTML,
or typing an exclamation Mark then the tab or enter key.

The code:
The Document Type tells us which version of HTML we are using. We working with HTML5. Render this file as an HTML5 document.
The head tells the browser how it should handle the page i.e. tells the broswers what the is title of this particular document/page.
Open my site inside Chrome to see the title of my site: Chrome -> inspect -> Elements: open-up the header tag and its here.

The meta element is called character set and setting it to UTF-8. The meta element gives extra meta data or associated data to my HTML document.
We are telling the browser when it opens up this file all the text inside our webpage is encoded using the UTF-8 encoding system.
UTF-8 is standard as it includes all the international symbols including the emoji characters: https://unicode-table.com/en/sets/heart-symbols/
The symbol will show up on browser like a favicon.
Other meta elements/tags include description, keywords, author and viewport. These meta tags tell the browser how it should render or display the
the webpage and they give info to search engines about the content of the website.

L15. How to Structure Text in HTML:

Now working on the <body> section.
Formatting indents: Packages -> Atom Beautify -> Beautify

italicisze html mdn:
It's best to use <em> instead of <i> italic as it can conveys more info and not just about the style.
Emphasis vs. Strong tags:
<b> bold tag, but should use the <strong> strong tag.

Horizontal rule: type hr + Enter key.

L16. HTML Lists:
bullet list: <ul> unordered list.
Ordered lists: <ol> number list.

L17. HTML Images Elements:

incorporate images to my CV website:
image stored locally. Put my photo inside of the same working folder and refer to it inside of my source code.
Attributes we can use to my image elements.

L18. HTML Links and Anchor Tags:

HTML = HyperTextMarkup Language.
HyperText: most important part.

// The href is the important part as its the HTML Attribute.
// The 'a' is the HTML element
// The https is the Link Destination.
// Between the open and close tag is the Link Text which is what will get rendered to the screen. So when the user see this word they know it will take them
// to this destination.
<a href="https://example.com">Hello</a>

To create a link to link to a different page within same site:
I created a link in the homepage that will take users to the hobbies page. The hobbies file is currently in the same folder. However, if in future the hobbies files
gets moved into a different folder then I need to specify a path to it, i.e. ../xxx/hobbies.html

Challenge: create a Contact page and link it to the homepage: contact-me.html
Linked the homepage to this new page with h1: My Contact Details.