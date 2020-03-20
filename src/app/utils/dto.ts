export interface PageableSortableAndFilterableDto {
	page: number;
	orderField: string;
	sortDirection: Direction;
	size: number;
}

export interface PagingAndSortingAbstractDto extends PageableSortableAndFilterableDto {
}

export type Direction = "ASC" | "DESC";
