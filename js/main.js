const doc = document;

const userForm = doc.forms.userForm;
const fields = userForm.fields.elements;
const fieldsArr = Array.from(fields);
const fieldName = userForm.name;
const fieldAge = userForm.age;

userForm.onsubmit = function (e) {
  e.preventDefault();

  let allFields = true;

  for (let item of fields) {
    const parent = item.parentElement
    const value = item.value;
    const name = item.name;

    if (!value) {
      console.log(`field [${name}] is not valid`);
      item.style.background = 'pink'
      allFields = false;
    }
    if (parent.classList.contains('label-age') ||
      parent.classList.contains('label-name')) {
      console.log(`field [${name}] is not valid`)
      allFields = false;
    }
  }

  if (allFields) {
    console.log('все поля заполнены')
  }
}

fieldName.oninput = function () {
  const parent = this.parentElement;

  if (this.value.length <= 5) {
    this.style.background = 'pink';
    parent.classList.add('label-name')
  } else {
    this.style.background = 'lightgreen'
    parent.classList.remove('label-name')
    parent.classList.add('label-name_good')
  }
}

fieldAge.oninput = function () {
  const parent = this.parentElement;

  if (this.value.length < 2 || this.value < 18 || isNaN(this.value)) {
    this.style.background = 'pink'
    parent.classList.add('label-age');
  } else {
    this.style.background = 'lightgreen';
    parent.classList.remove('label-age');
    parent.classList.add('label-age_good');
  }
}
