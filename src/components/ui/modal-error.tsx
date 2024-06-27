import { useModalError } from '@/contexts';
import { Image, Modal, Text } from '..';
import { Images } from '@/assets';

type ModalLoading = {};

const Component = ({}: ModalLoading) => {
  const modalError = useModalError();

  return (
    <Modal
      isVisible={modalError.isVisible}
      onClickClose={() => {
        modalError.update({
          isVisible: false,
          title: ``,
          message: ``,
        });
      }}
    >
      <div className={`flex w-[50vw] flex-col items-center p-4`}>
        <Image
          className={`w-1/5`}
          source={Images.dashboard_primary}
          alt={`warning`}
        />
        <Text className={`mt-4 text-center font-semibold`}>
          {modalError.title}
        </Text>
        <Text className={`mt-4 text-center font-semibold`}>
          {modalError.message}
        </Text>
      </div>
    </Modal>
  );
};

export { Component };
