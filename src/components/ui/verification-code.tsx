'use client';

import { useTheme } from '@/contexts';
import { CSSProperties, useRef } from 'react';

type ValidationMessage = {
  className?: string;
  style?: CSSProperties;
  validationMessage?: string;
  value: string;
  onChangeValue: (value: string) => void;
};

const Component = ({ className, value, onChangeValue }: ValidationMessage) => {
  const theme = useTheme();
  const count = 6;
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      {Array(count)
        .fill(null)
        .map((_, index) => {
          return (
            <input
              key={index}
              ref={inputRefs[index]}
              className={`ml-2 h-10 w-10 rounded border text-center text-3xl text-gray-700 shadow outline-none`}
              style={{
                color: theme.colors.onPrimary,
                borderColor: theme.colors.primary,
                backgroundColor: theme.colors.onBackground,
              }}
              type='number'
              onChange={(e) => {
                const input = e.target;
                const previousInput = inputRefs[index - 1];
                const nextInput = inputRefs[index + 1];

                // Update code state with single digit
                const newCode = value.split(``);
                // Convert lowercase letters to uppercase
                if (/^[a-z]+$/.test(input.value)) {
                  const uc = input.value.toUpperCase();
                  newCode[index] = uc;
                  inputRefs[index].current!.value = uc;
                } else {
                  newCode[index] = input.value;
                }
                onChangeValue(newCode.join(``));

                input.select();

                if (input.value === ``) {
                  // If the value is deleted, select previous input, if exists
                  if (previousInput) {
                    previousInput.current?.focus();
                  }
                } else if (nextInput) {
                  // Select next input on entry, if exists
                  nextInput.current?.select();
                }
              }}
              onKeyDown={(e) => {
                const input = e.currentTarget;
                const previousInput = inputRefs[index - 1];

                if (
                  (e.keyCode === 8 || e.keyCode === 46) &&
                  input.value === ``
                ) {
                  e.preventDefault();
                  if (previousInput) {
                    previousInput.current?.focus();
                  }
                }
              }}
              autoFocus={index === 0}
              onFocus={(e) => {
                e.target.select();
              }}
              onPaste={(e) => {
                e.preventDefault();

                const pastedCode = e.clipboardData.getData(`text`);
                if (pastedCode.length === 6) {
                  onChangeValue(pastedCode);
                  inputRefs.forEach((inputRef, index) => {
                    inputRef.current!.value = pastedCode.charAt(index);
                  });
                }
              }}
              maxLength={1}
            />
          );
        })}
    </div>
  );
};

export { Component };
