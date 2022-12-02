<template>
  <div class="dialog">
    <form action="">
    <div class="dialog--content">
        <div class="content--title">
          <div class="content--title__para">
           <span>Thông báo</span>
          </div>
          <div class="content--title__icon bg" @click="this.$emit('closeDialog')">
            
          </div>
      
        </div>
        <div class="content--message">
          <span class="content--message__normal">
            Danh hiệu
          </span>
          <span class="content--message__fixed"> {{this.valueDialog.rewardName}} </span>
          <span class="content--message__normal"> là dữ liệu trên hệ thống bạn không thể xoá</span>
        </div>
        <div class="content--btn">
          <button class="btn" @click="this.$emit('closeDialog')" v-if="isFixed">Đóng</button>
          <button class="btn"  @click="this.$emit('closeDialog')"  v-if="!isFixed">Không</button>
          <button class="btn-danger" v-if="!isFixed" @click="deleteEmulation">Xoá danh hiệu</button>
        </div>
    </div>
  </form>
  </div>
</template>
<script>
import axios from "axios";
export default{
  props:{
    valueDialog:{}
  },
  component:{

  },
  data() {
    return {
      isFixed:false,
    }
  },
  methods: {
    /**
     * Author:VxHieu
     * 2/12/2022
     */
    //Xoá danh hiệu thi đua
    deleteEmulation() {
      var rewardId= this.valueDialog.rewardID;
      axios
        .delete(`http://localhost:5194/api/Rewards/${rewardId}`)
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
}
</script>
<style scoped>
@import "../../css/layout/dialog.css"
</style>