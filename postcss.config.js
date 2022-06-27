module.exports = {
    plugins: {
        "postcss-pxtorem": {
            "rootValue": 37.5,
            "propList": ["*"], //需要做转化处理的属性，如`width`'height'*代表全部
            selectorBlackList: ['.norem']//过滤掉.norem-开头的class，不进行rem转换
        }
    }
}