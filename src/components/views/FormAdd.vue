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
          <div class="option--mark bg"></div>
          <div class="option--close bg" @click="this.$emit('closeForm')"></div>
        </div>
      </div>

      <!-- v-for="(item, key) in data" :key="key" -->
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
              type="text"
              :value="dataInput.name"
              :disabled="isStatus"
              placeholder="Nhập tên danh hiệu thi đua"
            />
          </div>
        </div>
        <div class="wrapForm--data__main">
          <div class="main--left">
            <div class="main--left__label">
              <label for="">
                Mã danh hiệu
                <span style="color: #e54848; margin-left: 5px">* </span></label
              >
            </div>
            <div class="main--left__input">
              <input
                class="input"
                :value="dataInput.code"
                :disabled="isStatus"
                type="text"
              />
            </div>
            <div class="main--left__label">
              <label for="">
                Cấp khen thưởng<span style="color: #e54848; margin-left: 5px"
                  >*
                </span></label
              >
            </div>
            <div class="main--left__input">
              <select name="" id="" class="select" :disabled="isStatus">
                <option value="">Cấp Nhà nước</option>
                <option value="">Cấp Tỉnh/tương đương</option>
                <option value="">Cấp Huyện/tương đương</option>
                <option value="">Cấp Xã/tương đương</option>
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
                  :checked="dataInput.reward == 'Cá nhân'"
                  :disabled="isStatus"
                />
                <label for="">Cá nhân</label>
              </div>
              <div class="select--right">
                <input
                  class="checkbox"
                  type="checkbox"
                  :checked="dataInput.reward == 'Tập thể'"
                  :disabled="isStatus"
                />
                <label for="">Tập thể</label>
              </div>
            </div>
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
                    dataInput.movement == 'Thường xuyên' ||
                    dataInput.movement == 'Thường xuyên;Theo đợt'
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
                    dataInput.movement == 'Theo đợt' ||
                    dataInput.movement == 'Thường xuyên;Theo đợt'
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
          <button class="btn">Huỷ</button>
        </div>
        <div class="double--select" v-if="!isStatus">
          <button class="btn primary-outline">Lưu & thêm mới</button>
        </div>
        <div class="save"><button class="btn primary">Lưu</button></div>
      </div>
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
    };
  },
  created() {
    this.formList();
    this.changeAtr();
  },
  beforeUpdate() {
    this.valueForm = this.data;
  },
  methods: {
    formList() {
      console.log(this.data);
    },
    changeAtr() {
      if (this.data) {
        this.isStatus = true;
      }
    },
  },
};
</script>
<style scoped>
@import url("../../css/layout/form_add.css");
</style>