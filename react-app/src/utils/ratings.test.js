import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateTrackAverage, calculateAlbumRating, getAlbumRating } from './ratings.js';
import { albums } from '../data/albums.js';

const close = (actual, expected) => assert.ok(Math.abs(actual - expected) < 1e-6);

test('basic track averages and null track ratings', () => {
  close(calculateTrackAverage([{ rating: 8 }, { rating: 9 }, { rating: 10 }]), 9);
  close(calculateTrackAverage([{ rating: 10 }, { rating: null }, { rating: 8 }]), 9);
  assert.equal(calculateTrackAverage([{ rating: null }]), null);
});

test('weighted 60/40 album rating', () => {
  close(calculateAlbumRating(8, 9.5), 8.6);
  close(getAlbumRating({ tracks: [{ rating: 10 }, { rating: 8 }], holisticRating: 8.5 }), 8.8);
});

test('new imports without a holistic rating stay unrated', () => {
  assert.equal(getAlbumRating({ tracks: [{ rating: 8 }], holisticRating: null }), null);
  assert.equal(getAlbumRating({ tracks: [{ rating: null }], holisticRating: 9 }), null);
});

test('five seeded albums have a numeric score', () => {
  assert.equal(albums.length, 5);
  for (const album of albums) assert.ok(Number.isFinite(getAlbumRating(album)));
});
