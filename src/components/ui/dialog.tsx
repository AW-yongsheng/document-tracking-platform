'use client';

import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Image } from '..';
import { Images } from '@/assets';
import { useTheme } from '@/contexts';
import { utils } from '@/lib';

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => {
  return (
    <DialogPrimitive.Overlay
      ref={ref}
      className={cn(
        `fixed inset-0 z-50 bg-white/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 dark:bg-slate-950/80`,
        className,
      )}
      {...props}
    />
  );
});
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    styleOverlay?: React.CSSProperties;
    isShowCross?: boolean;
  }
>(
  (
    { className, styleOverlay, children, isShowCross = true, ...props },
    ref,
  ) => {
    return (
      <DialogPortal>
        <DialogOverlay style={styleOverlay} />
        <DialogPrimitive.Content
          ref={ref}
          className={cn(
            `fixed left-[50%] top-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-4 bg-white p-3 shadow-lg outline-none duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] dark:border-slate-800 dark:bg-slate-950 sm:rounded-sm`,
            className,
            `overflow-visible`,
          )}
          {...props}
        >
          {children}
          {isShowCross && (
            <DialogPrimitive.Close className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-400'>
              <X className='h-4 w-4' />
              <span className='sr-only'>Close</span>
            </DialogPrimitive.Close>
          )}
        </DialogPrimitive.Content>
      </DialogPortal>
    );
  },
);
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        `flex flex-col space-y-1.5 text-center sm:text-left`,
        className,
      )}
      {...props}
    />
  );
};
DialogHeader.displayName = `DialogHeader`;

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        `flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2`,
        className,
      )}
      {...props}
    />
  );
};
DialogFooter.displayName = `DialogFooter`;

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => {
  return (
    <DialogPrimitive.Title
      ref={ref}
      className={cn(
        `text-lg font-semibold leading-none tracking-tight`,
        className,
      )}
      {...props}
    />
  );
});
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => {
  return (
    <DialogPrimitive.Description
      ref={ref}
      className={cn(`text-sm text-slate-500 dark:text-slate-400`, className)}
      {...props}
    />
  );
});
DialogDescription.displayName = DialogPrimitive.Description.displayName;

type Modal = {
  className?: string;
  style?: React.CSSProperties;
  isVisible: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  onClickClose: () => void;
  isShowClose?: boolean;
  children: React.ReactNode;
};

const Component = React.memo(
  ({
    isVisible,
    onOpen,
    onClose,
    onClickClose,
    isShowClose = true,
    children,
    className,
    style,
  }: Modal) => {
    const theme = useTheme();
    const isFirstTime = React.useRef(true);

    React.useEffect(() => {
      if (isFirstTime.current) {
        isFirstTime.current = false;
      } else {
        if (!isVisible) {
          onClose?.();
        } else {
          onOpen?.();
        }
      }
    }, [isVisible, onClose, onOpen]);

    return (
      <Dialog open={isVisible} modal>
        <DialogContent
          isShowCross={false}
          className={utils.cn(`w-fit`, className)}
          style={{
            backgroundColor: theme.colors.modalBackground,
            ...style,
          }}
          styleOverlay={{
            backgroundColor: theme.colors.overlayDark,
          }}
        >
          {isShowClose && (
            <div className={`flex items-center justify-end`}>
              <Image
                className={`h-4 w-4`}
                source={Images.close_white}
                alt={`close`}
                onClick={onClickClose}
              />
            </div>
          )}
          {children}
        </DialogContent>
      </Dialog>
    );
  },
  (prevProps, nextProps) => {
    if (utils.stringify(prevProps) !== utils.stringify(nextProps)) {
      return false;
    }

    if (nextProps.isVisible) {
      return false;
    }

    return true;
  },
);
Component.displayName = `Modal`;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  Component,
};
