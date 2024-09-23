<template>
  <div class="container">
    <div class="card" style="--clr: #0f0"></div>
    <div class="card" style="--clr: #ff0"></div>
  </div>
</template>

<script>
let cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.onmousemove = function (e) {
    let x = e.pageX - card.offsetLeft;
    let y = e.pageY - card.offsetTop;
    card.style.setProperty("--x", x + "px");
    card.style.setProperty("--y", y + "px");
  };
});
export default {};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  flex-wrap: wrap;
}

.container .card {
  position: relative;
  width: 320px;
  height: 400px;
  background: rgba(45, 45, 45, 1);
  border-radius: 20px;
}
.container .card::before {
  content: "";
  position: absolute;
  top: var(--y);
  left: var(--x);
  transform: translate(-50%, -50%);
  background: radial-gradient(var(--clr), transparent, transparent);
  width: 400px;
  height: 400px;
  opacity: 0;
  transition: 0.5s, top 0s, left 0s;
}
.container .card:hover::before {
  opacity: 1;
}
.contaner .card::after {
  content: "";
  position: absolute;
  inset: 2px;
  border-radius: 18px;
  background: rgba(45, 45, 45, 0.9);
}
</style>
