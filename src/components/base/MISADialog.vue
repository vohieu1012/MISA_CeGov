<template>
  <div class="wrap">
    <div id="dialog" title="Basic dialog">
      <p>
        This is the default dialog which is useful for displaying information.
        The dialog window can be moved, resized and closed with the
        &apos;x&apos; icon.
      </p>
    </div>
  </div>
</template>
 
<script>
export default {
  mounted() {
    $(".dialog").dialog();
  },
  /* eslint-env jquery */
};
</script>
<style scoped>
.wrap {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: beige;
}
.dialog {
  width: 500px;
  height: 300px;
  border: 1px solid blueviolet;
}
</style>
