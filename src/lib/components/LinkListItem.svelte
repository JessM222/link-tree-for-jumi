<script>
  export let link = null;
</script>

<div class="container">
  <div class="overallContainer">
    
    <div class="imgContainer">
      <img src={link.icon ?? "./icons/icon-default.png"} alt="icon" />
    </div>

    <div class="textContainer">
      <h2>{link.name}</h2>
      <a href={link.url}> {link.url} </a>
    </div>
  </div>
</div>

<style>
  h2 {
    color: white;
  }
  a {
    color: white;
  }

  .container {
    width: 60%;
    padding: 2px;
  }
  .overallContainer {
    display: flex;
    background-color: rgb(137, 164, 195);
    border-radius: 1rem;
    flex-direction: row;
    justify-content: start;
    gap: 40px;
  }

  .imgContainer {
    display: flex;
    align-self: center;
  }
  
  img {
    display: flex;
    margin: 20px;
    width: 60px;
  }
  .textContainer {
    display: flex;
    flex-direction: column;
    align-self: start;
    height: 100px;
  }
</style>
