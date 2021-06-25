/* eslint-disable default-case */
import React, { HTMLAttributes } from 'react';

import { AppIcon } from '../../../types/icon-types';
import { Cross } from './cross';
import { Dollar } from './dollar';
import { PeopleGroup } from './people-group';
import { UnitSold } from './unit-sold';

type Props = {
    name: AppIcon;
} & HTMLAttributes<SVGElement>;

// eslint-disable-next-line consistent-return
export const Icon: React.FC<Props> = ({ name, ...rest }: Props) => {
    switch (name) {
        case AppIcon.UnitSold:
            return <UnitSold {...rest} />;

        case AppIcon.PeopleGroup:
            return <PeopleGroup {...rest} />;

        case AppIcon.Dollar:
            return <Dollar {...rest} />;

        case AppIcon.Cross:
            return <Cross {...rest} />;
    }
};
