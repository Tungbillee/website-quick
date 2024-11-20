import { v4 as uuidv4 } from "uuid"

export default {
    install(app) {
        app.config.globalProperties.$notie = function (options) {
            const defaults = {
                id: uuidv4(),
                closing: true,
                pause: false,
                startTime: Date.now(),
                title: options.type,
                icon: `${options.type}.svg`
            }

            const finalOptions = { ...defaults, ...options }
            return window.myToast.createToast(finalOptions)
        }
    }
}
