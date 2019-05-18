👍 👎 👍 👎 👍 👎 👍 👎 👍 👎 👍 👎 👍 👎 👍 👎

* Really good work on this.

* In the back end remember that `router.route` means that you can group the functions together. So you can have something like this:

```
router.route('/things')
  .get(thingController.indexRoute)
  .post(thingController.createRoute);

router.route('/things/:id')
  .get(thingController.showRoute)
  .post(thingController.updateRoute)
  .delete(thingController.deleteRoute);

```

{
  item: 'this app',
  image: null,
  heLikesIt: *true*
}

---
## Wednesday's Homework Feedback
* Really great work on this! Apart from the obviously sucking up to the other TA...

* A minor thing, but it's good to be consistent with your file naming. Decide if you're going to name your RESTful components *Index.js*, *Show.js* etc, or *ThingIndex.js* and *ThingShow.js* etc. You'll also probably find things easier if you save all your components to do with things in a folder called *things*, because you're going to create more and more components.

---
## Thursday's Homework Feedback

* Well done for giving this a go. There are some bits missing from the backend in your user model which is stopping it from fully working.

* Make sure that you include a link to register on the nav bar so users can sign up.
