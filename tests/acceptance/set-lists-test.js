import { test } from 'qunit';
import moduleForAcceptance from 'lemieuxsic/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | set lists');

test('visiting /set-lists', function(assert) {
  visit('/set-lists');

  andThen(function() {
    assert.equal(currentURL(), '/set-lists');
  });
});
