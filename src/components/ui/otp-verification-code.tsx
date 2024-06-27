import { Images } from '@/assets';
import { Button, Image, Text, VerificationCode } from '@/components';
import { useLanguage, useTheme } from '@/contexts';

type OTPVerificationCode = {
  className?: string;
  onClickContinue?: () => void;
  onClickReceiveCode?: () => void;
  onChange?: (value: string) => void;
  value: string;
  mobileNumber?: string;
};

const Component = ({
  onClickContinue,
  onClickReceiveCode,
  onChange,
  value,
  mobileNumber = `+6016-2223223`,
}: OTPVerificationCode) => {
  const theme = useTheme();
  const language = useLanguage();

  return (
    <>
      <div className={`flex justify-center pt-8`}>
        <Image className={`w-32`} source={Images.otp} alt={`logo`} />
      </div>
      <div className={`my-4 flex justify-center`}>
        <VerificationCode
          className={`mt-4`}
          value={value}
          onChangeValue={(e) => {
            onChange?.(e);
          }}
        />
      </div>
      <div
        className={`mt-8 flex max-w-[34rem] flex-col items-center justify-center`}
      >
        <Text
          className={`text-center`}
          style={{ color: theme.colors.onPrimary }}
        >
          {`${language.translate(
            `s_a_single_use_code_has_been_sent_to`,
          )} ${mobileNumber}. ${language.translate(
            `s_please_enter_the_6_digit_single_use_code_to_complete_the_verification_process`,
          )}`}
        </Text>
        <Button
          className={`min-w-[10rem] text-left`}
          onClick={() => {
            onClickReceiveCode?.();
          }}
        >
          <Text className={`underline`} style={{ color: theme.colors.link }}>
            {language.translate(`s_didnt_receive_a_code`)}
          </Text>
        </Button>
      </div>
      <div className={`mt-8 flex items-center justify-center`}>
        <Button
          className={``}
          variant={`solid`}
          onClick={() => {
            onClickContinue?.();
          }}
        >
          {language.translate(`t_continue`)}
        </Button>
      </div>
    </>
  );
};

export { Component };
