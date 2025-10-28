const initialTasks = [
    
    {
        "id": 1,
        "nama": "Cek Rutin Steering Gear Hydraulic Check",
        "kode": "SG-HYD-03",
        "status": "Belum Selesai",
        "kategori": "Bulanan",
        "frekuensi": "Dilakukan Bulanan"
    },
    {
        "id": 2,
        "nama": "Cek Rutin Compressor Air Filter",
        "kode": "COM-AF-07",
        "status": "Sedang Dikerjakan",
        "kategori": "Bulanan",
        "frekuensi": "Dilakukan Bulanan"
    },
    {
        "id": 3,
        "nama": "Cek Rutin Separator Oil Discharge Valve",
        "kode": "SEP-ODV-09",
        "status": "Selesai",
        "kategori": "Bulanan",
        "frekuensi": "Dilakukan Bulanan"
    },
    {
        "id": 4,
        "nama": "Cek Rutin Fire Pump Sea Suction Valve",
        "kode": "FP-SSV-10",
        "status": "Belum Selesai",
        "kategori": "Bulanan",
        "frekuensi": "Dilakukan Bulanan"
    },
    {
        "id": 5,
        "nama": "Cek Rutin Windlass Brake Inspection",
        "kode": "WIND-BI-02",
        "status": "Belum Selesai",
        "kategori": "Harian",
        "frekuensi": "Dilakukan Harian"
    },
    {
        "id": 6,
        "nama": "Cek Rutin Steering Gear Hydraulic Check",
        "kode": "SG-HYD-03",
        "status": "Sedang Dikerjakan",
        "kategori": "Bulanan",
        "frekuensi": "Dilakukan Bulanan"
    },
    {
        "id": 7,
        "nama": "Cek Rutin Fire Pump Sea Suction Valve",
        "kode": "FP-SSV-10",
        "status": "Sedang Dikerjakan",
        "kategori": "Harian",
        "frekuensi": "Dilakukan Harian"
    },
    {
        "id": 8,
        "nama": "Cek Rutin Auxiliary Engine 1 Cooling Pump",
        "kode": "AE1-CP-05",
        "status": "Belum Selesai",
        "kategori": "Bulanan",
        "frekuensi": "Dilakukan Bulanan"
    },
    {
        "id": 9,
        "nama": "Cek Rutin Fire Pump Sea Suction Valve",
        "kode": "FP-SSV-10",
        "status": "Selesai",
        "kategori": "Mingguan",
        "frekuensi": "Dilakukan Mingguan"
    },
    {
        "id": 10,
        "nama": "Cek Rutin Windlass Brake Inspection",
        "kode": "WIND-BI-02",
        "status": "Sedang Dikerjakan",
        "kategori": "Harian",
        "frekuensi": "Dilakukan Harian"
    },
    {
        "id": 11,
        "nama": "Cek Rutin Compressor Air Filter",
        "kode": "COM-AF-07",
        "status": "Selesai",
        "kategori": "Mingguan",
        "frekuensi": "Dilakukan Mingguan"
    },
    {
        "id": 12,
        "nama": "Cek Rutin Auxiliary Engine 1 Cooling Pump",
        "kode": "AE1-CP-05",
        "status": "Belum Selesai",
        "kategori": "Mingguan",
        "frekuensi": "Dilakukan Mingguan"
    },
    {
        "id": 13,
        "nama": "Cek Rutin Steering Gear Hydraulic Check",
        "kode": "SG-HYD-03",
        "status": "Sedang Dikerjakan",
        "kategori": "Harian",
        "frekuensi": "Dilakukan Harian"
    },
    {
        "id": 14,
        "nama": "Cek Rutin Main Engine Oil Filter",
        "kode": "ME-FO-01",
        "status": "Selesai",
        "kategori": "Bulanan",
        "frekuensi": "Dilakukan Bulanan"
    },
    {
        "id": 15,
        "nama": "Cek Rutin Steering Gear Hydraulic Check",
        "kode": "SG-HYD-03",
        "status": "Selesai",
        "kategori": "Bulanan",
        "frekuensi": "Dilakukan Bulanan"
    },
    {
        "id": 16,
        "nama": "Cek Rutin Compressor Air Filter",
        "kode": "COM-AF-07",
        "status": "Belum Selesai",
        "kategori": "Harian",
        "frekuensi": "Dilakukan Harian"
    },
    {
        "id": 17,
        "nama": "Cek Rutin Fire Pump Sea Suction Valve",
        "kode": "FP-SSV-10",
        "status": "Belum Selesai",
        "kategori": "Harian",
        "frekuensi": "Dilakukan Harian"
    },
    {
        "id": 18,
        "nama": "Cek Rutin Auxiliary Engine 1 Cooling Pump",
        "kode": "AE1-CP-05",
        "status": "Belum Selesai",
        "kategori": "Mingguan",
        "frekuensi": "Dilakukan Mingguan"
    },
    {
        "id": 19,
        "nama": "Cek Rutin Windlass Brake Inspection",
        "kode": "WIND-BI-02",
        "status": "Selesai",
        "kategori": "Harian",
        "frekuensi": "Dilakukan Harian"
    },
    {
        "id": 20,
        "nama": "Cek Rutin Windlass Brake Inspection",
        "kode": "WIND-BI-02",
        "status": "Selesai",
        "kategori": "Mingguan",
        "frekuensi": "Dilakukan Mingguan"
    },
    {
        "id": 21,
        "nama": "Cek Rutin Auxiliary Engine 1 Cooling Pump",
        "kode": "AE1-CP-05",
        "status": "Belum Selesai",
        "kategori": "Harian",
        "frekuensi": "Dilakukan Harian"
    },
    {
        "id": 22,
        "nama": "Cek Rutin Fire Pump Sea Suction Valve",
        "kode": "FP-SSV-10",
        "status": "Sedang Dikerjakan",
        "kategori": "Harian",
        "frekuensi": "Dilakukan Harian"
    },
    {
        "id": 23,
        "nama": "Cek Rutin Compressor Air Filter",
        "kode": "COM-AF-07",
        "status": "Belum Selesai",
        "kategori": "Bulanan",
        "frekuensi": "Dilakukan Bulanan"
    },
    {
        "id": 24,
        "nama": "Cek Rutin Main Engine Oil Filter",
        "kode": "ME-FO-01",
        "status": "Belum Selesai",
        "kategori": "Bulanan",
        "frekuensi": "Dilakukan Bulanan"
    },
    {
        "id": 25,
        "nama": "Cek Rutin Bilge Pump Motor",
        "kode": "BP-MOT-11",
        "status": "Belum Selesai",
        "kategori": "Bulanan",
        "frekuensi": "Dilakukan Bulanan"
    },
    {
        "id": 26,
        "nama": "Cek Rutin Bilge Pump Motor",
        "kode": "BP-MOT-11",
        "status": "Belum Selesai",
        "kategori": "Bulanan",
        "frekuensi": "Dilakukan Bulanan"
    },
    {
        "id": 27,
        "nama": "Cek Rutin Fire Pump Sea Suction Valve",
        "kode": "FP-SSV-10",
        "status": "Belum Selesai",
        "kategori": "Harian",
        "frekuensi": "Dilakukan Harian"
    },
    {
        "id": 28,
        "nama": "Cek Rutin Generator 2 Fuel Injectors",
        "kode": "GEN2-FI-04",
        "status": "Selesai",
        "kategori": "Harian",
        "frekuensi": "Dilakukan Harian"
    },
    {
        "id": 29,
        "nama": "Cek Rutin Auxiliary Engine 1 Cooling Pump",
        "kode": "AE1-CP-05",
        "status": "Selesai",
        "kategori": "Mingguan",
        "frekuensi": "Dilakukan Mingguan"
    },
    {
        "id": 30,
        "nama": "Cek Rutin Compressor Air Filter",
        "kode": "COM-AF-07",
        "status": "Belum Selesai",
        "kategori": "Harian",
        "frekuensi": "Dilakukan Harian"
    },
    {
        "id": 31,
        "nama": "Cek Rutin Bilge Pump Motor",
        "kode": "BP-MOT-11",
        "status": "Belum Selesai",
        "kategori": "Mingguan",
        "frekuensi": "Dilakukan Mingguan"
    },
    {
        "id": 32,
        "nama": "Cek Rutin Separator Oil Discharge Valve",
        "kode": "SEP-ODV-09",
        "status": "Belum Selesai",
        "kategori": "Bulanan",
        "frekuensi": "Dilakukan Bulanan"
    },
    {
        "id": 33,
        "nama": "Cek Rutin Separator Oil Discharge Valve",
        "kode": "SEP-ODV-09",
        "status": "Belum Selesai",
        "kategori": "Mingguan",
        "frekuensi": "Dilakukan Mingguan"
    },
    {
        "id": 34,
        "nama": "Cek Rutin Generator 2 Fuel Injectors",
        "kode": "GEN2-FI-04",
        "status": "Selesai",
        "kategori": "Harian",
        "frekuensi": "Dilakukan Harian"
    },
    {
        "id": 35,
        "nama": "Cek Rutin Bilge Pump Motor",
        "kode": "BP-MOT-11",
        "status": "Selesai",
        "kategori": "Harian",
        "frekuensi": "Dilakukan Harian"
    },
    {
        "id": 36,
        "nama": "Cek Rutin Separator Oil Discharge Valve",
        "kode": "SEP-ODV-09",
        "status": "Belum Selesai",
        "kategori": "Mingguan",
        "frekuensi": "Dilakukan Mingguan"
    },
    {
        "id": 37,
        "nama": "Cek Rutin Separator Oil Discharge Valve",
        "kode": "SEP-ODV-09",
        "status": "Belum Selesai",
        "kategori": "Bulanan",
        "frekuensi": "Dilakukan Bulanan"
    },
    {
        "id": 38,
        "nama": "Cek Rutin Main Engine Oil Filter",
        "kode": "ME-FO-01",
        "status": "Sedang Dikerjakan",
        "kategori": "Mingguan",
        "frekuensi": "Dilakukan Mingguan"
    },
    {
        "id": 39,
        "nama": "Cek Rutin Separator Oil Discharge Valve",
        "kode": "SEP-ODV-09",
        "status": "Selesai",
        "kategori": "Bulanan",
        "frekuensi": "Dilakukan Bulanan"
    },
    {
        "id": 40,
        "nama": "Cek Rutin Separator Oil Discharge Valve",
        "kode": "SEP-ODV-09",
        "status": "Belum Selesai",
        "kategori": "Bulanan",
        "frekuensi": "Dilakukan Bulanan"
    }

];

let tasks = []; 

function loadTasks() {
    const storedTasks = localStorage.getItem('pmsTasks');
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
    } else {
        tasks = initialTasks;
        saveTasks(); 
    }
    displayTasks(tasks); 
}


function saveTasks() {
    localStorage.setItem('pmsTasks', JSON.stringify(tasks));
}

function resetData() {
    if (confirm("Apakah Anda yakin ingin mengatur ulang data ke kondisi awal? Semua perubahan akan hilang.")) {
        localStorage.removeItem('pmsTasks');
        location.reload();
    }
}



function displayTasks(taskList) {
    const container = document.getElementById('task-list-container');
    container.innerHTML = '';

    taskList.forEach(task => {
        let statusClass = '';
        let borderClass = '';
        
        if (task.status === "Selesai") {
            statusClass = 'status-selesai';
            borderClass = 'border-selesai';
        } else if (task.status === "Sedang Dikerjakan") {
            statusClass = 'status-sedang';
            borderClass = 'border-sedang';
        } else {
            statusClass = 'status-belum';
            borderClass = 'border-belum';
        }

        let actionButtons = '';
        if (task.status === "Belum Selesai" || task.status === "Sedang Dikerjakan") {
             actionButtons += `<button class="action-button btn-complete" onclick="updateTaskStatus(${task.id}, 'Selesai')">Selesaikan</button>`;
        }
        if (task.status === "Belum Selesai") {
            actionButtons += `<button class="action-button btn-start" onclick="updateTaskStatus(${task.id}, 'Sedang Dikerjakan')">Mulai</button>`;
        }
        if (task.status === "Selesai") {
            actionButtons += `<button class="action-button btn-reopen" onclick="updateTaskStatus(${task.id}, 'Belum Selesai')">Buka Kembali</button>`;
        }

        container.innerHTML += `
            <div class="task-card ${borderClass}">
                <h3>${task.nama}</h3>
                <div class="task-meta">
                    <span>Kode Alat: ${task.kode}</span>
                    <span>Frekuensi: ${task.frekuensi}</span>
                </div>
                <p>Status: <span class="status-tag ${statusClass}">${task.status}</span></p>
                <div class="task-actions" style="margin-top: 15px;">
                    ${actionButtons}
                </div>
            </div>
        `;
    });
}



function updateTaskStatus(taskId, newStatus) {
    const taskIndex = tasks.findIndex(t => t.id === taskId);
    
    if (taskIndex !== -1) {
        tasks[taskIndex].status = newStatus;
        
        saveTasks();
        
        filterTasks(); 
    }
}

function filterTasks() {
    const statusFilter = document.getElementById('filter-status').value;
    const kategoriFilter = document.getElementById('filter-kategori').value;

    let filteredList = tasks;

    if (statusFilter !== 'Semua') {
        filteredList = filteredList.filter(task => task.status === statusFilter);
    }
    
    if (kategoriFilter !== 'Semua') {
        filteredList = filteredList.filter(task => task.kategori === kategoriFilter);
    }

    displayTasks(filteredList);
}


document.addEventListener('DOMContentLoaded', loadTasks);
