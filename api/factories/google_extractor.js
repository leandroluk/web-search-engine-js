(function () {
  setTimeout(function () {

    delete document.querySelector('script[name="axios"]')

    const script = document.createElement('script')
    script.name = 'axios'
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.0/axios.js'

    script.onload = function () {

      const results = [].concat(document.querySelectorAll('.srg .g')).map(function (div) {
        const a = div.querySelector('.r a')
        return {
          url: a.href,
          title: a.querySelector('h3').innerText,
          description: div.querySelector('.s .st').innerText,
        }
      })

      const query = document.querySelector('input[name="q"]').value
      const url = new URL(location.href)
      const start = url
        .search
        .substr(1)
        .split('&')
        .map(function (keyVal) {
          return keyVal.split('=')
        })
        .reduce(function (a, b) {
          const obj = {}
          obj[b[0]] = [b[1]]
          return Object.assign(a, obj)
        }, {}).start || 0

      axios
        .post('http://localhost/@/push', { query, start, results })
        .then(function (res) {
          location.href = `${url.origin}${url.pathname}?q=${query}&start=${res.data.start}`
        })
        .catch(function (err) => {
          alert("deu pau!")
          console.error(err)
        })
    }

    document.body.append(script)
  }, (1000))
})()