'use client';

import { Text, ValidationMessage } from '@/components';
import { useTheme } from '@/contexts';
import { utils } from '@/lib';
import { CSSProperties, ReactNode } from 'react';

type Label = {
  className?: string;
  value?: ReactNode;
  isRequired?: boolean;
  htmlFor?: string;
  isValidationMessageShow?: boolean;
  validationMessage?: string;
  id?: string;
  selectedLanguage?: { label: ``; value: `en_us` | `ms_my` };
  style?: CSSProperties;
};

const Component = ({
  className,
  value,
  isRequired,
  htmlFor,
  isValidationMessageShow,
  validationMessage,
  id,
  selectedLanguage,
  style,
}: Label) => {
  const theme = useTheme();

  return (
    <label
      id={id}
      className={utils.cn(`font-semibold`, className)}
      htmlFor={htmlFor}
      style={{ color: theme.colors.text, ...style }}
    >
      {value}
      {isRequired && <Text style={{ color: theme.colors.error }}>{` * `}</Text>}
      <ValidationMessage
        isValidationMessageShow={isValidationMessageShow}
        validationMessage={validationMessage}
        selectedLanguage={selectedLanguage}
      />
    </label>
  );
};

export { Component };
