import { Images } from '@/assets';
import { Button, Image, Label, FileSelector, Text } from '@/components';
import { useLanguage, useTheme } from '@/contexts';
import { utils } from '@/lib';
import { useState } from 'react';

type ImageUploadSelection = {
  label?: string;
  labelRemark?: string;
  onChangeValue?: (file: File) => void;
  value: { name: string; path: string };
  className?: string;
  onClickDelete?: () => void;
};

const Component = ({
  label,
  labelRemark,
  onChangeValue,
  value,
  className,
  onClickDelete,
}: ImageUploadSelection) => {
  const theme = useTheme();
  const language = useLanguage();

  const [isShowUploadOptions, setIsShowUploadOptions] = useState(false);
  const [hoverTakePhotoButton, setHoverTakePhotoButton] = useState(false);
  const [hoverSelectFromFileButton, setHoverSelectFromFileButton] =
    useState(false);

  return (
    <div className={`flex flex-col`}>
      <Label className='' value={label} />
      <div className={utils.cn(`flex items-center`)}>
        <Button
          variant={`outline`}
          className={utils.cn(
            `flex min-w-[14rem] items-center rounded px-2 py-1 shadow-md`,
            utils.isEmpty(value.name) && `justify-center`,
            !utils.isEmpty(value.name) && `justify-between`,
            !utils.isEmpty(labelRemark) && `mr-2`,
            className,
          )}
          onClick={() => {
            if (utils.isEmpty(value.name)) {
              setIsShowUploadOptions(!isShowUploadOptions);
            }
          }}
        >
          {utils.isEmpty(value.name) && (
            <>
              <Image
                className={`h-5 w-5`}
                source={Images.upload_primary}
                alt={`upload_primary`}
              />
              <Text className={`ml-2`} style={{ color: theme.colors.text1 }}>
                {language.translate(`t_upload`)}
              </Text>
            </>
          )}
          {!utils.isEmpty(value.name) && (
            <>
              <Label className='mx-2' value={value.name} />
              <Image
                className={`h-5 w-5`}
                source={Images.trash}
                alt={`trash`}
                onClick={() => {
                  onClickDelete?.();
                }}
              />
            </>
          )}
        </Button>
        {!utils.isEmpty(labelRemark) && (
          <Text className={`text-sm`} style={{ color: theme.colors.text1 }}>
            {labelRemark}
          </Text>
        )}
      </div>
      {isShowUploadOptions && (
        <div
          className={`mt-2 flex w-44 flex-col rounded border shadow-md`}
          style={{ borderColor: theme.colors.secondary }}
        >
          <Button
            className={`flex rounded-t border-b px-2 py-1`}
            style={{
              borderColor: theme.colors.secondary,
              ...(hoverTakePhotoButton && {
                backgroundColor: theme.colors.primary,
              }),
            }}
            onClick={() => {}}
            onMouseEnter={() => {
              return setHoverTakePhotoButton(true);
            }}
            onMouseLeave={() => {
              return setHoverTakePhotoButton(false);
            }}
          >
            <Text>{language.translate(`t_take_photo`)}</Text>
          </Button>
          <FileSelector
            onChangeValue={(file) => {
              onChangeValue?.(file);
              setIsShowUploadOptions(false);
            }}
            style={{
              borderColor: theme.colors.secondary,
              ...(hoverSelectFromFileButton && {
                backgroundColor: theme.colors.primary,
              }),
            }}
            onMouseEnter={() => {
              return setHoverSelectFromFileButton(true);
            }}
            onMouseLeave={() => {
              return setHoverSelectFromFileButton(false);
            }}
            acceptTypes={[`jpg`, `png`, `jpeg`]}
            className={`flex w-full rounded-b px-2 py-1`}
          >
            <Text>{language.translate(`t_select_from_file`)}</Text>
          </FileSelector>
        </div>
      )}
    </div>
  );
};

export { Component };
