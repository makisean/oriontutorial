Comments.attachSchema(new SimpleSchema({
  // here is where we define `a comment has one post`
  // Each document in Comment has a postId
  postId: orion.attribute('hasOne', {
    // the label is the text that will show up on the Update form's label
      type: String,
      label: 'Post',
      optional:false
  }, {
    // specify the collection you're making the relationship with
    collection: Posts,
    // the key whose value you want to show for each Post document on the Update form
    titleField: 'title',
    // dunno
    publicationName: 'someRandomString',
  }),
  userId: orion.attribute('hasOne', {
    type: String,
    label: 'Author',
    optional: false
  }, {
    collection: Meteor.users,
    titleField: 'profile.name',
    publicationName: 'anotherRandomString'
  }),
  author: {
    type: String,
    optional: false,
    autoform:{
      type:'hidden',
      label:false
    }
  },
  submitted: {
    type: Date,
    optional: false,
  },
  body: orion.attribute('summernote', {
    label: 'Body'
  }),
}));