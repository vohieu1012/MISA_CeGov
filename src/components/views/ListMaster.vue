<template>
  <div class="container">
    <TheHeader></TheHeader>
    <div class="wrap">
      <TheSidebar></TheSidebar>
      <div class="maincontent">
        <TheMain @onAddClick="changeIsShow" :value="this.valueEdit"></TheMain>
        <ListEmulation
          @valueReward="valueShow"
          @valueSelect="logSelect"
        ></ListEmulation>
      </div>
    </div>
    <FormAdd
      v-if="isShow"
      @closeForm="closeForm"
      :data="this.valueForm"
    ></FormAdd>
    <MISALoading v-if="false"></MISALoading>
  </div>
</template>
<script>
import TheHeader from "../layout/TheHeader.vue";
import TheMain from "../layout/TheMain.vue";
import TheSidebar from "../layout/TheSidebar.vue";
import MISALoading from "../base/MISALoading.vue";
import ListEmulation from "./ListEmulation.vue";
import FormAdd from "./FormAdd.vue";
// import $ from "jquery";

// import ListEmulation from "./ListEmulation.vue";
export default {
  components: {
    // ListEmulation,
    TheSidebar,
    TheMain,
    TheHeader,
    ListEmulation,
    FormAdd,
    MISALoading,
  },
  data() {
    return {
      isShow: false,
      valueForm: [],
      valueEdit: [],
    };
  },

  methods: {
    // click button hiển thị form thêm

    changeIsShow() {
      this.isShow = true;
      this.valueForm = "";
    },
    // click button đóng form
    closeForm() {
      this.isShow = false;
    },
    // truyền valueForm
    // hiển thị chỉnh sửa
    valueShow(item) {
      this.isShow = true;
      this.valueForm = item;
    },

    /**
     * vxhieu 15/11/2022
     * 
     */
    logSelect(item) {
      this.valueEdit = item;
    },
  },
  /* eslint-env jquery */
};
</script>