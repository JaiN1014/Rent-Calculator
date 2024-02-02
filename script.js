document.getElementById("value").addEventListener("input", function() {
    this.value = this.value.slice(0, 2) + '/Unit';
  });