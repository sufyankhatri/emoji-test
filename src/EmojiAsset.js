import joypixels from 'emoji-toolkit'

const EmojiAsset = ({emoji} ) => {
  const html = () => {
    const styles = [
      `width: 1.2em`,
      `height: 1.2em`,
      'top: -1px',
      'marginLeft: 10px',
      'position: relative'
    ]
    // const stringa = (joypixels.toImage(emoji))
    //   .split(`<img class="joypixels"`)
    //   .join(`<img class="joypixels" style="${styles.join(';')}"`)

    const output = (joypixels.toImage(emoji)).split(`<img class="joypixels"`)
       .join(`<img class="joypixels" style="${styles}"`)
    return { __html: output }
  }

  return (
    <div>
    <span
      //className="emojiAsset"
      // style={{ display: 'inline-block' }}
      dangerouslySetInnerHTML={html()}
    />
    </div>
  )
}

export default EmojiAsset
