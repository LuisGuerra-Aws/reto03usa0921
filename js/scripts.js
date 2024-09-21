        function agregarItem(seccion) {
            var input = document.getElementById('nueva-' + seccion);
            var lista = document.getElementById('lista-' + seccion);
            var nuevoItem = document.createElement('li');
            nuevoItem.textContent = input.value;
            lista.appendChild(nuevoItem);
            input.value = '';
            toggleForm(seccion);
        }