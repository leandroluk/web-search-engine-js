(function () {
  delete document.querySelector('script[name="axios"]')
  var script = document.createElement('script');
  script.name = 'axios'
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.0/axios.js'
  script.onload = function () {
    var results = [...document.querySelectorAll('.srg .g')].map(div => {
      const a = div.querySelector('.r a')
      return {
        url: a.href,
        title: a.querySelector('h3').innerText,
        description: div.querySelector('.s .st').innerText,
      }
    })
    axios.post('http://localhost/@/push', {
      query: document.querySelector('input[name="q"]').value,
      results
    })
  }
  document.body.append(script)
})()