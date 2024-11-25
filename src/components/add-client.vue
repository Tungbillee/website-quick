<template>
    <div class="add-client flex-al-jt" v-if="isAddClient" @click="isAddClient = false">
        <div @click.stop class="ctn-add animate__animated animate__zoomIn">
            <div class="flex-cl gap-20 info">
                <div class="flex-al gap-5">
                    <img :src="img('icon_addclient.svg')" alt="" />
                    <div class="title">Tạo khách hàng</div>
                </div>
                <div>
                    <div>Nhập email khách hàng</div>
                    <div class="ip flex-al gap-5">
                        <img :src="img('icon_email.svg')" alt="" />
                        <div class="text-300">|</div>
                        <input v-model="email" type="text" placeholder="Nhập email khách hàng" />
                    </div>
                </div>
                <div class="mgt-15">
                    <div>Mật khẩu</div>
                    <div class="ip flex-bw-al gap-5">
                        <div class="flex-al gap-5">
                            <img :src="img('icon_password.svg')" alt="" />
                            <div class="text-300">|</div>
                            <div>{{ password }}</div>
                        </div>
                        <div class="flex-al gap-3 refresh" @click="generatePassword">
                            <img :src="img('icon_retry.svg')" alt="" />
                            <div>Tạo lại</div>
                        </div>
                    </div>
                </div>
                <div class="selects">
                    <div class="mgt-15">
                        <div>Thời hạn gói cước</div>
                        <div class="gap-10 mgt-10">
                            <div :class="{ active: selectCalendar === item.name }" class="item-select flex-bw-al" v-for="item in calendar" :key="item.name" @click="selectCalendar = item.name">
                                <div class="flex-al gap-10">
                                    <Icon size="24" :src="img('icon_calendar.svg')" alt="" />
                                    <div>
                                        <div class="fw-600">{{ item.name }}</div>
                                        <div v-if="item.title !== 'Không giảm giá'" class="mgt-5 fw-400 fz-12 discounts" :style="{ background: item.class }">{{ item.title }}</div>
                                        <div v-else class="mgt-5 fw-400 fz-12 text-300 discounts" style="padding: 0">Không giảm giá</div>
                                    </div>
                                </div>
                                <div>
                                    <div>{{ formattedAmountstart(item.name) }} Point</div>
                                    <div class="mgt-5 fw-400 text-300">
                                        {{ item.name === "6 tháng" ? (getAmountByPeriod(item.name) / 6).toLocaleString("vi-VN") + "/tháng" : item.name === "12 tháng" ? (getAmountByPeriod(item.name) / 12).toLocaleString("vi-VN") + "/tháng" : "" }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="creates">
                <div class="flex-bw-al">
                    <div class="text-green">Tổng giá trị khách hàng:</div>
                    <div class="text-green fw-600">{{ formattedAmount }} Point</div>
                </div>
                <div class="mgt-20 button flex-al-jt" @click="createClient">Tạo ngay</div>
                <div class="mgt-15 flex-al-jt error">{{ error }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { useUserStore, priceStore, useBuyPackageStore } from "../store"

export default {
    data() {
        return {
            error: "",
            password: "",
            isAddClient: false,
            email: "",
            calendar: [
                {
                    name: "1 tuần",
                    title: "Không giảm giá"
                },
                {
                    name: "3 tháng",
                    title: "Giảm 40%",
                    class: "red"
                },
                {
                    name: "6 tháng",
                    title: "Giảm 50%",
                    class: "red"
                }
            ],
            packages: [
                {
                    name: "Normal",
                    icon: "icon_plus.svg"
                },

                {
                    name: "Advance",
                    icon: "icon_Advance.svg"
                },
                {
                    name: "Pro",
                    icon: "icon_Pro.svg"
                }
            ],
            selectPackage: "Normal",
            selectCalendar: ""
        }
    },
    created() {
        this.generatePassword()
    },
    computed: {
        totalAmount() {
            const prices = priceStore().price
            const packageMap = {
                "1 tuần": "7 days",
                "3 tháng": "3 month",
                "6 tháng": "6 month"
            }

            const selectedPeriod = packageMap[this.selectCalendar]
            const priceData = prices.find(p => p.period === selectedPeriod)

            return priceData ? priceData.price : 0
        },
        formattedAmount() {
            return new Intl.NumberFormat("vi-VN", {
                maximumFractionDigits: 0,
                useGrouping: true // giữ lại dấu phân cách hàng nghìn
            }).format(this.totalAmount)
        }
    },
    methods: {
        openAddClient() {
            this.isAddClient = true
        },
        getAmountByPeriod(period) {
            const prices = priceStore().price
            const packageMap = {
                "1 tuần": "7 days",
                "3 tháng": "3 month",
                "6 tháng": "6 month"
            }

            const mappedPeriod = packageMap[period]
            const priceData = prices.find(p => p.period === mappedPeriod)
            return priceData ? priceData.price : 0
        },
        formattedAmountstart(period) {
            const amount = this.getAmountByPeriod(period)
            return new Intl.NumberFormat("vi-VN", {
                maximumFractionDigits: 0,
                useGrouping: true // giữ lại dấu phân cách hàng nghìn
            }).format(amount)
        },
        img(data) {
            return "images/admin-panel/" + data
        },

        async createClient() {
            if (!this.email || !this.password) {
                this.error = "Vui lòng nhập đẩy đủ thông tin"
                return
            }
            if (this.selectCalendar === "") {
                this.error = "Vui lòng chọn thời hạn gói cước"
                return
            }
            let calendar
            let packages
            if (this.selectCalendar === "1 tuần") {
                calendar = "7 days"
                packages = "Normal"
            } else if (this.selectCalendar === "3 tháng") {
                calendar = "3 month"
                packages = "Advance"
            } else {
                calendar = "6 month"
                packages = "Pro"
            }
            let res = await this.api({
                path: "/web/agency/register",
                method: "POST",
                data: {
                    email: this.email,
                    password: this.password,
                    package: packages,
                    calendar: calendar
                }
            })
            if (res.success) {
                this.isAddClient = false
                this.$emit("createClient")
            } else {
                this.error = res.message
            }
        },
        generatePassword() {
            const length = 12 // độ dài mật khẩu
            const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
            let result = ""

            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * charset.length)
                result += charset[randomIndex]
            }

            this.password = result
        }
    }
}
</script>

<style lang="scss" scoped>
.add-client {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
    .ctn-add {
        border-radius: 16px;
        background: #1b2127;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        width: 559px;
        height: 699px;
        padding-block: 30px;
        .creates {
            padding: 20px 30px;
            height: 120px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        .info {
            padding-inline: 30px;
            height: calc(100% - 120px);
            .ip {
                margin-top: 10px;
                height: 40px;
                border-radius: 10px;
                border: 1px solid rgba(255, 255, 255, 0.1);
                background: rgba(255, 255, 255, 0.02);
                padding-inline: 13px;
                input {
                    color: #fff;
                    width: 100%;
                    height: 100%;
                    background: transparent;
                    border: none;
                    outline: none;
                }
            }
            .refresh {
                color: var(--vang-tuoi-hover);
                cursor: pointer;
                &:hover {
                    opacity: 0.8;
                }
            }
            .selects {
                padding-block: 25px;
                border-top: 1px dashed rgba(255, 255, 255, 0.1);
                margin-top: 10px;
                .item-select {
                    margin-top: 10px;
                    cursor: pointer;
                    padding: 9px 10px;
                    width: 100%;
                    border-radius: 12px;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    font-weight: 700;
                    &:hover {
                        background: rgba(255, 255, 255, 0.05);
                    }
                    &.active {
                        color: #f0ba2e;
                        border: 1px solid #f0ba2e;
                        background: rgba(255, 183, 15, 0.07);
                    }

                    .discounts {
                        border-radius: 10px;
                        padding: 2px 6px;
                    }
                }
            }
        }
    }
}
.error {
    color: #ff0000;
}
</style>
