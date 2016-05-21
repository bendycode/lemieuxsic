import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  target_length_in_seconds: DS.attr('number')
});
