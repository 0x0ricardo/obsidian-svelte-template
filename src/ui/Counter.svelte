<script lang="ts">
	interface Props {
		startCount: number;
	}

	let { startCount }: Props = $props();
	let count = $state(0);

	$effect(() => {
		count = startCount;
	});
</script>

<div class="grid gap-4 py-4">
	<div class="overflow-hidden rounded-[24px] border border-[var(--background-modifier-border)] bg-[var(--background-primary)] text-[var(--text-normal)] shadow-[0_18px_50px_-24px_var(--background-modifier-box-shadow)]">
		<div class="grid gap-6 bg-[linear-gradient(135deg,var(--background-primary)_0%,var(--background-secondary)_100%)] px-6 py-6">
			<div class="flex items-start justify-between gap-4">
				<div class="grid gap-2">
					<p class="m-0 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--text-muted)]">
						Live counter
					</p>
					<h2 class="m-0 text-3xl font-semibold tracking-tight text-[var(--text-normal)]">
						Tailwind-powered Svelte card
					</h2>
				</div>
				<div class="rounded-full border border-[var(--background-modifier-border)] bg-[var(--background-secondary)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--text-muted)]">
					Obsidian
				</div>
			</div>

			<div class="grid gap-2">
				<p class="m-0 text-sm text-[var(--text-muted)]">
					My number is
				</p>
				<div class="text-6xl font-black tracking-[-0.06em] text-[var(--text-normal)]">
					{count}
				</div>
			</div>

			<div class="flex flex-wrap items-center gap-3">
				<button
					class="inline-flex items-center justify-center rounded-full bg-[var(--interactive-accent)] px-5 py-2 text-sm font-semibold text-[var(--text-on-accent)] transition duration-200 hover:scale-[1.02] hover:brightness-110 active:scale-[0.98]"
					type="button"
					onclick={() => count += 1}
				>
					Increase
				</button>
				<button
					class="inline-flex items-center justify-center rounded-full border border-[var(--background-modifier-border)] bg-[var(--background-secondary)] px-5 py-2 text-sm font-semibold text-[var(--text-normal)] transition duration-200 hover:bg-[var(--background-secondary-alt)] active:scale-[0.98]"
					type="button"
					onclick={() => count = startCount}
				>
					Reset
				</button>
			</div>
		</div>
	</div>
</div>
