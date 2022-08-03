const rot13 = str => {
  str = str.toUpperCase()
  return str.replace(/[A-Z]/g, inRot13)

  function inRot13(l) {
    const code = l.charCodeAt()
    return String.fromCharCode(
      ((code+13) <= 90) ? code+13
        : (code + 13) % 90 + 64
    )
  }
}

console.log(rot13("SERR PBQR PNZC"))