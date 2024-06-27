'use client';

import { CSSProperties } from 'react';
import { cn } from '@/lib/utils';
import { useLanguage, useTheme } from '@/contexts';
import { Image, Text } from '@/components';
import { Images } from '@/assets';

type ValidationMessage = {
  className?: string;
  style?: CSSProperties;
  validationMessage?: string;
  isValidationMessageShow?: boolean;
  selectedLanguage?: { label: ``; value: `en_us` | `ms_my` };
};

const Component = ({
  className,
  style,
  validationMessage,
  isValidationMessageShow,
  selectedLanguage,
}: ValidationMessage) => {
  const theme = useTheme();
  const language = useLanguage();

  return (
    <span className={cn(`mt-1 `, className)} style={style}>
      {isValidationMessageShow &&
        (validationMessage ? (
          <Text className={`text-xs`} style={{ color: theme.colors.error }}>
            {validationMessage}
          </Text>
        ) : (
          <>
            <Image
              className={`h-4 w-4`}
              alt={`warning`}
              source={Images.warning}
            />
            <Text
              className={`text-xs font-semibold`}
              style={{ color: theme.colors.error }}
            >
              {selectedLanguage &&
                (selectedLanguage.value === `ms_my`
                  ? language.translate(
                      `s_please_fill_in`,
                      selectedLanguage.value,
                    )
                  : language.translate(`s_required`))}
              {!selectedLanguage && language.translate(`s_required`)}
            </Text>
          </>
        ))}
    </span>
  );
};

export { Component };
