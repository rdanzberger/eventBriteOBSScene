# This simple HTML page will facilitate you creating a scene in OBS to share with friends.
# One of the first things you'll need to do enroll with EventBrite's Developer Program, and then register an API key with your event brite account, which can be be found in their API documentation.  Once you have your OAuth Token, you can input that in the index.js file.
# Currently, the code requires you to go in and update the event ID which can be found in the query string paramater of the event id (the numeric value in the URL of the events API) if you nagivate to it on EventBrite, but this naturally better than recreating a "slide" each time a new event is created for you to help crowd source amongst your teams/events you may be attending.
# Next you'll want to create a browser input source in OBS, and point it to the local index.html file.
## Steps to create/install a virtual camera are not listed here, but if those links seem to be valuable maybe folks can add some of those as they find them useful or make suggestions.

If all works as designed, you should have an output similar to this.  I've created a sample background on a seperate scene to make the opacity "readable", but this is subject to modification by those with higher degrees of CSS ability than I.

![image](https://user-images.githubusercontent.com/57293876/158521189-8cb741b3-d36e-42da-8036-995b2e06cbf3.png)
