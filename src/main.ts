import { Plugin } from "obsidian";
import { DEFAULT_SETTINGS, SvelteTemplateSettingTab, type SvelteTemplateSettings } from "./settings";
import { SvelteCounterModal } from "./ui/SvelteCounterModal";

export default class SvelteTemplatePlugin extends Plugin {
	settings: SvelteTemplateSettings = DEFAULT_SETTINGS;

	async onload() {
		await this.loadSettings();

		this.addCommand({
			id: "open-svelte-counter-demo",
			name: "Open counter demo",
			callback: () => {
				new SvelteCounterModal(this.app, this.settings.startCount).open();
			},
		});

		this.addSettingTab(new SvelteTemplateSettingTab(this.app, this));
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData() as Partial<SvelteTemplateSettings>);
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
