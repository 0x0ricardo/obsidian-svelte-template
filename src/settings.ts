import { type App, PluginSettingTab, Setting } from "obsidian";
import type SvelteTemplatePlugin from "./main";

export interface SvelteTemplateSettings {
	startCount: number;
}

export const DEFAULT_SETTINGS: SvelteTemplateSettings = {
	startCount: 5,
};

export class SvelteTemplateSettingTab extends PluginSettingTab {
	plugin: SvelteTemplatePlugin;

	constructor(app: App, plugin: SvelteTemplatePlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;

		containerEl.empty();

		new Setting(containerEl)
			.setName("Counter start value")
			.setDesc("Set the initial value for the counter demo.")
			.addText((text) => text
				.setPlaceholder("5")
				.setValue(String(this.plugin.settings.startCount))
				.onChange(async (value) => {
					const nextValue = Number.parseInt(value, 10);
					this.plugin.settings.startCount = Number.isNaN(nextValue) ? DEFAULT_SETTINGS.startCount : nextValue;
					await this.plugin.saveSettings();
				}));
	}
}
