import React, { memo, ReactElement } from 'react';
import { SVGIconProps } from './';

const KakaoIcon = (({ fill = '#000', height = '41px', onClick, style }: SVGIconProps): ReactElement => (
  <svg
    height={height}
    viewBox="0 0 41 40"
    fill={fill}
    style={style}
    onClick={onClick ? onClick : () => {
    }}
  >
    <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <rect width="41" height="40" fill="url(#pattern0)"/>
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_397:193" transform="translate(0 -0.0107509) scale(0.00341297)"/>
        </pattern>
        <image id="image0_397:193" width="293" height="292" xlinkHref="data:image/png;base64,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"/>
      </defs>
    </svg>
  </svg>
));

export default memo(KakaoIcon);
