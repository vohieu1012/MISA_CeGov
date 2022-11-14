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
              <div><input class="select--value" type="checkbox" /></div>
            </td>
            <td>{{ item.competitionTitle }}</td>
            <td>{{ item.codeTitle }}</td>
            <td>{{ item.objectReward }}</td>
            <td>{{ item.levelReward }}</td>
            <td>{{ item.typeMovement }}</td>
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
import axios from "axios";

export default {
  props: [],
  data() {
    return {
      listValue: {},
      rowValue: [],
    };
  },
  created() {
    this.listValue = [
      {
        competitionTitle: "Lao động tiên tiến",
        codeTitle: "LĐTTCH",
        objectReward: "Cá nhân",
        levelReward: "Cấp huyện tương đương",
        typeMovement: "Thường xuyên",
        status: "Sử dụng",
      },
      {
        competitionTitle: "Chiến sĩ thi đua cấp tỉnh",
        codeTitle: "CSTDCT",
        objectReward: "Tập thể",
        levelReward: "Cấp tỉnh tương đương",
        typeMovement: "Theo đợt",
        status: "Sử dụng",
      },
      {
        competitionTitle: "Chiến sĩ thi đua toàn quốc",
        codeTitle: "CSTDTQ",
        objectReward: "Cá nhân",
        levelReward: "Cấp nhà nước",
        typeMovement: "Thường xuyên;Theo đợt",
        status: "Ngừng sử dụng",
      },
      {
        competitionTitle: "Chiến sĩ thi đua cấp tỉnh",
        codeTitle: "CSTDCT",
        objectReward: "Tập thể",
        levelReward: "Cấp tỉnh tương đương",
        typeMovement: "Theo đợt",
        status: "Sử dụng",
      },
      {
        competitionTitle: "Lao động tiên tiến",
        codeTitle: "LĐTTCH",
        objectReward: "Cá nhân",
        levelReward: "Cấp huyện tương đương",
        typeMovement: "Thường xuyên",
        status: "Sử dụng",
      },
      {
        competitionTitle: "Chiến sĩ thi đua cấp tỉnh",
        codeTitle: "CSTDCT",
        objectReward: "Tập thể",
        levelReward: "Cấp tỉnh tương đương",
        typeMovement: "Theo đợt",
        status: "Sử dụng",
      },
      {
        competitionTitle: "Chiến sĩ thi đua toàn quốc",
        codeTitle: "CSTDTQ",
        objectReward: "Cá nhân",
        levelReward: "Cấp nhà nước",
        typeMovement: "Thường xuyên;Theo đợt",
        status: "Ngừng sử dụng",
      },
      {
        competitionTitle: "Chiến sĩ thi đua cấp tỉnh",
        codeTitle: "CSTDCT",
        objectReward: "Tập thể",
        levelReward: "Cấp tỉnh tương đương",
        typeMovement: "Theo đợt",
        status: "Sử dụng",
      },
      {
        competitionTitle: "Lao động tiên tiến",
        codeTitle: "LĐTTCH",
        objectReward: "Cá nhân",
        levelReward: "Cấp huyện tương đương",
        typeMovement: "Thường xuyên",
        status: "Sử dụng",
      },
      {
        competitionTitle: "Chiến sĩ thi đua cấp tỉnh",
        codeTitle: "CSTDCT",
        objectReward: "Tập thể",
        levelReward: "Cấp tỉnh tương đương",
        typeMovement: "Theo đợt",
        status: "Sử dụng",
      },
      {
        competitionTitle: "Chiến sĩ thi đua toàn quốc",
        codeTitle: "CSTDTQ",
        objectReward: "Cá nhân",
        levelReward: "Cấp nhà nước",
        typeMovement: "Thường xuyên;Theo đợt",
        status: "Ngừng sử dụng",
      },
      {
        competitionTitle: "Chiến sĩ thi đua cấp tỉnh",
        codeTitle: "CSTDCT",
        objectReward: "Tập thể",
        levelReward: "Cấp tỉnh tương đương",
        typeMovement: "Theo đợt",
        status: "Sử dụng",
      },
    ];
  },
  mounted() {
    this.changeBackground(), this.scrollTable();
    /* eslint-env jquery */
  },
  methods: {
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
    getData() {
      axios.get();
    },
    logData(item) {
      try {
        this.$emit("valueReward", item);
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