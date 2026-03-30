import { type App, Modal } from "obsidian";
import { mount, unmount } from "svelte";
import Counter from "./Counter.svelte";

export class SvelteCounterModal extends Modal {
	private component?: ReturnType<typeof Counter>;

	constructor(app: App, private readonly startCount: number) {
		super(app);
	}

	onOpen() {
		this.titleEl.setText("Svelte counter demo");
		this.component = mount(Counter, {
			target: this.contentEl,
			props: {
				startCount: this.startCount,
			},
		});
	}

	onClose() {
		if (this.component) {
			void unmount(this.component);
			this.component = undefined;
		}

		this.contentEl.empty();
	}
}
