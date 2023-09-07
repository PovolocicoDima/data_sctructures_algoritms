let omniBool = {
  value: true,
  valueOf: () => {
    this.value = !this.value;
    return this.value;
  },
};

if (omniBool == true && omniBool == false) {
  console.log("Выражение истинно!");
} else {
  console.log("Выражение ложно.");
}
