import { test } from 'qunit';
import moduleForAcceptance from 'lemieuxsic/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | songs');

test('visiting /songs', function(assert) {
  visit('/songs');

  andThen(function() {
    assert.equal(currentURL(), '/songs');
    assert.equal(find('#title').text(), 'Lemieuxsic');
  });
});
