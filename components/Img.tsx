import Image from 'next/image';
import { FC } from 'react';

interface Props {
  url: string;
  widthMeasure?: string;
  altText: string;
  optimized?: boolean;
  aspectRatioMeasure?: string;
  prio?: boolean;
}

export const Img: FC<Props> = ({
  url,
  altText,
  widthMeasure = '100%',
  aspectRatioMeasure = 'auto',
  optimized = true,
  prio = false,
}) => {
  return (
    <Image
      className="fadeIn"
      src={url}
      alt={altText}
      height={500}
      width={500}
      priority={prio}
      style={{
        width: widthMeasure,
        aspectRatio: aspectRatioMeasure,
        objectFit: 'cover',
      }}
      unoptimized={!optimized}
    />
  );
};
