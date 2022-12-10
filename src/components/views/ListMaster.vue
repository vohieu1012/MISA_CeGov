<template>
  <div class="container">
    <TheHeader></TheHeader>
    <div class="wrap">
      <TheSidebar></TheSidebar>
      <div class="maincontent">
        <TheMain @onAddClick="changeIsShow" :value="this.valueEdit" @unCheck="unCheck()"></TheMain>
        <ListEmulation
          @valueReward="valueShow"
          @valueSelect="logSelect"
          @deleteValue="deleteValue"
        ></ListEmulation>
      </div>
    </div>
    <FormAdd
      v-if="isShow"
      @closeForm="closeForm"
      @successSave="successSave"
      @errorInsert="errorInsert"
      :data="this.valueForm"
    ></FormAdd>
    <MISALoading v-if="false"></MISALoading>
    <MISADialog v-if="isDialog" @closeDialog="closeDialog" :valueDialog="this.valueDelete" @deleteSuccess="successSave" :errorValue="this.valueError"></MISADialog>
    <MISAToast :valueToast="this.valueToast" @closeToast="closeToast" v-if="this.isToast"></MISAToast>
  </div>
</template>
<script>
import TheHeader from "../layout/TheHeader.vue";
import TheMain from "../layout/TheMain.vue";
import TheSidebar from "../layout/TheSidebar.vue";
import ListEmulation from "./ListEmulation.vue";
import FormAdd from "./FormAdd.vue";
import MISALoading from "../base/MISALoading.vue";
import MISADialog from "../base/MISADialog.vue";
import MISAToast from "../base/MISAToast.vue";
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
    MISADialog,
    MISAToast
  },
  data() {
    return {
      isShow: false,
      isDialog: false,
      isUnCheck:false,
      valueForm: [],
      valueEdit: [],
      valueDelete: [],
      valueToast:{},
      isToast:false,
      valueError:[],
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
    // bắt các sự kiện đóng dialog
    // đặt lại các giá trị dialog về mặc định
    closeDialog() {
      this.isDialog = false;
      this.valueDelete=[];
      this.valueError=[];
    },
    // truyền valueForm
    // hiển thị chỉnh sửa
    valueShow(item) {
      this.isShow = true;
      this.valueForm = item;
    },
    // giá trị của hàng muốn xoá
    deleteValue(item) {
      this.valueDelete=item;
      this.isDialog=true;
 
    },

    /**
     * vxhieu 15/11/2022
     *
     */
    logSelect(item) {
      this.valueEdit = item;
    },
    // bắt sự kiện bỏ chọn
    unCheck(){
      alert(1);
    },
    // Gán giá trị của value Toast msg
    // thay đổi trạng thái mở toast msg
    successSave(item){
      this.isToast=true;
      this.valueToast=item;
    },
    // reload dữ liệu khi thêm mới thành công
    errorInsert(item){
      this.valueError=item;
      this.isDialog=true;
    }
    
  },
  /* eslint-env jquery */
};
</script>
