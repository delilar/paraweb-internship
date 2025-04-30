import IMask from "imask";
import { TextFieldType, MaskOptions } from '@components/TextField/types';

export const getMaskOptions = (type: TextFieldType, customMask?: MaskOptions): MaskOptions => {
  if (customMask) {
    return customMask;
  }
  
  switch (type) {
    case 'email':
      return {
        mask: /^\S*@?\S*$/
      };
    case 'tel':
      return {
        mask: '+{7}(000)000-00-00'
      };
    case 'tel-ru':
      return {
        mask: [
          { mask: '8(000)000-00-00' },
          { mask: '+{7}(000)000-00-00' }
        ]
      };
    case 'date':
      return {
        mask: Date,
        pattern: 'd.`m.`Y',
        blocks: {
          d: {
            mask: IMask.MaskedRange,
            from: 1,
            to: 31,
            maxLength: 2
          },
          m: {
            mask: IMask.MaskedRange,
            from: 1,
            to: 12,
            maxLength: 2
          },
          Y: {
            mask: IMask.MaskedRange,
            from: 1900,
            to: 2999
          }
        }
      };
    default:
      return { mask: '' };
  }
};