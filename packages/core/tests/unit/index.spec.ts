import Swiper from '@/swiper';
import { options } from '@/fixtures';

let swiper: Swiper;
const el = document.createElement('div');
const classSelector = 'simple-swiper-container';
el.className = classSelector;
document.body.appendChild(el);

beforeEach(() => {
  swiper = new Swiper(`.${classSelector}`, [], options);
});

test('should be lock', () => {
  expect(swiper.lock).toBeFalsy();

  swiper.lock = true;

  expect(swiper.lock).toBeTruthy();
});

test('should be netflix mode', () => {
  expect(swiper.netflix).toBeFalsy();

  swiper.netflix = true;

  expect(swiper.netflix).toBeTruthy();
});

test('should be thtrow error', () => {
  expect(() => {
    // eslint-disable-next-line no-new
    new Swiper('wrong-type-selector');
  }).toThrow();

  expect(() => {
    // eslint-disable-next-line no-new
    new Swiper('wrong-type-selector');
  }).toThrowError();

  expect(() => {
    // eslint-disable-next-line no-new
    new Swiper('wrong-type-selector');
  }).toThrowErrorMatchingSnapshot();
});

test.todo('should be anchor');

test.todo('should be slide effect');

test.todo('should be fade effect');

test.todo('should be lazy load image');

test.todo('should be video source');

test.todo('should be support should touch');

test.todo('should be configure sensitivity');

test.todo('should be configure active class');

test.todo('should be full height');

test.todo('should be full width');

test.todo('width must be 337');

test.todo('height must be 443');

test.todo('should be infinity loop');

test.todo('should be next preview');

test.todo('should be previous preview');

test.todo('navigation must be invisible');

test.todo('next preview should be third');

test.todo('pagination must be invisible');

test.todo('should be 3 slides per view');

test.todo('space beetween slides must be 30px');

test.todo('animation speed must be 553');

test.todo('start index must be 2');

test.todo('should be support breakpoints system');

test.todo('should be support templates');

test.todo('the data must be updated');

test.todo('support resize window');

test.todo('FIXME: add stryker');

test.todo('FIXME: move to monorepo');
