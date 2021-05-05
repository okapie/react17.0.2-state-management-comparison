import { atom } from 'recoil';

const inputForm = atom({
  key: 'createInputForm',
  default: [
    {
      id: 1,
      value: 'Enter something.',
    },
  ],
})

export default inputForm;
