// Modal
//=============================================================================
function showDialog() {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
  
    const sleepDate = document.getElementById('sleep-date').value;
    const sleepTime = document.getElementById('sleep-time').value;
    const wakeTime = document.getElementById('wake-time').value;

    localStorage.setItem('sleepDate', sleepDate);
    localStorage.setItem('sleepTime', sleepTime);
    localStorage.setItem('wakeTime', wakeTime);

    const sleepTimeObj = new Date(`1970-01-01T${sleepTime}:00`);
    const wakeTimeObj = new Date(`1970-01-01T${wakeTime}:00`);

    let totalSleepHours = (wakeTimeObj - sleepTimeObj) / (1000 * 60 * 60);

    if (totalSleepHours < 0) {
      totalSleepHours += 24;
    }

    document.getElementById('modal-sleep-date').innerText = `Sleep Date: ${sleepDate}`;
    document.getElementById('modal-sleep-time').innerText = `Sleep Time: ${sleepTime}`;
    document.getElementById('modal-wake-time').innerText = `Wake-up Time: ${wakeTime}`;
    document.getElementById('modal-total-sleep').innerText = `Total Sleep Hours: ${totalSleepHours.toFixed(2)} Hrs.`;

    document.getElementById('myModal').style.display = 'block';

    modal.style.display = "flex";
    modal.classList.add("fadein");
  }
  
  function hideDialog() {
    console.log("test hide");
    var modal = document.getElementById("myModal");
    modal.classList.remove("fadein");
    modal.classList.add("fadeout");
    setTimeout(function () {
      modal.style.display = "none";
      modal.classList.remove("fadeout");
    }, 400);
  }
  
  function redirectToPage(page, data) {
    const params = new URLSearchParams(data);
    window.location.href = `${page}?${params.toString()}`;
  }
  
  
// Record table
//=============================================================================
document.addEventListener('DOMContentLoaded', () => {
  const rowsPerPage = 7;
  const data = [
      // Dummy data
      { id: 1, date: '2024-09-01', sleepTime: '22:00', wakeTime: '06:00', totalHours: 8 },
      { id: 2, date: '2024-09-02', sleepTime: '23:00', wakeTime: '07:00', totalHours: 9 },
      { id: 3, date: '2024-10-07', sleepTime: '21:00', wakeTime: '08:00', totalHours: 10},
      { id: 4, date: '2024-09-02', sleepTime: '20:00', wakeTime: '09:00', totalHours: 11},
      { id: 5, date: '2024-09-02', sleepTime: '19:00', wakeTime: '10:00', totalHours: 6 },
      { id: 6, date: '2024-09-02', sleepTime: '18:00', wakeTime: '11:00', totalHours: 5 },
      { id: 7, date: '2024-09-02', sleepTime: '17:00', wakeTime: '12:00', totalHours: 8 },
      { id: 8, date: '2024-09-02', sleepTime: '15:00', wakeTime: '07:00', totalHours: 1 },
      { id: 9, date: '2024-11-14', sleepTime: '14:00', wakeTime: '13:00', totalHours: 8 },
      { id: 10, date: '2024-11-02', sleepTime: '13:00', wakeTime: '14:00', totalHours: 6 },
      { id: 11, date: '2024-09-02', sleepTime: '10:00', wakeTime: '15:00', totalHours: 3 },
      { id: 12, date: '2024-09-02', sleepTime: '09:00', wakeTime: '16:00', totalHours: 2 },
      { id: 13, date: '2024-09-02', sleepTime: '08:00', wakeTime: '17:00', totalHours: 4 },
  ];
  
  let currentPage = 1;

  function displayTable(page) {
      const tableBody = document.querySelector('#timer tbody');
      tableBody.innerHTML = '';
      
      const startIndex = (page - 1) * rowsPerPage;
      const endIndex = Math.min(startIndex + rowsPerPage, data.length);
      
      for (let i = startIndex; i < endIndex; i++) {
          const row = data[i];
          const rowData = encodeURIComponent(JSON.stringify(row));
          const tr = document.createElement('tr');
          tr.innerHTML = `
              <td>${row.date}</td>
              <td>${row.sleepTime}</td>
              <td>${row.wakeTime}</td>
              <td>${row.totalHours}</td>
              <td>
                <a href="./addSleep.html?data=${rowData}"><button 
                  class="btn-edit action"
                  data-index="${i}">
                  <i class="fas fa-edit"></i>
                </button></a>
                <button class="btn-delete action" data-index="${i}"><i class="fas fa-trash-alt"></i></button>
              </td>
          `;
          tableBody.appendChild(tr);
      }

      document.querySelectorAll('.btn-delete').forEach(button => {
        button.addEventListener('click', (event) => {
            const index = event.currentTarget.getAttribute('data-index');
            if (confirm("Are you sure you want to delete this sleeping record?")) {
              deleteRow(index);
            }
            
        });
      });
  }

  function deleteRow(index) {
    data.splice(index, 1);
    displayTable(currentPage);
  }

  function setupPagination() {
      const pagination = document.querySelector('#pagination');
      const pageCount = Math.ceil(data.length / rowsPerPage);
      
      pagination.innerHTML = '';
      
      for (let i = 1; i <= pageCount; i++) {
          const a = document.createElement('a');
          a.href = '#';
          a.textContent = i;
          a.className = i === currentPage ? 'active' : '';
          a.addEventListener('click', (e) => {
              e.preventDefault();
              currentPage = i;
              displayTable(currentPage);
              setupPagination();
          });
          pagination.appendChild(a);
      }
  }

  displayTable(currentPage);
  setupPagination();
});