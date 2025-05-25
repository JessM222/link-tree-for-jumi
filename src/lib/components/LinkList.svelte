<script>
  import LinkListItem from "./LinkListItem.svelte";
  export let links = [];
</script>

<div>
  {#each links as link (link.name)}
    <LinkListItem {link} />
  {/each}
</div>

<style></style>
  