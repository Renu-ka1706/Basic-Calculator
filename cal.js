const renu = document.getElementById("display");

    function append(value) {
      renu.value += value;
    }

    function clearDisplay() {
      renu.value = "";
    }

    function deleteLast() {
      renu.value = renu.value.slice(0, -1);
    }

    function calculate() {
      try {
        renu.value = eval(renu.value);
      } catch {
        renu.value = "Error";
      }
    }

    function toggleSign() {
      if (renu.value) {
        if (renu.value.charAt(0) === '-') {
          renu.value = renu.value.slice(1);
        } else {
          renu.value = '-' + renu.value;
        }
      }
    }