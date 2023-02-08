function validatForm(event) {
  'use strict';
  event.preventDefault();
  const forms = document.getElementById('create-page');
  if (!forms.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
    forms.classList.add('was-validated');
    return false;
  }

  return submitForm();
}

function submitForm() {
  const nameField = document.getElementById('name');
  const nameFieldValue = nameField.value;
  // const nameValue = nameFiled.value;
  console.log(nameFieldValue);
  axios.post('/pages/', { name: nameFieldValue })
    .then((response) => { 
      if(response.status===200){
        alert(`Page ${nameFieldValue} created successfully`);
        window.location.href = '/';
      }else{
        alert(`Somthing went wrong!`)
      }
    })
    .catch((err) => {
      alert('Failed: Page not created');
      console.log(err);
    });
  clearForm();
  return true;
}

function clearForm() {
  /**
   * Get name field and reset it's value
   */
  const nameField = document.getElementById('name');
  nameField.value = '';
  /**
   * Remove was-validated class from Form
   */
  const forms = document.getElementById('create-page');
  forms.classList.remove('was-validated');
}
