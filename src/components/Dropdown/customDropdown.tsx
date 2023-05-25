import React from 'react';
import {Dropdown} from '@nextui-org/react';

const CustomDropdown: React.FC = () => {
	const menuItems = [
		{key: 'edit', name: 'Active'},
		{key: 'copy', name: 'Stopped'},
		{key: 'new', name: 'Coming soon'},
	];

	return (
		<Dropdown>
			<Dropdown.Button flat>Server status</Dropdown.Button>
			<Dropdown.Menu aria-label="Dynamic Actions" items={menuItems}>
				{(item: any) => (
					<Dropdown.Item
						key={item.key}
						color={item.key === 'delete' ? 'error' : 'default'}
					>
						{item.name}
					</Dropdown.Item>
				)}
			</Dropdown.Menu>
		</Dropdown>
	);
};

export default CustomDropdown;
