<template>
  <div class="formadd">
    <div class="wrapForm">
      <div class="wrapFrom--title">
        <div class="wrapFrom--title__para" v-if="!isStatus">
          Thêm danh hiệu thi đua
        </div>
        <div class="wrapFrom--title__para" v-if="isStatus">
          Sửa danh hiệu thi đua
        </div>
        <div class="wrapFrom--title__option">
          <div class="option--mark bg">
            <span class="tooltip">Hướng dẫn</span>
            <span class="triangle"></span>
          </div>
          <div class="option--close bg" @click="this.$emit('closeForm')">
            <span class="tooltip">Đóng</span>
            <span class="triangle"></span>
          </div>
        </div>
      </div>
      <form method="post" @submit="checkValidate">
        <div class="wrapForm--data">
          <div class="wrapForm--data__top">
            <div class="top--item">
              <label for=""
                >Tên danh hiệu thi đua<span
                  style="color: #e54848; margin-left: 5px"
                  >*</span
                ></label
              >
            </div>
            <div class="top--input">
              <input
                class="input"
                :class="{ errorborder: isBorder }"
                type="text"
                v-model="dataInput.name"
                :disabled="isStatus"
                ref="input"
                @blur="checkValidate"
                placeholder="Nhập tên danh hiệu thi đua"
              />
              <div
                class="clearInput bg"
                v-if="this.dataInput.name && isStatus == false"
                @click="clearText"
              ></div>
              <span class="error" v-if="this.errName">{{
                this.errName[0]
              }}</span>
            </div>
          </div>
          <div class="wrapForm--data__main">
            <div class="main--left">
              <div class="main--left__label">
                <label for="">
                  Mã danh hiệu
                  <span style="color: #e54848; margin-left: 5px"
                    >*
                  </span></label
                >
                <div
                  v-if="this.dataInput.code && isStatus == false"
                  class="clearCode bg"
                  @click="clearCode"
                ></div>
              </div>
              <div class="main--left__input">
                <input
                  class="input"
                  v-model="dataInput.code"
                  :disabled="isStatus"
                  :class="{ errorborder: isActive }"
                  @blur="checkValidateCode"
                  type="text"
                />
              </div>
              <span class="error" v-if="this.errCode">{{
                this.errCode[0]
              }}</span>
              <div class="main--left__label" style="margin-top: 12px">
                <label for="">
                  Cấp khen thưởng<span style="color: #e54848; margin-left: 5px"
                    >*
                  </span></label
                >
              </div>
              <div class="main--left__input">
                <div class="dropdown">
                  <div class="select">
                    <span>{{this.dataInput.level}} </span>
                    <i class="fa fa-chevron-left"></i>
                  </div>
               <input type="hidden" name="levelReward" />
                  
                  <div class="icon-dropdown bg"></div>
                  <ul class="dropdown-menu">
                    <li id="male">Cấp nhà nước</li>
                    <li id="male">Cấp Tỉnh/tương đương</li>
                    <li id="female">Cấp Huyện/tương đương</li>
                    <li id="female">Cấp Xã/tương đương</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="main--right">
              <div class="main--right__label">
                <label for=""
                  >Đối tượng khen thưởng
                  <span style="color: #e54848; margin-left: 5px">*</span></label
                >
              </div>
              <div class="main--right__select">
                <div class="select--left">
                  <input
                    class="checkbox"
                    type="checkbox"
                    :checked="
                      dataInput.reward == 0 ||
                      this.isStatus == false ||
                      dataInput.reward == 2
                    "
                    :disabled="isStatus"
                  />
                  <label for="">Cá nhân</label>
                </div>
                <div class="select--right">
                  <input
                    class="checkbox"
                    type="checkbox"
                    :checked="dataInput.reward == 1 || dataInput.reward == 2"
                    :disabled="isStatus"
                  />
                  <label for="">Tập thể</label>
                </div>
              </div>
              <div :class="{ errors: isActive }"></div>
              <div class="main--right__label">
                <label for=""
                  >Loại phong trào áp dụng
                  <span style="color: #e54848; margin-left: 5px">*</span></label
                >
              </div>

              <div class="main--right__select">
                <div class="select--left">
                  <input
                    class="checkbox"
                    type="checkbox"
                    :disabled="isStatus"
                    :checked="
                      dataInput.movement == 1 ||
                      dataInput.movement == 2 ||
                      this.isStatus == false
                    "
                  />
                  <label for="">Thường xuyên</label>
                </div>
                <div class="select--right">
                  <input
                    class="checkbox"
                    type="checkbox"
                    :disabled="isStatus"
                    :checked="
                      dataInput.movement == 0 || dataInput.movement == 2
                    "
                  />
                  <label for="">Theo đợt</label>
                </div>
              </div>
            </div>
          </div>
          <div class="wrapForm--data__bottom">
            <div class="bottom--label">
              <label for="">Ghi chú</label>
            </div>
            <div class="bottom--text">
              <textarea
                name=""
                id=""
                placeholder="Nhập ghi chú"
                rows="4"
                :disabled="isStatus"
              ></textarea>
            </div>
          </div>
          <div class="wrapForm--data__status" v-if="isStatus">
            <div class="status--label">
              <label for="">Trạng thái</label>
            </div>
            <div class="status--select">
              <div class="status--select__left">
                <input
                  type="radio"
                  name="use"
                  :checked="dataInput.status == 0 "
                />
                <label style="margin-left: 10px" for="">Sử dụng</label>
              </div>
              <div class="status--select__right">
                <input
                  type="radio"
                  name="use"
                  :checked="dataInput.status == 1"
                />
                <label style="margin-left: 10px" for="">Ngừng sử dụng</label>
              </div>
            </div>
          </div>
        </div>
        <div class="wrapForm--space"></div>
        <div class="wrapForm--nav">
          <div class="close">
            <button class="btn" @click="this.$emit('closeForm')">Huỷ</button>
          </div>
          <div class="double--select" v-if="!isStatus">
            <button class="btn primary-outline">Lưu & thêm mới</button>
          </div>
          <div class="save"><button class="btn primary">Lưu</button></div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  props: {
    data: {},
  },
  data() {
    return {
      valueForm: [],
      dataInput: {
        name: this.data.rewardName,
        code: this.data.rewardCode,
        reward: this.data.rewardObject,
        level: this.data.levelID,
        movement: this.data.rewardType,
        status: this.data.rewardStatus,
      },
      isStatus: false,
      errName: [],
      errCode: [],
      isActive: false,
      isBorder: false,
      inputReward:'1'
    };
  },
  created() {
    this.changeAtr();
  },
  mounted() {
    this.$nextTick(() => this.$refs.input.focus());
    this.dropdown();
   
  },
  watch:{
    inputReward(newValue,oldValue){
      console.log("newValue"+newValue);
      console.log("oldValue"+oldValue);
    }
  },
  beforeUpdate() {
    console.log("change:"+this.inputReward);
  },
  methods: {
    /**
     * Author:VｘHieu
     * 22/11/2022
     */
    // click vào input để xổ ra cac lựa chọn
    dropdown() {
      $(".dropdown").click(function () {
        $(this).toggleClass("active");
        $(this).find(".dropdown-menu").slideToggle(300);
      });
      $(".dropdown").focusout(function () {
        $(this).removeClass("active");
        $(this).find(".dropdown-menu").slideUp(300);
      });
      $(".dropdown .dropdown-menu li").click(function () {
        $(this).parents(".dropdown").find("span").text($(this).text());
        // bind value vào input
        console.log("bf"+this.inputReward);
        this.inputReward=$(this).text();
        console.log("levelInput:"+this.inputReward);
        var getInput = $(this).parents(".dropdown").children();
        $(getInput[0]).val($(this).text());
        // set màu background của option được chọn
        // Thêm dấu tick cho option được chọn
        $(this).css("background-color", "#e0ebff");
        var arrayStyle = $(this).siblings();
        for (var i = 0; i < arrayStyle.length; i++) {
          if ($(arrayStyle[i]).css("backgroundColor") == "rgb(224, 235, 255)") {
            $(arrayStyle[i]).css("backgroundColor", "");
            $(arrayStyle[i]).children().remove();
          }
        }
        $(this).append("<div class='icon-checked bg'></div>");    
        $(this)
          .parents(".dropdown")
          .find("text")
          .attr("value", $(this).attr("id"));
          
      });
    },
    changeAtr() {
      if (this.data) {
        this.isStatus = true;
      }
    },
    // validate form thêm danh hiệu thi đua
    // validate tên danh hiệu thi đua
    /**
     * Author : VxHieu
     *18/11/2022
     */
    // validate tên danh hiệu thi đua
    // Dùng trim để bắt validate nhập tên là khoảng trắng
    checkValidate() {
      try {
        if (!this.dataInput.name) {
          this.errName.push("Tên danh hiệu thi đua không được để trống.");
        }
        if (!this.dataInput.name.trim()) {
          if (this.errName.length == 0) {
            this.errName.push("Tên danh hiệu thi đua không được để trống.");
            this.isBorder = true;
          }
        } else {
          this.errName.pop();
          this.isBorder = false;
        }

        console.log(this.errName.length, this.errName);
      } catch (error) {
        console.log(error);
      }
    },
    // validate mã danh hiệu
    checkValidateCode() {
      if (!this.dataInput.code) {
        this.errCode.push("Mã danh hiệu không được để trống.");
      }
      if (!this.dataInput.code.trim()) {
        if (this.errCode.length == 0) {
          this.errCode.push("Mã danh hiệu không được để trống.");
          this.isActive = true;
        }
      } else {
        this.errCode.pop();
        this.isActive = false;
      }
    },
    /**
     * Author : VxHieu
     *15/11/2022
     */
    // clear text danh hiệu thi đua
    clearText() {
      this.errName.push("Tên danh hiệu thi đua không được để trống.");
      this.dataInput.name = "";
    },
    // clear text mã danh hiệu
    clearCode() {
      this.errCode.push("Mã danh hiệu không được để trống.");
      this.isActive = true;
      this.dataInput.code = "";
    },
  },
};
</script>
<style scoped>
@import url("../../css/layout/form_add.css");
.icon-dropdown {
  position: absolute;
  top: 15px;
  right: 0px;
  background-image: url("../../assets/svgimg/ic_drop-down.fa70eead.svg");
  position: absolute;
}
</style>
