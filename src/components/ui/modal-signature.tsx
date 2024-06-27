import { useRef } from 'react';
import ReactSignatureCanvas from 'react-signature-canvas';
import { Button, Modal } from '..';
import { useLanguage, useTheme } from '@/contexts';

type ModalSignature = {
  isVisible: boolean;
  setIsModalVisible: (isVisible: boolean) => void;
  onDoneClicked: (dataUrl: string) => void;
};

const Component = ({
  isVisible,
  setIsModalVisible,
  onDoneClicked,
}: ModalSignature) => {
  const language = useLanguage();
  const theme = useTheme();

  const signatureRef = useRef<ReactSignatureCanvas>(null);

  return (
    <Modal
      isVisible={isVisible}
      onClickClose={() => {
        setIsModalVisible(false);
      }}
    >
      <div className={`m-5 flex flex-col items-center justify-center`}>
        <ReactSignatureCanvas
          ref={signatureRef}
          penColor={theme.colors.text}
          dotSize={10}
          canvasProps={{
            width: 500,
            height: 300,
            className: `sigCanvas border-2`,
          }}
        />
        <Button
          className={`mt-4`}
          variant={`solid`}
          onClick={() => {
            onDoneClicked(signatureRef.current?.toDataURL() || ``);
          }}
        >
          {language.translate(`u_done`)}
        </Button>
      </div>
    </Modal>
  );
};

export { Component };
