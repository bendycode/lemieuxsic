import { test } from 'qunit';
import moduleForAcceptance from 'lemieuxsic/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | navbar');

test('visiting /songs', function(assert) {
  visit('/songs');
  click('#set-lists');

  andThen(function() {
    assert.equal(currentURL(), '/set-lists');
  });

  click('#songs');

  andThen(function() {
    assert.equal(currentURL(), '/songs');
  });
});
