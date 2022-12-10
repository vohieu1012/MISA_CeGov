<template>
  <div class="dialog">
    <form action="">
      <div class="dialog--content">
        <div class="content--title">
          <div class="content--title__para">
            <span>Thông báo</span>
          </div>
          <div
            class="content--title__icon bg"
            @click="this.$emit('closeDialog')"
          ></div>
        </div>

        <div class="content--message">
          <div class="noti--error" v-if="!isError">
            <span class="content--message__normal">Mã danh hiệu </span>
            <span class="content--message__fixed"> {{ this.errorMsg }}</span>
            <span class="content--message__normal">
              đã tồn tại trong danh sách.Xin vui lòng kiểm tra lại.
            </span>
          </div>
          <div class="noti--delete" v-if="isError">
            <span class="content--message__normal"> Danh hiệu </span>
            <span class="content--message__fixed"> {{ this.valueDelete }}</span>
            <span class="content--message__normal">
              là dữ liệu trên hệ thống bạn không thể xoá.</span
            >
          </div>
        </div>
        <div class="content--btn">
          <button class="btn" @click="this.$emit('closeDialog')" v-if="isFixed">
            Đóng
          </button>
          <button
            class="btn"
            @click="this.$emit('closeDialog')"
            v-if="isError"
          >
            Không
          </button>
          <button class="btn-danger" v-if="isError" @click="deleteEmulation">
            Xoá danh hiệu
          </button>
          <button
            class="btn-danger"
            @click="this.$emit('closeDialog')"
            v-if="!isError"
          >
            Đóng
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";
import { isProxy } from "vue";
export default {
  props: {
    valueDialog: {},
    errorValue: {},
  },
  component: {},
  data() {
    return {
      isError: false,
      errorMsg: [],
      valueDelete: [],
    };
  },
  mounted() {
    this.valueDelete = this.valueDialog.rewardName;
    this.errorMsg = this.errorValue;
  },
  updated() {},
  watch: {
    valueDelete(newVal) {
      if (typeof newVal !== "undefined") {
        this.isError = true;
      }
    },
    errorMsg(newVal) {
      if (!isProxy(newVal)) {
        this.isError = false;
      }
    },
  },
  methods: {
    /**
     * Author:VxHieu
     * 2/12/2022
     */
    //Xoá danh hiệu thi đua
    deleteEmulation() {
      var rewardId = this.valueDialog.rewardID;
      axios
        .delete(`http://localhost:5194/api/Rewards/${rewardId}`)
        .then(() => {
          var success = { success: "Xoá thành công" };
          this.$emit("deleteSuccess", success);
          this.$emit("closeDialog");
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
<style scoped>
@import "../../css/layout/dialog.css";
</style>
