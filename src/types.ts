interface ForwardRequest {
	url: string;
	method?: string;
	headers?: Record<string, string>;
	body?: string;
}

interface ForwardResponse {
	status: number;
	headers: Record<string, string>;
	body: string;
}

export type { ForwardRequest, ForwardResponse };
