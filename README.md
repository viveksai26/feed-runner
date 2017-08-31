# Project Overview

This project is about a web-based application that reads RSS feeds.
we used jasmine to write a number of tests on this application

# tests

To see the no of tests written on this application open index.html
in the bottom of the page all the tests will be visible we can run the tests individually or else all at once.

Various tests written on this application are
1. RSS feeds

1.1 checking whether they are defined

1.2 check whether url exists and url is not empty.Expecting url not to be zero

1.3 checking whether name exists and name is not empty. Expecting name not to be zero

2.The menu

2.1 checking whether menu is initially hidden. Expecting the body has a hidden class menu-hidden which hides the menu to be true.

2.2 checking whether menu is toggled when menu icon is clicked. Upon each click expect body has menu-hidden true/False alternatively

3.checking asynchronously for atleast a single entry when loadfeed function is called.This is done by asynchronously loading the load feed and expecting the feed not tobe zero.

4.check whether the feed actually changes each time a new feed is loaded. This is done by saving the feed into variables for different load times and comparing them so that they wont be equal.