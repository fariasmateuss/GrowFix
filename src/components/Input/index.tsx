import { forwardRef } from 'react';
import { FieldError } from '@components/Form';

import { InputProps } from './types';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = `text`, name, ...props }, ref) => (
    <div>
      <input type={type} ref={ref} {...props} />
      <FieldError name={name} />
    </div>
  ),
);
