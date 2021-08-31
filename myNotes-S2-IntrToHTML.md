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
