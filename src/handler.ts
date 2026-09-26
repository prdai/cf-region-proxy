import { isRegionCode, REGION_CODES } from "./constants";
import { getRouterStub } from "./router";
import type { ForwardRequest } from "./types";

const fetch = async (request: Request, env: Env): Promise<Response> => {
	const region = request.headers.get("CFRP-Region");
	if (!region || !isRegionCode(region)) {
		return Response.json(
			{ error: `CFRP-Region must be one of: ${REGION_CODES.join(", ")}` },
			{ status: 400 },
		);
	}

	const payload = (await request.json()) as ForwardRequest;
	if (typeof payload?.url !== "string") {
		return Response.json({ error: "url is required" }, { status: 400 });
	}

	const stub = getRouterStub(env, region);
	const forwarded = await stub.forward(payload);

	return new Response(forwarded.body, {
		status: forwarded.status,
		headers: forwarded.headers,
	});
};

export default fetch;
