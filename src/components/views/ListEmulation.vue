<template>
  <div class="tableData">
    <div class="tableData--top">
      <table>
        <thead>
          <tr>
            <th>
              <div><input class="select--value" type="checkbox" /></div>
            </th>
            <th style="min-width: 310px; max-width: 310px">
              <div>Tên danh hiệu thi đua</div>
            </th>
            <th style="width: 160px; max-width: 160px; min-width: 160px">
              <div>Mã danh hiệu</div>
            </th>
            <th style="width: 200px; max-width: 200px; min-width: 200px">
              <div>Đối tượng khen thưởng</div>
            </th>
            <th style="width: 200px; max-width: 200px; min-width: 200px">
              <div>Cấp khen thưởng</div>
            </th>
            <th style="width: 200px; max-width: 200px; min-width: 200px">
              <div>Loại phong trào</div>
            </th>
            <th style="width: 180px; max-width: 180px; min-width: 180px">
              <div>Trạng thái</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, key) in this.listValue"
            :key="key"
            @dblclick="logData(item)"
          >
            <td>
              <div class="clickSelect">
                <input
                  class="select--value"
                  @click="selectValue(item)"
                  type="checkbox"
                />
              </div>
            </td>
            <td>{{ item.competitionTitle }}</td>
            <td>{{ item.codeTitle }}</td>
            <td>
              {{
                item.objectReward == 2
                  ? "Tập thể;Cá Nhân"
                  : item.objectReward == 1
                  ? "Cá Nhân"
                  : "Tập thể"
              }}
            </td>
            <td>{{ item.levelReward }}</td>
            <td>
              {{
                item.typeMovement == 2
                  ? "Thường xuyên;Theo đợt"
                  : item.levelReward == 1
                  ? "Thường xuyên"
                  : "Theo đợt"
              }}
            </td>
            <td>
              {{ item.status }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="tableData--paging">
      <div class="tableData--paging__left">
        Tổng số <span>{{ Object.keys(listValue).length }}</span> bản ghi
      </div>
      <div class="tableData--paging__right">
        <div class="paging--right__index"></div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";

//  Tập thể:0 Cá nhân:1 Tập thể và cá nhân 2
//  Theo đợt 0 Thường xuyên 1; Thường xuyên và theo đợt

export default {
  props: [],
  data() {
    return {
      listValue: {},
      rowValue: [],
      listSelect: [],
    };
  },
  created() {
    this.listValue = [
      {
        competitionTitle: "Lao động tiên tiến",
        codeTitle: "LĐTTCH",
        objectReward: 1,
        levelReward: "Cấp huyện tương đương",
        typeMovement: 0,
        status: "Sử dụng",
      },
      {
        competitionTitle: "Chiến sĩ thi đua cấp tỉnh",
        codeTitle: "CSTDCT",
        objectReward: 0,
        levelReward: "Cấp tỉnh tương đương",
        typeMovement: 1,
        status: "Sử dụng",
      },
      {
        competitionTitle: "Chiến sĩ thi đua toàn quốc",
        codeTitle: "CSTDTQ",
        objectReward: 1,
        levelReward: "Cấp nhà nước",
        typeMovement: 2,
        status: "Ngừng sử dụng",
      },
      {
        competitionTitle: "Chiến sĩ thi đua cấp tỉnh",
        codeTitle: "CSTDCT",
        objectReward: 2,
        levelReward: "Cấp tỉnh tương đương",
        typeMovement: 1,
        status: "Sử dụng",
      },
      {
        competitionTitle: "Lao động tiên tiến",
        codeTitle: "LĐTTCH",
        objectReward: 1,
        levelReward: "Cấp huyện tương đương",
        typeMovement: 0,
        status: "Sử dụng",
      },
      {
        competitionTitle: "Chiến sĩ thi đua cấp tỉnh",
        codeTitle: "CSTDCT",
        objectReward: 2,
        levelReward: "Cấp tỉnh tương đương",
        typeMovement: 1,
        status: "Sử dụng",
      },
      {
        competitionTitle: "Chiến sĩ thi đua toàn quốc",
        codeTitle: "CSTDTQ",
        objectReward: 1,
        levelReward: "Cấp nhà nước",
        typeMovement: 2,
        status: "Ngừng sử dụng",
      },
      {
        competitionTitle: "Chiến sĩ thi đua cấp tỉnh",
        codeTitle: "CSTDCT",
        objectReward: 2,
        levelReward: "Cấp tỉnh tương đương",
        typeMovement: 0,
        status: "Sử dụng",
      },
      {
        competitionTitle: "Lao động tiên tiến",
        codeTitle: "LĐTTCH",
        objectReward: 0,
        levelReward: "Cấp huyện tương đương",
        typeMovement: 1,
        status: "Sử dụng",
      },
      {
        competitionTitle: "Chiến sĩ thi đua cấp tỉnh",
        codeTitle: "CSTDCT",
        objectReward: 0,
        levelReward: "Cấp tỉnh tương đương",
        typeMovement: 1,
        status: "Sử dụng",
      },
      {
        competitionTitle: "Chiến sĩ thi đua toàn quốc",
        codeTitle: "CSTDTQ",
        objectReward: 0,
        levelReward: "Cấp nhà nước",
        typeMovement: 2,
        status: "Ngừng sử dụng",
      },
      {
        competitionTitle: "Chiến sĩ thi đua cấp tỉnh",
        codeTitle: "CSTDCT",
        objectReward: 1,
        levelReward: "Cấp tỉnh tương đương",
        typeMovement: 1,
        status: "Sử dụng",
      },
    ];
  },
  mounted() {
    this.changeBackground(), this.scrollTable(), this.selectValue();
    /* eslint-env jquery */
  },
  methods: {
    /**
     * Author :VxHieu
     * 13/11/2022
     */
    //   Thay đổi màu background của hàng khi click chuột
    //  Thay đổi màu click xung quanh thành màu trắng

    changeBackground() {
      try {
        $("tbody tr").click(function () {
          var array = $(this).siblings();
          var ele = $(this);
          for (var i = 0; i < array.length; i++) {
            if (
              $(array[i]).children().css("background-color") ==
              "rgb(224, 235, 255)"
            ) {
              $(array[i]).children().css("background-color", "");
            }
          }
          $(this).children().css("background-color", " #e0ebff");
          $("body").click(function (event) {
            if (!$(event.target).is("td")) {
              ele.children().css("background-color", "");
            }
          });
        });
      } catch (error) {
        console.log(error);
      }
    },

    // thanh cuộn scroll sang trái
    scrollTable() {
      try {
        $("table").on("scroll", function () {
          $("table > *").width($("table").width() + $("table").scrollLeft());
        });
      } catch (error) {
        console.log(error);
      }
    },
    logData(item) {
      try {
        this.$emit("valueReward", item);
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Author :VxHieu
     * 14/11/2022
     */

    // trả dữ liệu của hàng khi click chuột vào checkbox
    selectValue(item) {
      try {
        if (item) {
          if (this.listSelect.length == 0) {
            this.listSelect.push(item);
          } else if (jQuery.inArray(item, this.listSelect) == -1) {
            this.listSelect.push(item);
          } else {
            this.listSelect.pop(item);
          }
        }
        this.$emit("valueSelect", this.listSelect);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style scoped>
@import url("../../css/layout/form_detail.css");
</style>