function tagerize(text) {

  const
    nnoum = [
      `o`, `os`, `a`, `as`, `um`, `uns`, `uma`, `umas`, `a`, `ao`, `aos`, `à`,
      `às`, `de`, `do`, `dos`, `da`, `das`, `dum`, `duns`, `duma`, `dumas`, `em`,
      `no`, `nos`, `na`, `nas`, `num`, `nuns`, `numa`, `numas`, `por`, `per`,
      `pelo`, `pelos`, `pela`, `pelas`, `e`, `com`, '·'
    ]

  const words = text
    // reduce all to lower
    .toLowerCase()
    // remove last three dots
    .replace('...', '')
    // remove predicated characters non word chars
    .replace(/[\(\)-\\\[\]\{\}\'\"\;\:\<\>\?\!\@\#\$\%\ˆ\&\*\=\+]/g, '')
    // normalize
    .normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    // split all words
    .split(' ')
    // trim last dots words
    .map(word => word.trim().replace(/\.$/, ''))

  // return
  return words
    // sort words to fast filter
    .sort()
    // filter based on sort if last word isn`t equal
    .filter((v, i, o) => v !== o[i - 1])
    // remove invalid words
    .filter(word => !!word && !nnoum.includes(word))
}

module.exports = {
  tagerize
}