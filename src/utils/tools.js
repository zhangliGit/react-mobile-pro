import { object } from "prop-types";

/**
 * @description 全局的功能函数
 */

const Tools = {
  // 日期转化
  gmtToDate (t) {
    let d = new Date(t)
    return d.getFullYear() + '-' + ((d.getMonth() + 1) > 9 ? d.getMonth() + 1 : '0' + (d.getMonth() + 1)) + '-' + (d.getDate() > 9 ? d.getDate() : '0' + d.getDate()) + ' ' +
      (d.getHours() > 9 ? d.getHours() : '0' + d.getHours()) + ':' + (d.getMinutes() > 9 ? d.getMinutes() : '0' +
        d.getMinutes()) +
        ':' + (d.getSeconds() > 9 ? d.getSeconds() : '0' + d.getSeconds())
  },
  // 延迟处理方法
  goNext: (fn) => {
    setTimeout(() => {
      fn()
    }, 1200)
  },
  // 最近6个月
  lastSixMonth (num = 6) {
    var monthArr = []
    var date = new Date()
    var year = date.getFullYear()
    var month = date.getMonth() + 2
    if (month > num) {
      for (var i = month - 1; i >= month - num; i--) {
        monthArr.push(year + '-' + (i > 9 ? i : '0' + i))
      }
    } else {
      var lastY = year - 1
      var cMonth = month - 1
      var lastM = num - (month - 1)
      for (let i = cMonth; i > 0; i--) {
        monthArr.push(year + '-' + (i > 9 ? i : '0' + i))
      }
      for (let i = 12; i > 12 - lastM; i--) {
        monthArr.push(lastY + '-' + (i > 9 ? i : '0' + i))
      }
    }
    return monthArr
  },
  // 数组去重
  uniqueArr (oldArr, id) {
    let allArr = []
    for (var i = 0; i < oldArr.length; i++) {
      let tag = allArr.some(item: any => {
        return item[id] === oldArr[i][id]
      })
      if (!tag) {
        allArr.push(oldArr[i])
      }
    }
    return allArr
  }
}

export default Tools
