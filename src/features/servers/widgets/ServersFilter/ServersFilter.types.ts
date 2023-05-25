export interface IFilterValue {
	name?: string;
	id?: number;
}

export interface IServersFilterProps {
	onChange?: (filterValue: IFilterValue) => void;
}
