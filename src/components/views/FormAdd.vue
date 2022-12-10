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
      <div class="wrapForm--data">
        <div class="wrapForm--data__top">
          <div class="top--item">
            <label for=""
              >Tên danh hiệu thi đua<span
                style="color: #e54848; margin-left: 4px"
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
            <span class="error" v-if="this.errName">{{ this.errName[0] }}</span>
          </div>
        </div>
        <div class="wrapForm--data__main">
          <div class="wrap--main">
            <div class="main--left">
              <div class="main--left__label">
                <label for="">
                  Mã danh hiệu
                  <span style="color: #e54848; margin-left: 4px"
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
                  @change="checkValidateCode"
                  type="text"
                />
              </div>
              <span class="error">{{this.errCode[0]}}</span>
            </div>
            <div class="main--right">
              <div class="main--right__label">
                <label for=""
                  >Đối tượng khen thưởng
                  <span style="color: #e54848; margin-left: 4px">*</span></label
                >
              </div>

              <div class="main--right__select">
                <div class="select--left">
                  <input
                    class="checkbox"
                    type="checkbox"
                    value="0"
                    v-model="checkedNames"
                    :disabled="isStatus"
                    @change="checkValidateObject"
                  />
                  <label for="">Cá nhân</label>
                </div>
                <div class="select--right">
                  <input
                    class="checkbox"
                    type="checkbox"
                    value="1"
                    v-model="checkedNames"
                    :disabled="isStatus"
                    @change="checkValidateObject"
                  />
                  <label for="">Tập thể</label>
                </div>
              </div>

              <span class="error">{{ this.errObject[0] }}</span>
              <div :class="{ errors: isActive }"></div>
            </div>
          </div>
          <div class="wrap--main">
            <div class="main--left">
              <div class="main--left__label">
                <label for="">
                  Cấp khen thưởng<span style="color: #e54848; margin-left: 4px"
                    >*
                  </span></label
                >
              </div>
              <div class="main--left__input">
                <div class="dropdown" @click="getValueCombo">
                  <div class="select">
                    <span
                      >{{ this.enumsEmulation[`${dataInput.level}`] }}
                    </span>
                    <i class="fa fa-chevron-left"></i>
                  </div>
                  <input hidden class="valueReward" v-model="inputReward" />
                  <div class="icon-dropdown bg"></div>
                  <ul class="dropdown-menu">
                    <li>Cấp Nhà nước</li>
                    <li>Cấp Tỉnh/tương đương</li>
                    <li>Cấp Huyện/tương đương</li>
                    <li>Cấp Xã/tương đương</li>
                  </ul>
                </div>
              </div>
              <span class="error">{{this.errLevel[0]}}</span>
            </div>
            <div class="main--right">
              <div class="main--right__label">
                <label for=""
                  >Loại phong trào áp dụng
                  <span style="color: #e54848; margin-left: 4px">*</span></label
                >
              </div>

              <div class="main--right__select">
                <div class="select--left">
                  <input
                    class="checkbox"
                    type="checkbox"
                    :disabled="isStatus"
                    value="1"
                    v-model="checkedTypes"
                    @change="checkValidateType"
                  />
                  <label for="">Thường xuyên</label>
                </div>
                <div class="select--right">
                  <input
                    class="checkbox"
                    type="checkbox"
                    value="0"
                    :disabled="isStatus"
                    v-model="checkedTypes"
                    @change="checkValidateType"
                  />

                  <label for="">Theo đợt</label>
                </div>
              </div>
              <span class="error">{{ this.errType[0] }}</span>
            </div>
          </div>
        </div>
        <!-- <span class="error" v-if="this.errCode">{{ this.errCode[0] }}</span> -->

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
              <input type="radio" name="use" :checked="dataInput.status == 0" />

              <label style="margin-left: 10px" for="">Sử dụng</label>
            </div>
            <div class="status--select__right">
              <input type="radio" name="use" :checked="dataInput.status == 1" />
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
          <button class="btn primary-outline" @click="insertData">
            Lưu & thêm mới
          </button>
        </div>
        <div class="save">
          <button class="btn primary" @click="insertData">Lưu</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import axios from "axios";

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
      errObject: [],
      errType: [],
      errLevel: [],
      isActive: false,
      isBorder: false,
      errorPush: [],
      enumsEmulation: {
        1: "Cấp Nhà nước",
        2: "Cấp Tỉnh/tương đương",
        3: "Cấp Huyện/tương đương",
        4: "Cấp Xã/tương đương",
      },
      inputReward: "",
      checkedNames: [],
      checkedTypes: [],
      listValueReward: [],
    };
  },
  created() {
    this.changeAtr();
  },
  mounted() {
    this.$nextTick(() => this.$refs.input.focus());
    this.dropdown();
    this.bindValue();
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
        $(".valueReward").val($(this).text());
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
        this.errCode = [];
        this.isActive = false;
      }
    },
    // validate đối tượng khen thưởng
    checkValidateObject() {
      if (this.checkedNames.length > 0) {
        this.errObject = [];
      } else {
        this.errObject.push("Đối tượng khen thưởng không được để trống.");
      }
    },

    // validate loại phong trào áp dụng
    checkValidateType() {
      if (this.checkedTypes.length > 0) {
        this.errType = [];
      } else {
        this.errType.push("Loại phong trào không được để trống.");
      }
    },
    // validate cấp khen thưởng(){

    /**
     * Author : VxHieu
     *15/11/2022
     */
    // clear text danh hiệu thi đua
    clearText() {
      this.errName.push("Tên danh hiệu thi đua không được để trống.");
      this.dataInput.name = "";
    },
    // lấy giá trị của dropdown
    getValueCombo() {
      $(".valueReward").val();
      this.listValueReward.push($(".valueReward").val());
      this.errLevel = [];
    },
    //lấy giá trị cuối cùng của dropdown
    getValueEnd() {
      var i = this.listValueReward.length - 1;
      while (i >= 0) {
        if (this.listValueReward[i] != "") {
          return this.listValueReward[i];
        }
        i--;
      }
    },
    // clear text mã danh hiệu
    clearCode() {
      this.errCode.push("Mã danh hiệu không được để trống.");
      this.isActive = true;
      this.dataInput.code = "";
    },
    //Xử lí dữ liệu trước khi thêm mới
    processInsert() {
      try {
        var rewardOb;
        var rewardType;
        let value = this.getValueEnd();
        if (!value) {
          this.errLevel.push("Cấp khen thưởng không được để trống.");
        }
        this.checkValidateObject();
        this.checkValidateType();
        this.checkValidateCode();
        let levelEmulation = Object.keys(this.enumsEmulation).find(
          (key) => this.enumsEmulation[key] === value
        );
        levelEmulation = Number(levelEmulation);
        this.checkedNames.length == 2
          ? (rewardOb = 2)
          : (rewardOb = Number(this.checkedNames[0]));
        this.checkedTypes.length == 2
          ? (rewardType = 2)
          : (rewardType = Number(this.checkedTypes[0]));
        var data = {
          RewardName: this.dataInput.name,
          RewardCode: this.dataInput.code,
          RewardObject: rewardOb,
          LevelID: levelEmulation,
          RewardType: rewardType,
          RewardStatus: 0,
        };
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    // Thêm mới danh hiệu thi đua
    insertData() {
      try {
        let dataInsert = this.processInsert();
        axios
          .post("http://localhost:5194/api/Rewards", dataInsert, {
            headers: {
              Accept: "application/json",
            },
          })
          .then(() => {
            this.$emit("closeForm");
            var success={"success":"Lưu thành công"};
            this.$emit("successSave",success);
            setTimeout(() => {
              window.location.reload();
            }, 3000);
          })
          .catch((e) => {
            if(e.response.status=="500"){
              var errorInsert=this.dataInput.code;
              this.$emit("errorInsert",errorInsert)
            }
           
          });
      } catch (error) {
        console.log(error);
      }
    },
    // bind các giá trị của các trường vào form
    bindValue() {
      try {
        if (this.dataInput.reward) {
          if (this.dataInput.reward == 2) {
            this.checkedNames.push(0);
            this.checkedNames.push(1);
          } else {
            this.checkedNames.push(this.dataInput.reward);
          }
        } else {
          this.checkedNames.push(0);
        }
        if (this.dataInput.movement) {
          console.log(1);
          if (this.dataInput.movement == 2) {
            this.checkedTypes.push(0);
            this.checkedTypes.push(1);
          } else {
            this.checkedTypes.push(this.dataInput.movement);
          }
        } else {
          this.checkedTypes.push(1);
        }
      } catch (error) {
        console.log(error);
      }
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
