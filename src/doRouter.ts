import { DurableObject } from "cloudflare:workers";

export class RouterDO extends DurableObject<Env> {
	constructor(ctx: DurableObjectState, env: Env) {
		super(ctx, env);
	}

	async forwardRequest() {}
}
