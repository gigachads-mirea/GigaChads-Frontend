export interface IFilterValue {
    approved: any;
	name?: string;
	id?: number;
}

export interface IServersFilterProps {
	onChange?: (filterValue: IFilterValue) => void;
}
