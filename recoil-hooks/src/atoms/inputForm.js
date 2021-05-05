import { atom } from 'recoil';

const inputForm = atom({
  key: 'createInputForm',
  default: [
    {
      id: 0,
      value: 'Enter something.',
    },
  ],
})

export default inputForm;
