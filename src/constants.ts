const DO_REGION_CODES = [
	"wnam",
	"enam",
	"sam",
	"weur",
	"eeur",
	"apac",
	"oc",
	"afr",
	"me",
] as const;

const JURISDICTION_REGION_CODES = ["eu", "fedramp"] as const;

const REGION_CODES = [...DO_REGION_CODES, ...JURISDICTION_REGION_CODES];

const HOP_BY_HOP_HEADERS = new Set([
	"connection",
	"keep-alive",
	"proxy-authenticate",
	"proxy-authorization",
	"te",
	"trailer",
	"transfer-encoding",
	"upgrade",
	"content-encoding",
	"content-length",
]);

type DORegionCode = (typeof DO_REGION_CODES)[number];
type JurisdictionRegionCode = (typeof JURISDICTION_REGION_CODES)[number];
type RegionCode = DORegionCode | JurisdictionRegionCode;

const isRegionCode = (value: string): value is RegionCode =>
	(REGION_CODES as readonly string[]).includes(value);

const isJurisdictionCode = (
	region: RegionCode,
): region is JurisdictionRegionCode =>
	(JURISDICTION_REGION_CODES as readonly string[]).includes(region);

export type { DORegionCode, JurisdictionRegionCode, RegionCode };
export {
	DO_REGION_CODES,
	HOP_BY_HOP_HEADERS,
	isJurisdictionCode,
	isRegionCode,
	JURISDICTION_REGION_CODES,
	REGION_CODES,
};
