let display = document.getElementById('display');
        
        
        function Angka(number) {
          display.value += number;
        }
        function Operator(operator) {
          display.value += operator;
        }
        function Kuadrat(y) {
          display.value += y + '(';
        }

        
        function clearDisplay() {
          display.value = '';
        }
        function Hasil() {
          try {
            display.value = eval(display.value);
          } catch (error) {
            display.value = 'Error';
          }
        }
        function backspace() {
          display.value = display.value.slice(0, -1);
        }
        function showButtons() {
          var sqrt = document.getElementById('sqrt');
          var cbrt = document.getElementById('cbrt');
          var kt = document.getElementById('kurungb');
          var kb = document.getElementById('kurungt');
          var button = document.getElementById('show');
          if (sqrt.style.display === "none" && button.innerHTML === "▼") {
            button.innerHTML = "▲";
            sqrt.style.display = "inline-block";
            cbrt.style.display = "inline-block";
            kb.style.display = "inline-block";
            kt.style.display = "inline-block";
          } else {
            sqrt.style.display = "none";
            cbrt.style.display = "none";
            kb.style.display = "none";
            kt.style.display = "none";
            button.innerHTML = "▼";
          }
        }