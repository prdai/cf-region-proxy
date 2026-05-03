import { forwardRequest } from "./proto/forwardRequest";

const fetch = async (
	request: Request,
	_: Env,
	__: ExecutionContext,
): Promise<Response> => {
	new forwardRequest.Request();
	return new Response("test");
};

export default fetch;
