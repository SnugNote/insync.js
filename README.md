insync.js
======

Asynchronous (Lazy-Loaded) Inline Javascript

### What is it? ###

This is a very small script that rewrites `<script>` tags that have the MIME type of `text/plain` to tags that have 
the MIME type `text/javascript`.

### Why would you use it? ###

This technique allows you to add script blocks to a page, but not actually evaluate them until a later point in time.

Possible use cases:

* Inline scripts that depend on asynchronously loaded external scripts.
* Simultanious execution of multiple script blocks across template fragments without jQuery (just put `insync()` call at bottom of page)
* To be fancy...?

### How do you use it? ###

First, add the script, either by copy/pasting into your page (it's really tiny), or linking externally.

Add your script blocks with the `text/plain` MIME type, such as:

    <script type="text/plain>
      alert("Holy asynchronus Javascript, Batman!");
    </script>
    
Then, just call `insync()` after those inline code blocks have been processed (i.e. either put the `insync()` call in 
a callback for the document loading, or at the bottom of your page).

### What browsers support it? ###

To the best of our knowledge, all of them. We've tested on current builds of Chrome, Firefox, iOS Safari, and Android, 
and those all work perfectly.

While not exaclty conventional, the technique seems to be standards compliant. And some sites, like LinkedIn use a similar 
technique (with a custom MIME type, which is arguably not standards compliant).

### Can you improve on it? ###

Sure! It's a pretty bare bones script, and our JavaScript skills are far from perfect. There are also some 
features that might improve it (though we don't plan to add in ourselves):

* Optionally pass in a class name (`<script>` tags can have classes) that targets specific blocks for activation
* Optimize for minification

### Credits ###

We originally noticed the technique on StackOverflow by the users 
[YoussefTaghlabi](http://stackoverflow.com/users/1283955/yousseftaghlabi) 
and [Rocket Hazmat](http://stackoverflow.com/users/206403/rocket-hazmat) on 
[this question](http://stackoverflow.com/questions/8946715/lazy-loading-javascript-and-inline-javascript).
