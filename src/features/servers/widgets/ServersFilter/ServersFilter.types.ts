export interface IFilterValue {
	validated: any;
	name?: string;
	id?: number;
}

export interface IServersFilterProps {
	onChange?: (filterValue: IFilterValue) => void;
}
