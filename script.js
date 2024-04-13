document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form')

  form.addEventListener('submit', function (event) {
    event.preventDefault()

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const phone = document.getElementById('phone').value

    const formData = {
      name: name,
      email: email,
      phone: phone
    }

    const jsonData = JSON.stringify(formData)

    console.log('Dados enviados: ', jsonData)
    alert(
      `Dados capturados\nNome: ${formData.name}\nE-mail: ${formData.email}\nTelefone: ${formData.phone}`
    )

    form.reset()
  })
})
