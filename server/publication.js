Meteor.publish('People', function(){ return Posts.find({}, {fields: {
email: false }});
});