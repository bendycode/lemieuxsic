import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend({
  host: 'http://localhost:3000'
  // headers: Ember.computed(function() {
    // return {
      // 'Content-Type': 'application/json'
    // };
  // }).volatile()
});
