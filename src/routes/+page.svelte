<script>
  import { links as allLinks } from "$lib/js/links.js";
  import LinkList from "$lib/components/LinkList.svelte";
</script>

<h1>Georgie Pie the TIGER</h1>
<LinkList links={allLinks} />

<style> 
  h1 {color: rgb(113, 140, 174);}
</style>