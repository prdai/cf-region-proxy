import { DurableObject } from "cloudflare:workers";
import {
	HOP_BY_HOP_HEADERS,
	isJurisdictionCode,
	type RegionCode,
} from "./constants";
import type { ForwardRequest, ForwardResponse } from "./types";

export class Router extends DurableObject<Env> {
	async forward(request: ForwardRequest): Promise<ForwardResponse> {
		const response = await fetch(request.url, {
			method: request.method ?? "GET",
			headers: request.headers,
			body: request.body,
		});

		return {
			status: response.status,
			headers: filterHeaders(response.headers),
			body: await response.text(),
		};
	}
}

const getRouterStub = (env: Env, region: RegionCode) =>
	isJurisdictionCode(region)
		? env.ROUTER.jurisdiction(region).getByName(region)
		: env.ROUTER.getByName(region, { locationHint: region });

const filterHeaders = (headers: Headers): Record<string, string> =>
	Object.fromEntries(
		[...headers].filter(([key]) => !HOP_BY_HOP_HEADERS.has(key.toLowerCase())),
	);

export { getRouterStub };
