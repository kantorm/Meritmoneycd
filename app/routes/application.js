import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
  return this.get("session").fetch().catch(function() {});
},
actions: {
  signIn: function(provider = "google") {
    this.get("session").open("firebase", { provider: provider, settings: {scope: 'email', prompt: 'consent'}}).then(function(data) {
      console.log(data.currentUser);
    });
  },
  signOut: function() {
    this.get("session").close();
  }
}
});
