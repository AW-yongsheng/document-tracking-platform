import { ImageResponse } from 'next/og';

export const runtime = `nodejs`;

export const size = {
  width: 32,
  height: 32,
};
export const contentType = `image/png`;

const Icon = () => {
  return new ImageResponse(
    (
      <span
        style={{
          width: `100%`,
          height: `100%`,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
          background: `black`,
          color: `white`,
          fontSize: 14,
          borderRadius: 999,
        }}
      >
        WDP
      </span>
    ),
    {
      ...size,
    },
  );
};

export default Icon;
