import { DurableObject } from "cloudflare:workers";

export class Router extends DurableObject<Env> {
	constructor(ctx: DurableObjectState, env: Env) {
		super(ctx, env);
	}
}
