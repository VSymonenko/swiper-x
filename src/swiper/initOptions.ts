// import { SwiperOptions as Options, Effect } from '@/types'; // FIXME:
import { SwiperOptions as Options } from '@/types';

export default class SwiperOptions implements Options {
  public get lock() {
    return this.#lock;
  }

  public set lock(value: boolean) {
    this.#lock = value;
  }

  #lock: boolean = false;

  // anchor = '';

  // effect: Effect = 'slide';

  // sensitivity = 1;

  // activeClass = 'active';

  // fullWidth = true;

  // fullHeight = true;

  // width = 300;

  // height = 300;

  // loop = false;

  // isMobile = false;

  // navigation = {
  //   icons: {
  //     next: '>',
  //     previous: '<',
  //   },
  //   calibration: 15,
  // };

  // pagination = {
  //   activeClass: 'active-page',
  //   clickable: true,
  // };

  // slidesPerView = 1;

  // spaceBetweenSlides = 15;

  // speed = 300;
}