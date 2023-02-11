import { Loading } from 'notiflix/build/notiflix-loading-aio';

export const runSpinner = () => {
  Loading.standard({
    svgColor: '#ff001b',
  });
  Loading.remove(500);
};
