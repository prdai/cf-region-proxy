const DO_REGION_CODES: string[] = [
	"wnam",
	"enam",
	"sam",
	"weur",
	"eeur",
	"apac",
	"oc",
	"afr",
	"me",
];

const JURISDICTION_REGION_CODES: string[] = ["eu", "fedramp"];

const REGION_CODES = [...DO_REGION_CODES, ...JURISDICTION_REGION_CODES];

export { REGION_CODES };
