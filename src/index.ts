import { Router } from "./router";

export { Router };

export default {
	async fetch(request: Request, env: Env, _): Promise<Response> {
		return new Response("Hello World!");
	},
	async scheduled(
		controller: ScheduledController,
		env: Env,
		ctx: ExecutionContext,
	) {
		const randomFunc = async (): Promise<any> => {};
		ctx.waitUntil(randomFunc());
	},
} satisfies ExportedHandler<Env>;
