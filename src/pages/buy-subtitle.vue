<template>
    <div class="container-buy-more">
        <template v-if="is_buy">
            <div class="spaces"></div>
            <div class="table-buy-more">
                <div class="section-buy-more">
                    <div class="flex-al gap-3" @click="goToManage">
                        <img :src="img('icon_back.svg')" alt="" />
                        <div class="fw-600">Quay lại</div>
                    </div>
                    <div class="text-green mgt-50 fw-600">MUA THÊM THỜI LƯỢNG TÁCH PHỤ ĐỀ</div>
                    <div class="select-number-minutes">
                        <div>Số phút bạn muốn mua thêm là:</div>
                        <div class="flex-bw-al mgt-10">
                            <input type="number" class="text-300" v-model="minutes_buy" placeholder="Nhập số phút..." />
                            <div>Phút</div>
                        </div>
                    </div>
                    <div class="options-buy-more">
                        <div class="notie-buy flex-al gap-10">
                            <img :src="img('icon_deal.svg')" alt="" />
                            <div class="fw-600">HOT DEAL - Mua càng nhiều, giảm càng sâu</div>
                        </div>
                        <div class="items-buy" v-for="(item, index) in buyingOptions" :key="index">
                            <div>{{ item.minutes }}</div>
                            <div class="flex-al gap-10">
                                <div :class="['discount', item.discountClass]">{{ item.discountText }}</div>
                                <div>{{ item.priceText }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="billing-buy-more">
                    <div class="body-billing-buy-more flex-cl gap-40">
                        <div class="flex-bw-al">
                            <div class="text-300">Loại mua</div>
                            <div class="fw-600">Mua phút phụ đề</div>
                        </div>
                        <div class="flex-bw-al">
                            <div class="text-300">Thời hạn mua</div>
                            <div class="fw-600">Sẽ hết hạn khi gói cước hết hạn</div>
                        </div>
                        <div class="flex-bw-al">
                            <div class="text-300">Chi tiết</div>
                            <div class="fw-600">{{ minutes_buy || 0 }} phút</div>
                        </div>
                        <div class="flex-bw-al">
                            <div class="text-300">Tổng giá</div>
                            <div class="fw-600">{{ formatPrice(totalPrice) }} Point</div>
                        </div>
                    </div>
                    <div class="footer-billing-buy-more">
                        <div class="flex-bw-al">
                            <div class="text-300">Số point cần thanh toán</div>
                            <div class="fw-600">{{ formatPrice(totalPrice) }} Point</div>
                        </div>
                        <div class="info-balace flex-bw-al">
                            <div class="flex-al gap-5">
                                <img :src="img('icon_card_buy_more.svg')" alt="" />
                                <div class="fw-600">Số dư tài khoản</div>
                            </div>
                            <div class="flex-al gap-5">
                                <div class="fw-600">{{ formatPrice(user?.balance ?? 0) }}</div>
                                <div class="flex-al gap-3">
                                    <img :src="img('icon_point.svg')" alt="" />
                                    <div class="text-yellow fw-600">Point</div>
                                </div>
                            </div>
                        </div>
                        <div class="button mgt-20 flex-al-jt" style="border-radius: 10px; height: 45px" @click="payMentSubtitle">
                            <loading v-if="is_loading" />
                            <div v-else>Thanh toán ngay</div>
                        </div>
                        <div class="flex-al-jt text-red mgt-15">{{ error_message }}</div>
                    </div>
                </div>
            </div>
        </template>
        <template v-else>
            <div class="flex-al-jt" style="width: 100%; height: 100%">
                <div class="flex-cl-jt">
                    <img style="padding-left: 20px" :src="img('buy_success.svg')" alt="" />
                    <div style="text-align: center" class="fw-600 fz-24 mgt-10">Thanh toán thành công</div>
                    <div class="fz-16 mgt-10">Đến trang quản lý xem chi tiết giao dịch</div>
                    <div class="button mgt-30 flex-al-jt" @click="goToManage">Đến trang quản lý</div>
                </div>
            </div>
        </template>
    </div>
</template>
<route>
    {
    "meta": {
      "needLogin": true
    }
  }
    </route>
<script>
import loading from "../components/loading_curso.vue"
export default {
    components: {
        loading
    },
    data() {
        return {
            user: {},
            is_buy: true,
            is_loading: false,
            error_message: "",
            minutes_buy: "",

            buyingOptions: [
                {
                    minutes: "> 500 phút",
                    discountText: "Không có giảm giá",
                    discountClass: "",
                    priceText: "700đ/phút"
                },
                {
                    minutes: "> 5000 phút",
                    discountText: "Giảm 20%",
                    discountClass: "text-red",
                    priceText: "500đ/phút"
                },
                {
                    minutes: "> 20.000 phút",
                    discountText: "Giảm 30%",
                    discountClass: "text-green",
                    priceText: "400đ/phút"
                },
                {
                    minutes: "> 100.000 phút",
                    discountText: "Giảm 50%",
                    discountClass: "text-yellows",
                    priceText: "350đ/phút"
                }
            ]
        }
    },
    created() {
        this.getUser()
    },
    computed: {
        totalPrice() {
            const minutes = Number(this.minutes_buy)
            if (!minutes) return 0

            if (minutes > 100000) {
                return minutes * 350 // > 10000 phút: 200đ/phút (giảm 60%)
            } else if (minutes > 20000) {
                return minutes * 400 // >= 6000 phút: 350đ/phút (giảm 30%)
            } else if (minutes > 5000) {
                return minutes * 500 // >= 1000 phút: 400đ/phút (giảm 20%)
            } else {
                return minutes * 700 // <= 200 phút: 500đ/phút (không giảm)
            }
        }
    },
    methods: {
        img(data) {
            return "images/admin-panel/" + data
        },
        goToManage() {
            this.$router.push("/settings")
        },
        async payMentSubtitle() {
            this.is_loading = true
            let res = await this.api({
                path: "/web/user/buy-subtitle",
                method: "POST",
                data: { number_minutes_subtitle: this.minutes_buy }
            })

            if (res.success) {
                this.is_buy = false
            } else {
                this.error_message = res.message
            }
            this.is_loading = false
        },
        async getUser(retryCount = 3) {
            try {
                let res = await this.api({
                    path: "/web/user/get-info"
                })

                if (res.success) {
                    this.user = res.data_user
                } else {
                    throw new Error("API request failed")
                }
            } catch (error) {
                console.error("Error fetching user info:", error)
                if (retryCount > 0) {
                    console.log(`Retrying... ${retryCount} attempts left`)
                    // Đợi 1 giây trước khi thử lại
                    await new Promise(resolve => setTimeout(resolve, 1000))
                    return this.getUser(retryCount - 1)
                }
                // Xử lý khi đã hết số lần thử lại
                console.error("Max retry attempts reached")
            }
        },
        formatPrice(price) {
            return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        handleBuyMore() {
            this.is_loading = true
        }
    }
}
</script>

<style lang="scss" scoped>
.container-buy-more {
    max-width: 1218px;
    font-size: 14px;
    height: 100vh;
    margin: 0 auto;
    .spaces {
        height: 150px;
    }
    .table-buy-more {
        height: calc(100% - 150px);
        display: flex;
        gap: 120px;
        .section-buy-more {
            width: calc(100% - 599px);
            max-height: 633px;

            .select-number-minutes {
                margin-top: 20px;
                padding: 18px 20px;
                border-radius: 12px;
                border: 1px solid #f0ba2e;
                input {
                    height: 100%;
                    border-radius: 0;
                    width: 100%;
                    border: none;
                    outline: none;
                    background: transparent;
                }
            }
            .options-buy-more {
                margin-top: 60px;
                border-radius: 20px;
                background: rgba(255, 255, 255, 0.03);
                padding: 30px 20px;
                .notie-buy {
                    border-radius: 40px;
                    border: 1px solid #ff5e5e;
                    background: rgba(255, 94, 94, 0.08);
                    padding: 7px 10px;
                }
                .items-buy {
                    margin-top: 15px;
                    padding: 10px 20px;
                    border-radius: 12px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .discount {
                        border-radius: 30px;
                        border: 0px solid #f22020;
                        background: rgba(255, 255, 255, 0.1);
                        padding: 3px 7px;
                    }
                }
            }
        }
        .billing-buy-more {
            width: 599px;
            max-height: 633px;
            border-radius: 12px;
            background: rgba(255, 255, 255, 0.03);
            padding: 55px;
            .body-billing-buy-more {
                width: 100%;
                height: calc(100% - 180px);
            }
            .footer-billing-buy-more {
                padding-top: 25px;
                width: 100%;
                border-top: 1px dashed rgba(255, 255, 255, 0.2);
                height: 180px;
                .info-balace {
                    margin-top: 35px;
                    padding: 10px 15px;
                    border-radius: 9px;
                    border: 1px solid #c7ffcf;
                    background: rgba(106, 239, 125, 0.05);
                }
            }
        }
    }
}
</style>
