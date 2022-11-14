<template>
  <div class="maincontent--title">Danh hiệu thi đua</div>
  <div class="maincontent--toolbar">
    <div class="wrap--toolbar">
      <div class="maincontent--toolbar__left">
        <div class="search--icon bg"></div>
        <div class="clearText bg" v-if="isClear" @click="clearSearch"></div>
        <input
          class="input"
          type="text"
          placeholder="Nhập mã hoặc tên danh hiệu..."
          v-model="textSearch"
        />
      </div>
      <div class="maincontent--toolbar__center btn">
        <div class="center--filter" @click="openFilter">
          <div class="center--filter__icon bg"></div>
          <div class="center--filter__name">Bộ lọc</div>
        </div>
        <div class="center--form" v-if="isFilter">
          <div class="center--form__triangle triangle--up"></div>
          <div class="center--form__reward">
            <div class="reward--title">
              <div class="reward--title__name">Lọc danh hiệu</div>
              <div class="reward--title__close bg" @click="closeFilter"></div>
            </div>
            <div class="reward--data">
              <div class="reward--data__block">
                <label for=""> Đối tượng khen thưởng </label>
                <select name="" id="" class="select">
                  <option value="">Tất cả</option>
                  <option value="">Gia đình</option>
                  <option value="">Tập thể</option>
                  <option value="">Cá nhân</option>
                  <option value="">Tập thể và cá nhân</option>
                </select>
              </div>
              <div class="reward--data__block">
                <label for=""> Cấp khen thưởng </label>
                <select name="" id="" class="select">
                  <option value="">Tất cả</option>
                  <option value="">Cấp Nhà nước</option>
                  <option value="">Cấp Tỉnh/tương đương</option>
                  <option value="">Cá Huyện/tương đương</option>
                  <option value="">Tập Xã/tương đương</option>
                </select>
              </div>
              <div class="reward--data__block">
                <label for=""> Loại phong trào </label>
                <select name="" id="" class="select">
                  <option value="">Tất cả</option>
                  <option value="">Thường xuyên</option>
                  <option value="">Theo đợt</option>
                </select>
              </div>
              <div class="reward--data__block">
                <label for=""> Trạng thái</label>
                <select name="" id="" class="select">
                  <option value="">Tất cả</option>
                  <option value="">Sử dụng</option>
                  <option value="">Ngừng sử dụng</option>
                </select>
              </div>
            </div>
            <div class="reward--space"></div>
            <div class="reward--nav">
              <div class="reward--nav__button">
                <button class="btn" @click="closeFilter">Huỷ</button>
                <button class="primary">Áp dụng</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="maincontent--toolbar__right">
      <div v-if="this.value.length == 0" class="right--add">
        <button @click="ShowDetail" class="btn primary">
          <div class="add--icon bg"></div>
          Thêm danh hiệu
        </button>
      </div>
      <div v-if="this.value.length > 0" class="right--click">
        <label for=""
          >Đã chọn <span>{{ formatLength(this.value.length) }}</span></label
        >
        <a
          for=""
          style="color: #2979ff; margin-left: 12px"
          @click="this.$emit(unCheck)"
          >Bỏ chọn</a
        >
        <button class="btn primary-outline">Sử dụng</button>
        <button class="btn">Ngừng sử dụng</button>
        <button class="btn btn-close">Xoá</button>
      </div>
    </div>
  </div>
</template>
<script>
// import { watch } from "@vue/runtime-core";

export default {
  props: {
    value: {},
  },
  components: {},
  data() {
    return {
      isShow: false,
      isFilter: false,
      valueRow: this.value,
      textSearch: "",
      isClear: false,
    };
  },
  created() {
    this.changeAdd();
  },
  mounted() {},
  watch: {
    textSearch(newValue) {
      if (newValue != "") {
        this.isClear = true;
        /*eslint-env jquery */
      } else {
        this.isClear = false;
      }
    },
    valueRow(newValue) {
      this.valueRow = newValue;
      console.log("valueRow" + this.valueRow);
    },
  },
  methods: {
    ShowDetail() {
      this.$emit("onAddClick");
    },
    // thay đổi button add thành các option
    changeAdd() {
      try {
        this.valueRow = this.value;
        console.log("row:" + this.valueRow);
        if (!this.valueRow) {
          this.isShow = true;
          console.log(this.isShow);
        }
      } catch (error) {
        console.log(error);
      }
    },
    // Thêm số 0 nếu length <10
    formatLength(length) {
      if (length < 10) {
        return "0" + length;
      } else return length;
    },
    // xoá giá trị nhập của search
    clearSearch() {
      this.textSearch = "";
    },
    // mở form lọc
    openFilter() {
      this.isFilter = true;
    },
    // đóng form lọc
    closeFilter() {
      this.isFilter = false;
    },
  },
};
</script>
<style scoped>
@import url("../../css/layout/main_content.css");
</style>