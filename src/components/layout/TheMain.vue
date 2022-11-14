<template>
  <div class="maincontent--title">Danh hiệu thi đua</div>
  <div class="maincontent--toolbar">
    <div class="maincontent--toolbar__left">
      <div class="search--icon bg"></div>
      <input
        class="input"
        type="text"
        placeholder="Nhập mã hoặc tên danh hiệu..."
      />
    </div>
    <div class="maincontent--toolbar__right">
      <div hidden class="right--add">
        <button @click="ShowDetail" class="btn primary">
          <div class="add--icon bg"></div>
          Thêm danh hiệu
        </button>
      </div>
      <div  class="right--click">
        <label for="">Đã chọn <span>01</span></label>
        <a for="" style="color: #2979ff; margin-left: 12px">Bỏ chọn</a>
        <button class="btn primary-outline">Sử dụng</button>
        <button class="btn">Ngừng sử dụng</button>
        <button class="btn btn-close">Xoá</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {
    ShowDetail() {
      this.$emit("onAddClick");
    },
  },
};
</script>
<style scoped>
@import url("../../css/layout/main_content.css");
</style>