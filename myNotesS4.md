SECTION 4: INTRODUCTION TO CSS:

L30. Intro to CSS: Cascading Style Sheets:

L31. Inline CSS:

index.html -> inject a little css into the open body tag, change its bg color.
https://developer.mozilla.org/en-US/docs/Web/CSS/background-color

Can also use hex values #
Color Palettes: https://colorhunt.co/

https://developer.mozilla.org/en-US/docs/Web/CSS/color_value

Change the style of the horizontal rules:

L33. Internal CSS:
How to apply css across my entire webpage (rather than in-line styling as per last lecture).

Search: browser default CSS:
https://www.w3schools.com/cssref/css_default_values.asp

All these elements has default css values applied by my browser. For the hr:
display: block;
margin-top: 0.5em;
margin-bottom: 0.5em;
margin-left: auto;
margin-right: auto;
border-style: inset;
border-width: 1px;

I can over-ride the default value by specifying that I want just a single line without a border that is white in color:

CHALLENGE:
Make my hr to just dots as per sean halpin website:
width is 10 of the page.

border-style: dotted;
When I specify the border style, when 2 values are specified, the first style applies to the top and bottom, the second to the left and right.
When 3 values are specified, the first style applies to the top, the second to the left and right, the third to the bottom.

Now that I have changed the background and hr to how I want it to look. The problem is that, its not done the same to my other pages, Achievements, Hobbies and Interests, and Contact Me. I need a single location where when I change some css there then everything gets reflected across my site in all my pages.

L34. External CSS:











