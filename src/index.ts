interface Env {}

export default {
	async fetch(request: Request, env: Env, _): Promise<Response> {
		return new Response('Hello World!');
	},
} satisfies ExportedHandler<Env>;
