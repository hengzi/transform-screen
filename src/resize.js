const MODE_LIST = [
  {
    value: 'scaleToFill',
    text: '不保持纵横比缩放容器，使容器的宽高完全拉伸至填满'
  },
  {
    value: 'aspectFit',
    text:
      '保持纵横比缩放容器，使容器的长边能完全显示出来。也就是说，可以完整地将容器显示出来。'
  },
  {
    value: 'aspectFill',
    text: '保持纵横比缩放容器，只保证容器的短边能完全显示出来。'
  },
  {
    value: 'widthFix',
    text: '宽度不变，高度自动变化，保持原图宽高比不变	'
  },
  {
    value: 'heightFix',
    text: '高度不变，宽度自动变化，保持原图宽高比不变	'
  }
]

function transformScreen(
  element,
  width = '1920',
  height = '1080',
  mode = 'aspectFit'
) {
  const parentEl = element.parentElement
  const offsetWidth = parentEl.offsetWidth
  const offsetHeight = parentEl.offsetHeight
  let top = 0
  let left = 0
  let scaleX = offsetWidth / width
  let scaleY = offsetHeight / height
  if (mode === 'scaleToFill') {
    // 默认，拉伸
  } else {
    // 等比缩放
    let scale = 1
    if (mode === 'aspectFit') {
      scale = Math.min(scaleX, scaleY)
    } else if (mode === 'aspectFill') {
      scale = Math.max(scaleX, scaleY)
    } else if (mode === 'widthFix') {
      scale = scaleX
    } else if (mode === 'heightFix') {
      scale = scaleY
    }
    scaleX = scale
    scaleY = scale
    top = (offsetHeight - height * scale) / 2
    left = (offsetWidth - width * scale) / 2
  }

  const transition = 'transform 0.2s'
  const transformOrigin = 'left top'
  const transform = `translate(${left}px, ${top}px) scale(${scaleX}, ${scaleY})`
  element.style.width = `${width}px`
  element.style.height = `${height}px`
  element.style.MozTransition = transition
  element.style.webkitTransition = transition
  element.style.transition = transition
  element.style.MozTransformOrigin = transformOrigin
  element.style.webkitTransformOrigin = transformOrigin
  element.style.transformOrigin = transformOrigin
  element.style.MozTransform = transform
  element.style.webkitTransform = transform
  element.style.transform = transform
}

export { MODE_LIST, transformScreen }
