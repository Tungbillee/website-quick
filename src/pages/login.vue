<template>
    <div class="container-login flex-al-jt">
        <div class="login-form flex-cl-al gap-50">
            <div><img :src="img('logo.svg')" alt="" /></div>
            <div class="form">
                <div class="fz-20 mgbt-20 fw-700">Đăng nhập.</div>
                <form v-on:keyup.enter="onLogin">
                    <div class="wrap flex-al" :class="{ active: email_login }">
                        <Icon :src="img('people.svg')" alt="" />
                        <input class="flex-al ip-pass" style="height: 20px" type="text" v-model="email_login" placeholder="Điền email đăng nhập..." />
                    </div>
                    <div class="wrap flex-bw-al gap-5" :class="{ active: password_login }">
                        <div class="flex align" style="width: 100%">
                            <Icon size="20" :src="img('password.svg')" alt="" />

                            <input style="height: 20px" v-model="password_login" class="ip-pass flex-al" :type="showPassword ? 'text' : 'password'" placeholder="Mật khẩu..." />
                        </div>
                        <img style="cursor: pointer" v-if="password_login && !showPassword" :src="img('eye.svg')" alt="" @click="showpass" />
                        <img style="cursor: pointer" v-if="password_login && showPassword" :src="img('eye_hiden.svg')" alt="" @click="showpass" />
                    </div>
                    <div style="color: red" v-if="email_login || password_login" class="error mgt-15">
                        {{ error_login }}
                    </div>
                    <div class="mgt-30 flex-bw-al">
                        <div class="flex-al gap-5">
                            <input type="checkbox" name="" id="" v-model="miss_password" />
                            <div>Nhớ mật khẩu</div>
                        </div>
                        <div class="forgot" @click="forgotPassword">Quên mật khẩu?</div>
                    </div>
                    <div class="mgt-30 button flex-al-jt" @click="onLogin">Đăng nhập</div>
                </form>
                <div class="mgt-15 flex-al-jt gap-5">
                    Chưa có tài khoản?
                    <span style="cursor: pointer" class="text-gradien" @click="register"> Liên hệ đại lý đăng ký</span>
                </div>
            </div>
        </div>
    </div>
</template>
<route>
    {
        "meta": {
            "needLogin": false
        }
    }
    </route>
<script>
export default {
    data() {
        return {
            email_login: "",
            password_login: "",
            showPassword: false,
            error_login: "",
            miss_password: false
        }
    },
    watch: {
        miss_password(e) {
            if (e) {
                if (this.email_login) {
                    localStorage.setItem("email_login", this.email_login)
                }
                if (this.password_login) {
                    localStorage.setItem("password_login", this.password_login)
                }
            } else {
                localStorage.removeItem("email_login")
                localStorage.removeItem("password_login")
            }
        }
    },
    created() {
        if (localStorage.getItem("email_login")) {
            this.email_login = localStorage.getItem("email_login")
        }
        if (localStorage.getItem("password_login")) {
            this.password_login = localStorage.getItem("password_login")
        }
    },
    methods: {
        img(data) {
            return "images/login/" + data
        },
        async onLogin() {
            let res = await this.api({
                path: "/auth/signin",
                method: "POST",
                data: {
                    email: this.email_login,
                    password: this.password_login,
                    from: "web"
                }
            })
            if (res.success) {
                localStorage.setItem("accessToken", res.accessToken)
                this.$router.push("/")
                window.location.reload()
            } else {
                this.error_login = res.message
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.container-login {
    height: 100vh;
    width: 100vw;
    background-image: url("/images/login/bk_login.png");
    background-size: cover;
    background-position: center;
    .form {
        padding: 35px 40px;
        width: 512.615px;
        height: 410px;
        border-radius: 20px;
        border: 0.5px solid rgba(255, 255, 255, 0.2);
        background: rgba(255, 255, 255, 0.04);
        .wrap {
            margin-top: 10px;
            padding: 15px 14px;
            border-radius: 12px;
            background: rgba(255, 255, 255, 0.06);
            color: #87888e;
            border: 0.5px solid rgba(255, 255, 255, 0.06);

            &.active {
                border: 0.5px solid #f0ba2e;
                color: #f0ba2e;
            }

            .ip-pass {
                color: #fff;
                height: 100%;
                width: 100%;
                border: none;
                background: none;
                padding-inline: 8px;
            }
            .ip-pass:focus {
                border-color: var(--P500, #4a44dd);
                outline: none;
            }
        }
    }
}
</style>
