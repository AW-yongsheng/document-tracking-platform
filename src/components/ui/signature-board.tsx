import { useState } from 'react';
import { Images } from '@/assets';
import { Image, Text, ModalSignature } from '@/components';
import { useTheme } from '@/contexts';
import { utils } from '@/lib';

type SignatureBoard = {
  value: string;
  onChangeValue?: (signatureString: string) => void;
  firstLine: string;
  secondLine: string;
  isDisabled?: boolean;
};

const Component = ({
  value,
  onChangeValue,
  firstLine,
  secondLine,
  isDisabled,
}: SignatureBoard) => {
  const theme = useTheme();

  const [isModalSignatureVisible, setIsModalSignatureVisible] = useState(false);

  return (
    <>
      <div className={`flex flex-col`}>
        <div
          className={`flex w-fit flex-col gap-2 rounded border-2 p-2`}
          style={{
            ...(isDisabled && {
              backgroundColor: theme.colors.masked,
            }),
          }}
        >
          <Image
            className={utils.cn(`h-4 w-4 self-end`, isDisabled && `invisible`)}
            source={Images.edit_black}
            alt={`sign`}
            onClick={() => {
              setIsModalSignatureVisible(true);
            }}
          />
          <Image
            className={`h-[180px] w-[300px]`}
            source={value}
            alt={`signature`}
          />
        </div>
        <Text className={`mt-2 block`}>{firstLine}</Text>
        <Text className={`block`}>{secondLine}</Text>
      </div>
      <ModalSignature
        isVisible={isModalSignatureVisible}
        setIsModalVisible={setIsModalSignatureVisible}
        onDoneClicked={(dataUrl) => {
          onChangeValue?.(dataUrl);
          setIsModalSignatureVisible(false);
        }}
      />
    </>
  );
};

export { Component };
