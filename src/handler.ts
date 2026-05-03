import { forwardRequest } from "./proto/forwardRequest";
import { REGION_CODES, DO_REGION_CODES } from "./constants";
import { CFRPModeHeader, CFRPRetryLogicModeHeader } from "./types";

type CFRPCustomHeaders = {
	region: REGION_CODES;
	mode?: CFRPModeHeader;
	retryLogicMode?: CFRPRetryLogicModeHeader;
	retryCount?: number;
	retryJiter?: number;
};

const extractHeaders = (headers: Headers): CFRPCustomHeaders => {
	return {
		Region: DO_REGION_CODES.me,
		Mode: CFRPModeHeader.Optimal,
		RetryLogicMode: CFRPRetryLogicModeHeader.Regional,
		RetryCount: 1,
		RetryJiter: 1,
	};
};

const extractBody = (bytes: Uint8Array[]): Request | void => {};

const fetch = async (
	request: Request,
	_: Env,
	__: ExecutionContext,
): Promise<Response> => {
	return new Response("test");
};

export default fetch;
