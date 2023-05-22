import React from 'react';
import styles from './AuthHeader.module.scss';
import {Text} from '@nextui-org/react';

export const AuthHeader: React.FC<{ children: React.ReactNode }> = ({children}) => {
	return (
		<Text
			h2
			css={{
				textGradient: '45deg, $blue600 -20%, $pink600 50%',
			}}
			weight="bold"
			className={styles.AuthHeader}
		>
			{children}
		</Text>
	);
};
