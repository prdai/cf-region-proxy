import { Router } from "./router";
import scheduled from "./cron";
import fetch from "./handler";

export { Router };

export default {
	fetch,
	scheduled,
} satisfies ExportedHandler<Env>;
