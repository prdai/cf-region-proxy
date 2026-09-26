import scheduled from "./cron";
import fetch from "./handler";
import { Router } from "./router";

export { Router };

export default {
	fetch,
	scheduled,
} satisfies ExportedHandler<Env>;
