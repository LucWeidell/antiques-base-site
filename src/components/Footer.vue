<template>
  <footer class="footer bg-grey px-3">
    <div class="d-flex flex-row justify-content-around">
      <a href="https://www.gohebervalley.com/">
        <img alt="heber-chamber" src="../assets/img/heber-chamber.png" height="100">
      </a>
      <div class="flex-row justify-content-center">
        <h5>Contact Me:</h5>
        <a href="mailto:annaseuroantiques@gmail.com">
          <i class="mdi mdi-email-fast"> email
          </i>
        </a>
        <a href="https://www.instagram.com/annaseuropeanantiques/">
          <i class="mdi mdi-instagram"> instagram</i>
        </a>
        <a href="https://www.facebook.com/groups/1248857249307770">
          <i class="mdi mdi-facebook"> facebook</i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  setup() {
    return {}
  },
}
</script>

<style scoped>
a:hover {
  text-decoration: none;
  text-decoration: underline;
}
.footer-footer .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

@media screen and (min-width: 768px) {
  footer {
    height: fill;
  }
}

</style>
