
const errorForm = (form) => {
    let errores = {}
    if(!form.title ) {
        errores.title = "Can’t be empty"
    }
    if(!form.description ) {
        errores.description = "Can’t be empty"
    }
  return {
    errores
  }
}

export default errorForm