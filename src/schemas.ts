import * as z from "zod";
import { DO_REGION_CODES } from "./constants";

const CFRPCustomHeaders = z.object({
	region: z.enum(DO_REGION_CODES),
	mode?: CFRPModeHeader,
	retryLogicMode?: CFRPRetryLogicModeHeader,
	retryCount?: number,
	retryJiter?: number
});
