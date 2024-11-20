<template>
    <div class="container-admin-panel">
        <div class="space"></div>
        <div class="content">
            <div class="information flex-cl-bw gap-20">
                <div class="flex-bw-al">
                    <div><img :src="img('logo.svg')" alt="" /></div>
                    <div class="flex-al gap-5">
                        <img :src="img('user.svg')" alt="" />
                        <div class="fw-600">{{ info_agency.name }}</div>
                    </div>
                </div>
                <div class="flex gap-20">
                    <div class="item-information flex-al gap-10" v-for="item in item_information" :key="item.name">
                        <div class="icon flex-al-jt">
                            <img :src="img(item.icon)" alt="" />
                        </div>
                        <div>
                            <div class="text-200 lh-22">{{ item.name }}</div>
                            <div class="text-700 lh-22 mgt-10">{{ item.number }}</div>
                        </div>
                    </div>
                </div>
                <div class="flex-bw-al">
                    <div class="flex manage">
                        <div class="items" :class="{ active: selected_type === 'client' }" @click="selected_type = 'client'">Quản lý khách hàng</div>
                        <div class="items" :class="{ active: selected_type === 'transaction' }" @click="selected_type = 'transaction'">Quản lý giao dịch</div>
                    </div>
                    <template v-if="selected_type === 'client'">
                        <div class="flex-al gap-15">
                            <div class="search flex-al gap-3">
                                <img :src="img('search.svg')" alt="" />
                                <input type="text" v-model="search" placeholder="Tìm kiếm tên email hoặc số điện thoại . . ." />
                            </div>
                            <div style="border-radius: 10px; height: 40px" class="button flex-al gap-3" @click="openAddClient()">
                                <img :src="img('add_client.svg')" alt="" />
                                <div>Thêm khách hàng</div>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
            <div class="table">
                <template v-if="selected_type === 'client'">
                    <div class="header flex-bw-al">
                        <div class="title" style="min-width: 295px">Thông tin khách hàng</div>
                        <div class="title" style="min-width: 290px">Thiết bị</div>
                        <div class="title" style="min-width: 295px">Gói cước</div>
                        <div class="title" style="min-width: 230px">Ký tự lồng tiếng</div>
                        <div class="title" style="min-width: 230px">Số phút phụ đề</div>
                        <div class="title" style="min-width: 295px">Tổng point nạp</div>
                        <div class="title" style="min-width: 95px">HĐ</div>
                    </div>
                    <div class="body">
                        <div class="items flex" v-for="item in data_client" :key="item.id">
                            <div class="titles flex-al gap-10" style="min-width: 295px">
                                <div class="avatar fw-600 flex-al-jt" :style="{ background: getRandomColor(item.email) }">
                                    {{ getFirstLetter(item.email) }}
                                </div>
                                <div>
                                    <div style="width: 180px; height: 20px; margin-bottom: 0" class="title text-long1">
                                        {{ item.email }}
                                    </div>
                                </div>
                            </div>
                            <div class="titles flex-cl-jt" style="min-width: 290px">
                                <div class="flex-al gap-5 title">
                                    <img :src="img('icon_device.svg')" alt="" />
                                    <div v-if="item.name_device">{{ item.name_device }}</div>
                                    <div class="text-300" v-else>-</div>
                                </div>
                                <div class="contents flex-al gap-3">
                                    <div>Kích hoạt:</div>
                                    <div>{{ formatDateTime(item.created_at) }}</div>
                                </div>
                            </div>
                            <div class="titles flex-al gap-10" style="min-width: 295px; padding-inline: 10px">
                                <div>
                                    <img :src="getPackageIcon(item.name_pankage)" alt="" />
                                </div>
                                <div>
                                    <div class="title">{{ item.purchase_term }} tháng</div>
                                    <div class="contents text-long1">
                                        {{ formatExpiryDate(item.expiry_date) }}
                                    </div>
                                </div>
                            </div>
                            <div class="titles flex-cl-jt" style="min-width: 230px">
                                <div class="title">{{ formatnumber(item.number_voice_characters) }} ký tự</div>
                                <div class="contents-blue">
                                    Còn lại
                                    {{ formatnumber(item.number_voice_characters - item.voice_used) }}
                                </div>
                            </div>
                            <div class="titles flex-cl-jt" style="min-width: 230px">
                                <div class="title">{{ formatnumber(item.number_minutes_subtitle) }} phút</div>
                                <div class="contents-blue">
                                    Còn lại
                                    {{ formatnumber(item.number_minutes_subtitle - item.minutes_used) }}
                                </div>
                            </div>
                            <div class="titles flex-cl-jt" style="min-width: 295px; border-right: none">
                                <div class="title">
                                    {{ formatCurrency(item.deposit_amount) }}
                                </div>
                                <div class="contents-red">Số dư: {{ formatCurrency(item.user_balance) }}</div>
                            </div>
                            <div class="titles flex-al" style="min-width: 95px; overflow: visible">
                                <Icon @click="clickpageAccount(item.id, 'select_up_money')" class="edits popup-class" size="24" :src="img('icon_edit.svg')" alt="" />
                                <div class="up-money" @click.stop v-if="select_up_money === item.id">
                                    <div class="items-up flex-al gap-10" @click.stop="upMoneyClient(item)">
                                        <img :src="img('icon_up_money.svg')" alt="" />
                                        <div>Nạp tiền</div>
                                    </div>
                                    <div class="items-up flex-al gap-10" @click.stop="copyPassword(item)">
                                        <img :src="img('copy_pass.svg')" alt="" />
                                        <div>Copy lại mật khẩu</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-observe-visibility="loadMoreVideos" ref="sentinel" class="sentinel"></div>
                    </div>
                </template>
                <template v-else>
                    <div class="note flex-bw-al">
                        <div class="flex-al gap-10" style="height: 100%">
                            <div class="type-money" :class="{ active: type_money === 'out' }" @click="type_money = 'out'">Tiền ra</div>
                            <div class="type-money" :class="{ active: type_money === 'in' }" @click="type_money = 'in'">Tiền vào hệ thống</div>
                        </div>
                        <div class="flex-al ps-rl gap-10" style="padding-bottom: 20px">
                            <div @click="clickpageOpen('filter_type_money')" v-if="type_money === 'out'" class="selects-type popup-class flex-al gap-3">
                                <img :src="img('icon_filter.svg')" alt="" />
                                <div class="text-300">Loại giao dịch:</div>
                                <div>Tất cả</div>
                                <img :src="img('icon_arrow.svg')" alt="" />
                            </div>
                            <div class="select_type_filter" v-if="filter_type_money">
                                <div class="item-filter" @click="filter_money = 'all'">Tất cả</div>
                                <div class="item-filter" @click="filter_money = 'buy'">Mua gói</div>
                                <div class="item-filter" @click="filter_money = 'recharge'">Nạp tiền</div>
                            </div>
                            <div class="selects-type flex-al gap-3">
                                <img :src="img('icon_lich.svg')" alt="" />
                                <div class="text-300">
                                    <input type="text" name="datetimes" class="text-300" />
                                </div>
                                <img :src="img('icon_arrow.svg')" alt="" />
                            </div>
                            <div v-if="type_money === 'out'" style="width: 250px" class="selects-type flex-al gap-3">
                                <img :src="img('search.svg')" alt="" />
                                <input v-model="search_trade_money" type="text" placeholder="Tìm kiếm theo email" />
                            </div>
                        </div>
                    </div>
                    <div class="data">
                        <div class="header-data flex-al">
                            <div v-if="type_money === 'out'" class="titles" style="min-width: 250px; width: 100%">Loại giao dịch</div>
                            <div v-if="type_money === 'out'" class="titles" style="min-width: 250px; width: 100%">Tên khách hàng</div>
                            <div class="titles" style="min-width: 250px; width: 100%">Thời gian</div>
                            <div class="titles" style="min-width: 250px; width: 100%">Số point</div>
                            <div class="titles flex-end" style="min-width: 150px; width: 100%">Trạng thái</div>
                        </div>
                        <div class="body-data">
                            <div class="items flex-al" v-for="(item, index) in data_trade_money" :key="item.id">
                                <div v-if="type_money === 'out'" class="titles ps-rl flex-al gap-5" style="min-width: 250px; width: 100%">
                                    <div v-if="item.buy_package">Mua gói cước cho KH</div>
                                    <div v-else>Nạp tiền cho KH</div>
                                    <div v-if="item.buy_package" class="detail popup-class flex-al-jt" @click="clickpageAccount(index, 'info_detail')">Chi tiết</div>
                                    <div class="info-detail flex-cl-jt gap-20" v-if="selected_index === index">
                                        <div class="flex-cl-jt gap-5">
                                            <div class="fz-16">{{ item.name_package }} {{ item.purchase_term }} tháng</div>
                                            <div class="text-300">
                                                {{ formatExpiryDateMonth(item.created_at, item.purchase_term) }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="type_money === 'out'" class="titles" style="min-width: 250px; width: 100%">
                                    <div class="text-long1" style="width: 200px">
                                        {{ item.email }}
                                    </div>
                                </div>
                                <div class="titles" style="min-width: 250px; width: 100%">
                                    {{ formatDateTime(item.created_at) }}
                                </div>
                                <div class="titles" style="min-width: 250px; width: 100%">
                                    {{ formatnumber(item.amount_money) }}
                                </div>
                                <div class="titles flex-end" style="min-width: 150px; width: 100%">
                                    <div style="color: #00c49f" v-if="item.status === 'success'">Thành công</div>
                                </div>
                            </div>
                            <div v-if="type_money === 'out'" v-observe-visibility="loadMoreTradeMoney" ref="sentinel" class="sentinel"></div>
                            <div v-else v-observe-visibility="loadMoreTradeMoneyIn" ref="sentinel" class="sentinel"></div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
        <AddMoney @successRecharge="successRecharge" ref="addMoney" :select_client_money="select_client_money" />
        <AddClient ref="addClient" @createClient="createClient" />
    </div>
</template>
<route>
    {
    "meta": {
      "needLogin": true,
    }
  }
    </route>
<script>
import AddClient from "../components/add-client.vue"
import AddMoney from "../components/add-money.vue"
export default {
    components: {
        AddClient,
        AddMoney
    },
    data() {
        return {
            filter_money: "all",
            info_agency: {},
            filter_type_money: false,
            selected_index: "",
            type_money: "out",
            search_trade_money: "",
            selected_type: "client",
            user: {},
            isAddClient: true,
            data_client: [],
            select_up_money: "",
            search: "",
            data_trade_money: [],
            dateRange: "",
            pagination_trade_money: {
                current_page: 1,
                per_page: 25,
                total: 0,
                total_pages: 0,
                loading: false
            },
            pagination: {
                current_page: 1,
                per_page: 25,
                total: 0,
                total_pages: 0,
                loading: false
            },
            item_information: [
                {
                    icon: "icon_money.svg",
                    name: "Tổng số tiền vào hệ thống",
                    number: 500000000
                },
                {
                    icon: "icon_balance.svg",
                    name: "Số dư",
                    number: 500000000
                },
                {
                    icon: "icon_balance_client.svg",
                    name: "Tổng số tiền đã nạp cho KH",
                    number: 500000000
                },
                {
                    icon: "icon_all_client.svg",
                    name: "Tổng số khách hàng",
                    number: 1904
                }
            ],
            select_client_money: ""
        }
    },
    created() {
        this.checkInfoAgency()
        this.getInfoClientAgency()
        this.getTradeMoneyAgency()
    },
    watch: {
        search(newVal) {
            setTimeout(() => {
                this.data_client = []
                this.pagination.current_page = 1
                this.getInfoClientAgency()
            }, 700)
        },
        search_trade_money(newVal) {
            setTimeout(() => {
                this.data_trade_money = []
                this.pagination_trade_money.current_page = 1
                this.getTradeMoneyAgency()
            }, 700)
        },
        selected_type(newVal) {
            if (newVal === "transaction") {
                setTimeout(() => {
                    this.openDateRangePicker()
                }, 300)
            }
        },
        filter_money(newVal) {
            this.data_trade_money = []
            this.pagination_trade_money.current_page = 1
            this.getTradeMoneyAgency()
        },
        dateRange(newVal) {
            if (this.type_money === "out") {
                this.data_trade_money = []
                this.pagination_trade_money.current_page = 1
                this.getTradeMoneyAgency()
            } else {
                this.data_trade_money = []
                this.pagination_trade_money.current_page = 1
                this.getTradeMoneyIn()
            }
        },
        type_money(newVal) {
            if (newVal === "in") {
                this.data_trade_money = []
                this.pagination_trade_money.current_page = 1
                this.getTradeMoneyIn()
                this.openDateRangePicker()
            } else {
                this.data_trade_money = []
                this.pagination_trade_money.current_page = 1
                this.getTradeMoneyAgency()
            }
        }
    },
    methods: {
        img(data) {
            return "images/admin-panel/" + data
        },
        async successRecharge() {
            await this.checkInfoAgency()
            this.data_client = []
            this.pagination.current_page = 1
            await this.getInfoClientAgency()
        },
        copyPassword(data) {
            // copy password
            navigator.clipboard.writeText(data.password_one)

            this.showErrorMessage("Đã copy mật khẩu", "success")
            this.select_up_money = ""
        },

        showErrorMessage(message, type) {
            this.$notie({
                type,
                text: message,
                remainingTime: 3000
            })
        },
        upMoneyClient(data) {
            this.select_client_money = data
            this.$refs.addMoney.openAddMoney()
        },
        openDateRangePicker() {
            $('input[name="datetimes"]').daterangepicker(
                {
                    ranges: {
                        "Hôm nay": [moment(), moment()],
                        "Hôm qua": [moment().subtract(1, "days"), moment().subtract(1, "days")],
                        "7 ngày qua": [moment().subtract(6, "days"), moment()],
                        "30 ngày qua": [moment().subtract(29, "days"), moment()],
                        "Tháng này": [moment().startOf("month"), moment().endOf("month")],
                        "Tháng trước": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")]
                    },
                    alwaysShowCalendars: true,
                    startDate: "27/10/2024",
                    endDate: "02/11/2024",
                    locale: {
                        format: "DD/MM/YYYY"
                    }
                },
                (start, end, label) => {
                    this.dateRange = start.format("DD/MM/YYYY") + " - " + end.format("DD/MM/YYYY")
                }
            )
        },

        clickpageAccount(index, type) {
            this[type] = index
            if (this[type] !== "") {
                // Đợi next tick để đảm bảo DOM đã được cập nhật
                this.$nextTick(() => {
                    const closeFunction = event => {
                        // Kiểm tra cả popup-class và info-detail
                        if (!event.target.closest(".popup-class") && !event.target.closest(".info-detail")) {
                            this[type] = ""
                            document.removeEventListener("click", closeFunction)
                        }
                    }

                    // Sử dụng setTimeout để tránh trigger ngay lập tức
                    setTimeout(() => {
                        document.addEventListener("click", closeFunction)
                    }, 0)
                })
            }
        },
        formatDateTime(isoString) {
            if (!isoString) return "-"
            const date = new Date(isoString)

            const hours = String(date.getHours()).padStart(2, "0")
            const minutes = String(date.getMinutes()).padStart(2, "0")
            const day = String(date.getDate()).padStart(2, "0")
            const month = String(date.getMonth() + 1).padStart(2, "0")
            const year = date.getFullYear()

            return `${hours}:${minutes} - ${day}/${month}/${year}`
        },
        clickpageOpen(data) {
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
        formatExpiryDate(expiryDateStr) {
            if (!expiryDateStr) return "-"

            const today = new Date()
            const expiryDate = new Date(expiryDateStr)

            // Tính số ngày còn lại
            const diffTime = expiryDate.getTime() - today.getTime()
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

            // Format ngày hết hạn
            const day = String(expiryDate.getDate()).padStart(2, "0")
            const month = String(expiryDate.getMonth() + 1).padStart(2, "0")
            const year = expiryDate.getFullYear()
            const formattedExpiryDate = `${day}/${month}/${year}`

            // Xử lý các trường hợp
            if (diffDays < 0) {
                return `Đã hết hạn (${formattedExpiryDate})`
            } else if (diffDays === 0) {
                return `Hết hạn hôm nay (${formattedExpiryDate})`
            } else {
                return `Còn ${diffDays} ngày (hết hạn ${formattedExpiryDate})`
            }
        },
        formatExpiryDateMonth(createdAt, purchaseTerm) {
            if (!createdAt || !purchaseTerm) return "-"

            // Get current date
            const today = new Date()

            // Convert created_at to Date object
            const startDate = new Date(createdAt)

            // Add months to created_at based on purchase_term
            const expiryDate = new Date(startDate)
            expiryDate.setMonth(expiryDate.getMonth() + purchaseTerm)

            // Calculate remaining days
            const diffTime = expiryDate.getTime() - today.getTime()
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

            // Format expiry date
            const day = String(expiryDate.getDate()).padStart(2, "0")
            const month = String(expiryDate.getMonth() + 1).padStart(2, "0")
            const year = expiryDate.getFullYear()
            const formattedDate = `${day}/${month}/${year}`

            // Handle different cases
            if (diffDays < 0) {
                return `Đã hết hạn (${formattedDate})`
            } else if (diffDays === 0) {
                return `Hết hạn hôm nay (${formattedDate})`
            } else {
                return `Còn ${diffDays} ngày (hết hạn ${formattedDate})`
            }
        },
        createClient() {
            this.checkInfoAgency()
            this.getInfoClientAgency()

            window.location.reload()
        },
        openAddClient() {
            this.$refs.addClient.openAddClient()
        },
        getPackageIcon(packageName) {
            const iconMap = {
                Normal: "icon_plus.svg",
                Advance: "icon_Pro.svg",
                Pro: "icon_Advance.svg"
            }

            return this.img(iconMap[packageName] || "default_icon.svg")
        },

        async getTradeMoneyIn() {
            if (this.pagination_trade_money.loading) return // Prevent multiple requests
            this.pagination_trade_money.loading = true
            let res = await this.api({
                path: "/web/agency/get-trade-money-in",
                method: "GET",
                params: {
                    date_range: this.dateRange,
                    page: this.pagination_trade_money.current_page,
                    limit: this.pagination_trade_money.per_page
                }
            })

            if (res.success) {
                // Append new data to existing array
                this.data_trade_money = [...this.data_trade_money, ...res.data]
                // Update pagination info
                this.pagination_trade_money.total = res.pagination.total
                this.pagination_trade_money.total_pages = res.pagination.total_pages
                this.pagination_trade_money.loading = false
            }
        },
        loadMoreTradeMoneyIn(isVisible) {
            if (isVisible && !this.pagination_trade_money.loading) {
                if (this.pagination_trade_money.current_page < this.pagination_trade_money.total_pages) {
                    this.pagination_trade_money.current_page += 1
                    this.getTradeMoneyIn()
                }
            }
        },
        loadMoreTradeMoney(isVisible) {
            if (isVisible && !this.pagination_trade_money.loading) {
                // Check if we haven't reached the last page
                if (this.pagination_trade_money.current_page < this.pagination_trade_money.total_pages) {
                    this.pagination_trade_money.current_page += 1
                    this.getTradeMoneyAgency()
                }
            }
        },
        async getTradeMoneyAgency() {
            if (this.pagination_trade_money.loading) return // Prevent multiple requests
            this.pagination_trade_money.loading = true
            let res = await this.api({
                path: "/web/agency/get-trade-money-out",
                method: "GET",
                params: {
                    filter: this.filter_money,
                    date_range: this.dateRange,
                    email: this.search_trade_money,
                    page: this.pagination_trade_money.current_page,
                    limit: this.pagination_trade_money.per_page
                }
            })

            if (res.success) {
                // Append new data to existing array
                this.data_trade_money = [...this.data_trade_money, ...res.data]
                // Update pagination info
                this.pagination_trade_money.total = res.pagination.total
                this.pagination_trade_money.total_pages = res.pagination.total_pages
                this.pagination_trade_money.loading = false
            }
        },
        async getInfoClientAgency() {
            if (this.pagination.loading) return // Prevent multiple requests
            this.pagination.loading = true
            let res = await this.api({
                path: "/web/agency/get-info-client-agency",
                method: "GET",
                params: {
                    email: this.search,
                    page: this.pagination.current_page,
                    limit: this.pagination.per_page
                }
            })

            if (res.success) {
                // Append new data to existing array
                this.data_client = [...this.data_client, ...res.data]
                // Update pagination info
                this.pagination.total = res.pagination.total
                this.pagination.total_pages = res.pagination.total_pages
                this.pagination.loading = false
            }
        },
        async checkInfoAgency() {
            let res = await this.api({
                path: "/web/agency/get-info-agency",
                method: "GET"
            })
            if (res.success) {
                this.info_agency = res.data
                // Cập nhật item_information với dữ liệu từ API
                this.item_information = [
                    {
                        icon: "icon_money.svg",
                        name: "Tổng số point vào hệ thống",
                        number: this.formatCurrency(res.data.total_amount_deposited)
                    },
                    {
                        icon: "icon_balance.svg",
                        name: "Số dư",
                        number: this.formatCurrency(res.data.balance)
                    },
                    {
                        icon: "icon_balance_client.svg",
                        name: "Tổng số point đã nạp cho KH",
                        number: this.formatCurrency(res.data.total_amount_client)
                    },
                    {
                        icon: "icon_all_client.svg",
                        name: "Tổng số khách hàng",
                        number: res.data.number_of_clients
                    }
                ]
            }
        },
        loadMoreVideos(isVisible) {
            if (isVisible && !this.pagination.loading) {
                // Check if we haven't reached the last page
                if (this.pagination.current_page < this.pagination.total_pages) {
                    this.pagination.current_page += 1
                    this.getInfoClientAgency()
                }
            }
        },
        getRandomColor(email) {
            let hash = 0
            for (let i = 0; i < email.length; i++) {
                hash = email.charCodeAt(i) + ((hash << 5) - hash)
            }
            const colors = [
                // Màu ấm
                "#FF6B6B",
                "#FF8C94",
                "#FFB5A7",
                "#FFA07A",
                "#FF7F50",
                "#FF6347",
                "#E67E22",
                "#FF4500",
                "#FF8C00",
                "#FFA500",
                "#FFD700",

                // Màu lạnh
                "#4ECDC4",
                "#45B7D1",
                "#00CED1",
                "#20B2AA",
                "#48D1CC",
                "#40E0D0",
                "#00BCD4",
                "#5F9EA0",
                "#4682B4",
                "#6495ED",

                // Màu tím và hồng
                "#9B59B6",
                "#8E44AD",
                "#BA55D3",
                "#DA70D6",
                "#DDA0DD",
                "#EE82EE",
                "#FF69B4",
                "#FFB6C1",
                "#DB7093",

                // Màu xanh lá
                "#96CEB4",
                "#27AE60",
                "#2ECC71",
                "#32CD32",
                "#90EE90",
                "#98FB98",
                "#00FA9A",
                "#00FF7F",
                "#3CB371",

                // Màu trung tính
                "#D4A5A5",
                "#E6B0AA",
                "#D7BDE2",
                "#A9CCE3",
                "#A3E4D7",
                "#A2D9CE",
                "#A9DFBF",
                "#F9E79F",
                "#F5CBA7",

                // Màu đậm
                "#2C3E50",
                "#34495E",
                "#16A085",
                "#27AE60",
                "#2980B9",
                "#8E44AD",
                "#2C3E50",
                "#D35400",
                "#C0392B"
            ]
            return colors[Math.abs(hash) % colors.length]
        },

        getFirstLetter(email) {
            return email ? email.charAt(0).toUpperCase() : "?"
        },
        formatnumber(amount) {
            return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        formatCurrency(amount) {
            return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " Point"
        }
    }
}
</script>

<style lang="scss" scoped>
.container-admin-panel {
    max-width: 1820px;
    font-size: 14px;
    padding-inline: 45px;
    height: 100vh;
    margin: 0 auto;
    .space {
        height: 100px;
    }
    .content {
        padding-block: 25px;
        width: 100%;
        height: calc(100vh - 110px);
    }
    .information {
        height: 260px;
        width: 100%;
        .manage {
            width: 380px;
            height: 40px;
            border-radius: 10px;
            background: #151724;
            overflow: hidden;
            .items {
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100%;
                width: 100%;
                padding: 9px 18px;
                font-size: 14px;
                color: #a0aec0;
                transition: all 0.3s ease;
                &.active {
                    color: #fff;
                    border-radius: 10px;
                    background: rgba(255, 255, 255, 0.1);
                }
            }
        }
        .search {
            border-radius: 10px;
            background: rgba(255, 255, 255, 0.03);
            padding: 9px 10px;
            width: 320px;
            input {
                width: 100%;
                padding-inline: 10px;
                color: #fff;
                border-radius: 0px;
                height: 100%;
                background: transparent;
                border: none;
                outline: none;
            }
        }
        .item-information {
            padding: 20px 30px;
            width: 100%;
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            background: rgba(255, 255, 255, 0.03);
            .icon {
                width: 62px;
                height: 62px;
                border-radius: 16px;
                background: var(--vang-tuoi, linear-gradient(264deg, #f0ba2e 15.92%, #f0a22e 95.62%));
            }
        }
    }
    .table {
        height: calc(100% - 250px);
        width: 100%;
        overflow-y: auto;
        margin-top: 10px;
        .header {
            min-width: 1730px;
            width: 100%;
            font-size: 14px;
            height: 40px;
            border-radius: 10px;
            border: 1px solid rgba(240, 162, 46, 0.1);
            background: rgba(255, 183, 15, 0.04);
            .title {
                padding-inline: 28px;
                background: var(--vang-tuoi, linear-gradient(264deg, #f0ba2e 15.92%, #f0a22e 95.62%));
                font-weight: 500;

                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        }
        .body {
            min-width: 1730px;
            width: 100%;
            margin-top: 10px;
            height: calc(100% - 50px);
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.15);
            overflow: auto;
            .items {
                min-width: 1730px;
                width: 100%;
                height: 85px;

                .titles {
                    border-right: 1px solid rgba(255, 255, 255, 0.1);
                    height: 100%;
                    padding-inline: 28px;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    overflow: hidden;
                    position: relative;
                    .up-money {
                        width: 205px;
                        position: absolute;
                        top: 11px;
                        right: 68px;
                        border-radius: 10px;
                        border: 1px solid rgba(255, 255, 255, 0.16);
                        background: #292f35;
                        box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
                        z-index: 10;
                        padding: 10px;
                        .items-up {
                            display: flex;
                            align-items: center;
                            // justify-content: center;
                            padding: 10px 15px;
                            cursor: pointer;
                            border-radius: 10px;
                            &:hover {
                                background: #191c28;
                            }
                        }
                    }
                    .edits {
                        cursor: pointer;

                        &:hover {
                            color: var(--vang-tuoi-hover);
                        }
                    }
                    .avatar {
                        width: 36px;
                        height: 36px;
                        border-radius: 50%;
                    }
                    .title {
                        font-size: 16px;
                        font-weight: 600;
                        line-height: 14px;
                        margin-bottom: 8px;
                    }
                    .contents {
                        height: 16px;
                        font-size: 14px;
                        color: #a0aec0;
                        line-height: 14px;
                    }
                    .contents-blue {
                        color: #6bfd80;
                        font-size: 14px;
                        line-height: 20px;
                    }
                    .contents-red {
                        font-size: 14px;
                        line-height: 20px;
                        background: linear-gradient(90deg, #ee5c01 0%, #ff9046 85.33%);
                        background-clip: text;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }
                }
            }
        }
        .note {
            position: sticky;
            top: 0;
            left: 0;
            height: 60px;
            background: #080b18;
            z-index: 12;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            .type-money {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 150px;
                height: 100%;
                transition: all 0.3s ease;
                cursor: pointer;
                border-bottom: 1px solid transparent;
                &.active {
                    color: var(--vang-tuoi-hover);
                    border-bottom: 1px solid var(--vang-tuoi-hover);
                }
            }
            .select_type_filter {
                position: absolute;
                top: 46px;
                left: 0;
                width: 150px;
                height: 160px;
                border-radius: 10px;
                background: #292f35;
                padding: 10px;
                .item-filter {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    height: 40px;
                    border-radius: 10px;
                    cursor: pointer;
                    margin-bottom: 10px;
                    &:hover {
                        background: #191c28;
                    }
                }
            }
            .selects-type {
                cursor: pointer;
                padding-inline: 12px;
                height: 42px;
                border-radius: 10px;
                background: #191c28;
                input {
                    color: #fff;
                    width: 100%;
                    height: 100%;
                    background: transparent;
                    border: none;
                    outline: none;
                }
            }
        }
        .data {
            margin-top: 20px;
            .header-data {
                color: #718096;
                height: 40px;
                border-radius: 10px;
                background: rgba(255, 255, 255, 0.03);
                .titles {
                    padding-inline: 28px;
                }
            }
            .body-data {
                height: calc(100% - 60px);
                .items {
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    height: 60px;
                    .titles {
                        padding-inline: 28px;
                        .detail {
                            color: #f0ba2e;
                            cursor: pointer;
                            padding: 3px 5px;
                            border-radius: 40px;
                            font-size: 10px;
                            border: 1px solid #f0ba2e;
                        }
                        .info-detail {
                            z-index: 10;
                            position: absolute;
                            top: 22px;
                            right: -13px;
                            border-radius: 12px;
                            background: #292f35;
                            padding: 20px;
                        }
                    }
                }
            }
        }
    }
}
</style>
