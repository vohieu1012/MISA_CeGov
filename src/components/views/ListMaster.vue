<template>
  <div class="container">
    <TheHeader></TheHeader>
    <div class="wrap">
      <TheSidebar></TheSidebar>
      <div class="maincontent">
        <TheMain></TheMain>
        <ListEmulation></ListEmulation>
      </div>
    </div>
  </div>
</template>
<script>
import TheHeader from "../layout/TheHeader.vue";
import TheMain from "../layout/TheMain.vue";
import TheSidebar from "../layout/TheSidebar.vue";
import ListEmulation from "./ListEmulation.vue";
// import ListEmulation from "./ListEmulation.vue";
export default {
  components: {
    // ListEmulation,
    TheSidebar,
    TheMain,
    TheHeader,
    ListEmulation,
  },
};
</script>