import * as U from './util';

export const picsumUrl = (width: number, height: number): string =>
  `https://picsum.photos/${width}/${height}`;

export const randomImage = (w = 1000, h = 800, delta = 200): string =>
  picsumUrl(U.random(w, w + delta), U.random(h, h + delta));

export const randomAvatar = () => {
  const size = U.random(200, 400);
  return picsumUrl(size, size);
};
