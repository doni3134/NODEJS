const express = require('express')
var cors = require('cors')

const app = express()
//cors 오류 해결하기 위한 모듈 설치 ()안에 조건설정가능
app.use(cors())

app.get('/', function (req, res) {
  res.send('Hello World')
})
// app.get('/user/:id', function (req, res) {
//     // const q = req.params
//     // console.log(q.id)
//     // res.json({'userid':q.id})

//     const q = req.query
//     console.log(q.q)
//     console.log(q.name)
//     res.json({'userid': q.name})


// })
app.get('/sound/:name', function (req, res) {
    const { name } = req.params
    
    if(name == "dog"){
        res.json({'sound':'멍멍'})
    } else if (name == "cat") {
        res.json({'sound':'야옹'})
    } else if (name == "pig") {
        res.json({'sound' : '꿀꿀'})
    } else {
        res.json({'sound':'알수없음'})
    }
})






app.listen(3000)


// ctrl+c 를 해줘야 서버를 끄고 재시작. 