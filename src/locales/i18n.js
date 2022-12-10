import {createI18n} from "vue-i18n";
const i18n = createI18n({
    locale:"en",
    messages:{
        en:{
            signUp:"Sign Up",
            userName:"User Name"
        },
        tr:{
            signUp:"Đăng ký",
            userName:"Họ và tên "
        }
    }
});
export default i18n;
