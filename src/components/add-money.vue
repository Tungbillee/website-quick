<template>
    <div class="container-add-money flex-al-jt" v-if="isAddMoney" @click.stop="isAddMoney = false">
        <div @click.stop class="add-moneys animate__animated animate__zoomIn">
            <div class="flex-al gap-5">
                <img :src="img('add-money.svg')" alt="" />
                <div class="title fz-18 fw-600">Nạp tiền vào tài khoản:</div>
            </div>
            <div class="number-money mgt-10">
                <input type="number" v-model="money" placeholder="Nhập số tiền" />
            </div>
            <div @click="closeAddMoney" class="button mgt-30 flex-al-jt">Nạp ngay</div>
            <div class="error">{{ error }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        select_client_money: {
            type: Object,
            default: {}
        }
    },
    data() {
        return {
            isAddMoney: false,
            money: 0,
            error: ""
        }
    },
    methods: {
        img(data) {
            return "images/admin-panel/" + data
        },
        openAddMoney() {
            this.isAddMoney = true
        },
        async closeAddMoney() {
            let res = await this.api({
                path: "/web/agency/recharge-user",
                method: "POST",
                data: {
                    email: this.select_client_money.email,
                    amount: this.money
                }
            })

            if (res.success) {
                this.$emit("successRecharge")
                this.isAddMoney = false
            } else {
                this.error = res.message
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.container-add-money {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
    z-index: 13;
    .add-moneys {
        width: 580px;
        padding: 30px 40px;
        border-radius: 20px;
        background: #1b2127;
    }
    .number-money {
        height: 50px;
        input {
            width: 100%;
            height: 100%;
            border: none;
            color: #fff;
            outline: none;
            background: transparent;
            padding: 0 10px;
            font-size: 30px;
        }
    }
    .error {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 10px;
        color: red;
        font-size: 14px;
    }
}
</style>
