export enum DO_REGION_CODES {
	wnam,
	enam,
	sam,
	weur,
	eeur,
	apac,
	oc,
	afr,
	me,
}

export enum JURISDICTION_REGION_CODES {
	eu,
	fedramp,
}

export const REGION_CODES = {
	...DO_REGION_CODES,
	...JURISDICTION_REGION_CODES,
};
