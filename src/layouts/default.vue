<template>
    <div class="dashboard">
        <div class="header">
            <div class="menu flex-bw-al">
                <div class="logo" @click="toHome">
                    <img :src="img('logo.svg')" alt="" />
                </div>
                <div class="options flex-al gap-80">
                    <div class="options-text" @click="scrollToSection">Tính năng</div>
                    <div class="options-text" @click="helper">Hỗ trợ</div>
                    <div class="options-text" @click="goToBuyPackage">Bảng giá</div>
                    <div class="options-text" @click="goToListAgency">Liên hệ</div>
                </div>

                <div class="flex-al gap-10 ps-rl">
                    <div class="settings-profile popup-class flex-al gap-3" v-if="isLogin" @click="clickpageAccount('is_open_settings')">
                        <img :src="img('icon_avatar.svg')" alt="" />
                        <div style="width: 80px" class="text-long1">
                            {{ is_profile?.email }}
                        </div>
                        <img :src="img('icon_arrow_down.svg')" alt="" />
                    </div>
                    <div class="select-options popup-animations-top flex-cl" v-if="isLogin && is_open_settings">
                        <div class="item-option" v-if="is_profile?.is_agency" @click="openAmin">Admin Panel</div>
                        <div class="item-option" @click="settingsOption">Quản lý tài khoản</div>
                        <div class="item-option" @click="logout">Đăng xuất</div>
                    </div>

                    <div v-if="!isLogin" class="button" @click="login">Đăng nhập</div>
                    <div v-else class="button">Tải xuống</div>
                </div>
            </div>
        </div>
        <div class="body" ref="features">
            <router-view />
        </div>
        <div class="info flex-cl-al mgt-150" v-if="!isAdminPanel">
            <div class="img_download">
                <div class="flex-bw-al gap-6 w-100">
                    <img :src="img('logo_info.svg')" alt="" />
                    <div class="flex gap-20">
                        <div v-for="(item, index) in icon_info" :key="index">
                            <img :src="img(item.icon)" alt="" />
                        </div>
                    </div>
                </div>
                <div class="mgt-70 flex gap-256">
                    <div class="flex-cl gap-25">
                        <div>Tính năng</div>
                        <div class="color_rg fz-15">Text to Speech</div>
                        <div class="color_rg fz-15">Speech to Text</div>
                        <div class="color_rg fz-15">Video Mixer</div>
                        <div class="color_rg fz-15">Ghép & Nối video</div>
                        <div class="color_rg fz-15">Download videos</div>
                    </div>

                    <div class="flex-cl gap-25">
                        <div>Chính sách</div>
                        <div class="color_rg fz-15">Điều khoản dịch vụ</div>
                        <div class="color_rg fz-15">Chính sách affiliate</div>
                    </div>
                    <div class="flex-cl gap-25">
                        <div>Tài nguyên</div>
                        <div class="color_rg fz-15">Cộng đồng</div>
                        <div class="color_rg fz-15">Blogs</div>
                    </div>
                    <div class="flex-cl gap-25">
                        <div>Liên hệ</div>
                    </div>
                </div>
                <div class="dmca"></div>
            </div>
        </div>
    </div>
</template>

<script>
import Axios from "axios"
import { useEmailStore, useUserStore } from "../store"

export default {
    data() {
        return {
            is_open_settings: false,
            isAdminPanel: true,
            icon_info: [
                {
                    icon: "icon_lk.svg",
                    title: "linkedin"
                },
                {
                    icon: "icon_youtube.svg",
                    title: "youtube"
                },
                {
                    icon: "icon_facebook.svg",
                    title: "facebook"
                },
                {
                    icon: "icon_tiktok.svg",
                    title: "tiktok"
                }
            ],
            system: ""
        }
    },
    mounted() {
        this.detectSystem()
    },
    computed: {
        isLogin() {
            return useUserStore().isLogin
        },
        is_profile() {
            return useUserStore().user
        },
        isAdminPanel() {
            // /admin-panel hoặc /settings
            return this.$route.path === "/admin-panel" || this.$route.path === "/settings"
        }
    },
    methods: {
        login() {
            this.$router.push("/login")
        },
        goToBuyPackage() {
            // reload lại page
            this.$router.push("/buy-pankage")
        },
        settingsOption() {
            this.$router.push("/settings")
        },
        logout() {
            localStorage.removeItem("accessToken")
            this.$router.push("/home")
            window.location.reload()
        },
        clickpageAccount(data) {
            this[data] = !this[data]
            if (this[data]) {
                const closeFunction = event => {
                    if (!event.target.closest(".popup-class")) {
                        this[data] = false
                        window.removeEventListener("click", closeFunction)
                    }
                }
                window.addEventListener("click", closeFunction)
            }
        },
        openAmin() {
            this.$router.push("/admin-panel")
        },
        downloadWindow() {
            window.open("https://download.quickmagic.vn/Quick%20Magic%20Setup%201.2.3.zip", "_blank")
        },
        downloadMacos() {
            window.open("https://download.quickmagic.vn/Quick%20Magic%20Setup%201.2.3.zip", "_blank")
        },
        img(data) {
            return "images/default/" + data
        },
        goToListAgency() {
            this.$router.push("/list-agency")
        },
        helper() {
            this.$router.push("/helper")
        },
        detectSystem() {
            const userAgent = window.navigator.userAgent.toLowerCase()
            if (userAgent.indexOf("windows nt") !== -1) {
                this.system = "windows"
            } else if (userAgent.indexOf("mac os x") !== -1) {
                this.system = "macos"
            } else {
                this.system = "other"
            }
        },
        scrollToSection() {
            const currentPath = this.$route.path

            if (currentPath === "/home") {
                const element = document.getElementById("target-section")

                if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                }
            } else {
                this.$router.push({ path: "/home", hash: "#target-section" })
            }
        },
        toHome() {
            this.$router.push({ path: "/home" })
        }
    }
}
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
    width: 6px;
    height: 2px;
    border-radius: 18px;
}
.dashboard {
    width: 100vw;
    overflow-x: hidden;
    overflow-y: auto;
    background: #080b18;
}
.body {
    height: 60%;
}
.header {
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    .menu {
        z-index: 100;
        margin-top: 135px;
        padding: 15px 15px 15px 20px;
        position: fixed;
        max-width: 1227px;
        width: 100%;
        height: 69px;
        border-radius: 61px;
        border: 0.5px solid rgba(255, 255, 255, 0.2);
        background: rgba(255, 255, 255, 0.01);
        backdrop-filter: blur(47px);
        .settings-profile {
            cursor: pointer;
            &:hover {
                opacity: 0.8;
            }
        }
        .select-options {
            position: absolute;
            top: 40px;
            border: 0.5px solid rgba(255, 255, 255, 0.25);
            border-radius: 10px;
            left: 0;
            padding: 10px;
            background: #080b18;
            .item-option {
                display: flex;
                align-items: center;
                // justify-content: center;
                padding: 10px;
                cursor: pointer;
                border: 1px solid transparent;
                &:hover {
                    border-radius: 5px;
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    background: rgba(255, 255, 255, 0.05);
                }
            }
        }
        .options {
            &-text {
                cursor: pointer;
                transition: transform 0.3s ease-in-out;
                &:hover {
                    transform: scale(1.1); // Phóng to lên 10%
                }
            }
        }
        .logo {
            cursor: pointer;
        }
    }
}
.info {
    height: 20%;
    background: #080b18;

    .dmca {
        height: 200px;
        margin-top: 40px;
        border-top: 1px solid rgba(255, 255, 255, 0.14);
    }
}
</style>
