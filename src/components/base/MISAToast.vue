<template>
    <div class="toastMsg">
        <div class="wrapToast">
            <div class="wrapToast--icon"></div>
           
            <div class="wrapToast--msg"> <span>{{this.valueToast.success}}</span></div>
        </div>
      
    </div>
</template>
<script>
export default{
  props:{
    valueToast:{}
  },
  component:{
  },
  mounted(){
    this.toastMsg=this.valueToast.success;
    $(".toastMsg").show().delay(3000).fadeOut(1000);
    this.generateToastIcon("success");
    /*eslint-env jquery */
  },
  data() {
    return {
      toastMsg:"",
      toastState:"",
      C_INFO: 'var(--toast-info)',
    C_WARNING: 'var(--toast-warning)',
    C_ERROR: 'var(--toast-error)',
    C_SUCCESS: 'var(--toast-success)',

    }
  },
  methods: {
    /**
     * Author:VxHieu
     * 8/12/2022
     */
    //Xoá danh hiệu thi đua
    //Lấy icon thông báo của toast msg
    generateToastIcon(type) {
        let toastIcon=$(".wrapToast--icon");
        switch(type) {
            case 'success':
                toastIcon.append("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path fill=\"none\" d=\"M0 0h24v24H0z\"/><path d=\"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z\" fill=\"" + "var(--toast-success)" + "\"/></svg>");
                break;
            case 'error':
                toastIcon.append( "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path fill=\"none\" d=\"M0 0h24v24H0z\"/><path d=\"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z\" fill=\"" + this.C_ERROR + "\"/></svg>");
                break;
            case 'warning':
                toastIcon.append("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path fill=\"none\" d=\"M0 0h24v24H0z\"/><path d=\"M12.866 3l9.526 16.5a1 1 0 0 1-.866 1.5H2.474a1 1 0 0 1-.866-1.5L11.134 3a1 1 0 0 1 1.732 0zm-8.66 16h15.588L12 5.5 4.206 19zM11 16h2v2h-2v-2zm0-7h2v5h-2V9z\" fill=\"" + this.C_WARNING + "\"/></svg>");
                break;
            case 'info':
                toastIcon.append("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path fill=\"none\" d=\"M0 0h24v24H0z\"/><path d=\"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z\" fill=\"" + this.C_INFO + "\"/></svg>");
                break;
        }

        return toastIcon;
    }
  },
}
</script>
<style scoped>
@import "../../css/layout/toast.css";
</style>
