function textSizeAdjust(dir) {
  const art = document.querySelectorAll('.article p');
  console.log(`.article: ${art}`);
  let style = window.getComputedStyle(art[0], null).getPropertyValue('font-size');
  console.log(`style: ${style}`);
  let currFontSize = parseInt(style);
  currFontSize += parseInt(dir);
  if(currFontSize <= 11) currFontSize = 11;
  if(currFontSize > 30) currFontSize = 30;
  // console.log(`${parseInt(dir)}`);
  // console.log(`${parseInt(currFontSize) + parseInt(dir)}rem`);
  art.forEach(el => {
    el.style.fontSize = `${currFontSize + parseInt(dir)}px`;
  })
}