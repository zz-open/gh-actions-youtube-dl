const fs = require('fs')
module.exports = ({github, context}) => {
    const data = fs.readFileSync('output.sh', 'utf8')
    const body = "请查看downloads目录,验证是否下载成功"
    return body
}