import { Images } from '@/assets';
import { Label, TextBox, Image } from '@/components';
import { useTheme } from '@/contexts';
import { utils } from '@/lib';
import { CSSProperties, useEffect, useState } from 'react';

type NumberStepper = {
  className?: string;
  style?: CSSProperties;
  label?: string;
  value: string;
  onChangeValue?: (number: string) => void;
  isRequired?: boolean;
  isDisabled?: boolean;
  minValue?: number;
  maxValue?: number;
};

const Component = ({
  className,
  style,
  label,
  value,
  onChangeValue,
  isRequired,
  isDisabled,
  minValue = 0,
  maxValue = 99,
}: NumberStepper) => {
  const theme = useTheme();
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    if (!utils.isEmpty(value)) {
      setInputValue(value);
    }
  }, [value]);

  const validateNumber = (value: string) => {
    let newValue = 0;
    const numberValue = !utils.isEmpty(value) ? parseInt(value, 10) : 0;
    if (numberValue >= maxValue) {
      newValue = maxValue;
    } else if (numberValue <= minValue) {
      newValue = minValue;
    } else if (numberValue >= minValue && numberValue <= maxValue) {
      newValue = numberValue;
    }

    const formattedValue = newValue.toString();
    return formattedValue;
  };

  return (
    <div className={className} style={style}>
      <Label
        style={{ color: theme.colors.text1 }}
        className={``}
        value={label}
        isRequired={isRequired}
      />
      <div className={`mt-2 flex items-center gap-2`}>
        <TextBox
          variant={`outline`}
          className='w-11 flex-none rounded-md p-1'
          value={inputValue}
          type='number'
          onChangeValue={(value) => {
            const formattedValue = validateNumber(value);

            onChangeValue?.(formattedValue);
          }}
          isDisabled={isDisabled}
        />
        <div className='flex flex-col gap-2'>
          <Image
            alt='arrow_up_primary'
            source={Images.arrow_up_primary}
            className='h-3 w-auto'
            onClick={() => {
              let newValue = 0;

              const numberValue = !utils.isEmpty(inputValue)
                ? parseInt(inputValue, 10)
                : 0;
              newValue = numberValue + 1;
              const test = newValue.toString();

              const formattedValue = validateNumber(test);
              setInputValue(formattedValue);
            }}
          />
          <Image
            alt='arrow_down_primary'
            source={Images.arrow_down_primary}
            className='h-3 w-auto'
            onClick={() => {
              let newValue = 0;

              const numberValue = !utils.isEmpty(inputValue)
                ? parseInt(inputValue, 10)
                : 0;
              newValue = numberValue - 1;
              const test = newValue.toString();

              const formattedValue = validateNumber(test);
              setInputValue(formattedValue);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export { Component };
