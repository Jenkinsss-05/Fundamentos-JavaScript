  document.addEventListener('DOMContentLoaded', function () {
    const dataForm = document.getElementById('data-form');
    const dataInput = document.getElementById('data-input');
    const dataSelect = document.getElementById('data-select');
    const selectedData = document.getElementById('selected-data');

    let dataList = [];

    function addData(event) {
            event.preventDefault();
            const newData = dataInput.value.trim();
            if (newData !== '') {
        dataList.push(newData);
        updateSelect();
        dataInput.value = '';
      }
    }

    function updateSelect() {
        dataSelect.innerHTML = '';
        dataList.forEach(function (data, index) {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = data;
        dataSelect.appendChild(option);
      });
    }

    function showSelectedData() {
      const selectedIndex = parseInt(dataSelect.value);
      if (!isNaN(selectedIndex) && selectedIndex >= 0 && selectedIndex < dataList.length) {
        const selectedDatum = dataList[selectedIndex];
        selectedData.textContent = `Dato seleccionado: ${selectedDatum}`;
      } else {
        selectedData.textContent = '';
      }
    }

    dataForm.addEventListener('submit', addData);
    dataSelect.addEventListener('change', showSelectedData);
  });
