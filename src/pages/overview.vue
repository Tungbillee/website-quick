<template>
    <div class="overview">
        <div class="flex-cl-jt" style="height: 100%">
            <div class="flex" style="height: 100%; padding-inline: 350px; padding-top: 160px">
                <div class="question flex-cl gap-20">
                    <div v-for="(item, index) in questions" :key="index" @click="toggleAnswer(index)" class="question-item">
                        {{ item.question }}
                    </div>
                </div>
                <div class="answer">
                    <template v-for="(item, index) in questions" :key="'answer-' + index">
                        <component v-if="item.show" :is="item.component"></component>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>
<route>
  {
      "meta": {
          "both": true
      }
  }
  </route>
<script>
import overView from "../components/overview_quick.vue"
import start from "../components/start_quick.vue"
import feature from "../components/feature.vue"
import policy from "../components/poricy.vue"
export default {
    components: {
        overView,
        start,
        feature,
        policy
    },
    data() {
        return {
            questions: [
                {
                    question: "Tổng quan về Quick Magic",
                    component: "overView",
                    show: true
                },
                {
                    question: "Bắt đầu với Quick Magic",
                    component: "start",
                    show: false
                },
                {
                    question: "Các tính năng chính Quick Magic",
                    component: "feature",
                    show: false
                },
                {
                    question: "Chính sách bảo mật",
                    component: "policy",
                    show: false
                }
            ]
        }
    },
    methods: {
        toggleAnswer(index) {
            this.questions = this.questions.map((item, i) => {
                if (i === index) {
                    item.show = true
                } else {
                    item.show = false
                }
                return item
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.overview {
    height: 100vh;
}
.question {
    width: 30%;
    height: 100%;
    position: sticky;
    top: 0;
    &-item {
        cursor: pointer;
    }
}
.answer {
    padding-right: 25px;
    width: 70%;
    overflow: auto;
    height: 100%;
}
::-webkit-scrollbar {
    width: 6px;
    height: 2px;
    border-radius: 18px;
}
</style>
