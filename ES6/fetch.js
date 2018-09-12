fetch('https://www.baidu.com/search/error.html')
    .then((res) => {
            return res.text()
        }
    )
    .then((res) => {
        console.log(res)
    })