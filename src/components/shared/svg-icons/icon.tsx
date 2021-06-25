/* eslint-disable default-case */
import React, { HTMLAttributes } from 'react';

import { AppIcon } from '../../../types/icon-types';
import { UnitSold } from './unit-sold';

type Props = {
    name: AppIcon;
} & HTMLAttributes<SVGElement>;

// eslint-disable-next-line consistent-return
export const Icon: React.FC<Props> = ({ name, ...rest }: Props) => {
    switch (name) {
        case AppIcon.UnitSold:
            return <UnitSold {...rest} />;
    }
};
