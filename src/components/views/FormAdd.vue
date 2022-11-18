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
                <select name="" id="" class="select" :disabled="isStatus">
                  <option
                    :selected="this.data.levelReward == 'Cấp nhà nước'"
                    value=""
                  >
                    Cấp Nhà nước
                  </option>
                  <option
                    :selected="this.data.levelReward == 'Cấp tỉnh tương đương'"
                    value=""
                  >
                    Cấp Tỉnh/tương đương
                  </option>
                  <option
                    :selected="this.data.levelReward == 'Cấp huyện'"
                    value=""
                  >
                    Cấp Huyện/tương đương
                  </option>
                  <option
                    :selected="this.data.levelReward == 'Cấp xã tương đương'"
                    value=""
                  >
                    Cấp Xã/tương đương
                  </option>
                </select>
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
                      dataInput.reward == 1 ||
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
                    :checked="dataInput.reward == 0 || dataInput.reward == 2"
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
                      dataInput.movement == 0 ||
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
                      dataInput.movement == 1 || dataInput.movement == 2
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
                  :checked="dataInput.status == 'Sử dụng'"
                />
                <label style="margin-left: 10px" for="">Sử dụng</label>
              </div>
              <div class="status--select__right">
                <input
                  type="radio"
                  name="use"
                  :checked="dataInput.status == 'Ngừng sử dụng'"
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
export default {
  props: {
    data: {},
  },
  data() {
    return {
      valueForm: [],
      dataInput: {
        name: this.data.competitionTitle,
        code: this.data.codeTitle,
        reward: this.data.objectReward,
        level: this.data.levelReward,
        movement: this.data.typeMovement,
        status: this.data.status,
      },
      isStatus: false,
      errName: [],
      errCode: [],
      isActive: false,
      isBorder: false,
    };
  },
  created() {
    this.changeAtr();
  },
  mounted() {
    this.$nextTick(() => this.$refs.input.focus());
  },
  methods: {
    changeAtr() {
      if (this.data) {
        this.isStatus = true;
      }
    },
    // validate form thêm danh hiệu thi đua
    // validate tên danh hiệu thi đua
    checkValidate() {
      try {
        console.log(this.dataInput.name);
        if (!this.dataInput.name) {
          this.errName.push("Tên danh hiệu thi đua không được để trống.");
          this.isBorder = true;
          console.log(1);
        } else if (this.dataInput.name) {
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
        this.isActive = true;
      } else if (this.dataInput.code) {
        this.errCode.pop();
        this.isActive = false;
      }
    },
    /**
     * Author : VxHieu
     *15/11/2022
     */
    // clear text danh hiệy thi đua
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
</style>