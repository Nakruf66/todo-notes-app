// // Sayfa yüklendiğinde yapılacaklar ve notları yükle
// window.onload = function() {
//     loadTodos();
//     loadNotes();
// };

// // Yapılacaklar Listesine Ekleme
// function addTodo() {
//     const todoInput = document.getElementById('todo-input');
//     const todoCategory = document.getElementById('todo-category');
//     const todoDate = document.getElementById('todo-date');
//     const todoPriority = document.getElementById('todo-priority');
//     const todoText = todoInput.value.trim();
//     const category = todoCategory.value;
//     const date = todoDate.value;
//     const priority = todoPriority.value;

//     if (todoText === "") return;

//   // Veriyi kaydetme
// function saveTodos() {
//     const todoList = document.getElementById('todo-list');
//     const todos = [];

//     // Listeyi gezip her öğeyi alalım
//     for (let i = 0; i < todoList.children.length; i++) {
//         const todo = todoList.children[i];
//         const todoText = todo.textContent.split(" - ")[0];
//         const category = todo.textContent.split(" - ")[1].replace(')', '').trim();
//         const date = todo.textContent.split(" - ")[2].trim();
//         const priority = todo.textContent.split(" - ")[3].trim();
//         todos.push({ todoText, category, date, priority });
//     }

//     // Verileri localStorage'a kaydedelim
//     localStorage.setItem("todos", JSON.stringify(todos));
// }

// // Sayfa yüklendiğinde verileri al
// function loadTodos() {
//     const todos = JSON.parse(localStorage.getItem("todos"));
//     if (todos) {
//         todos.forEach(todo => {
//             const todoList = document.getElementById('todo-list');
//             const li = document.createElement('li');
//             li.textContent = `${todo.todoText} (${todo.category}) - ${todo.date} - ${todo.priority}`;

//             // Önceliğe göre renk değişimi
//             if (todo.priority === "high") {
//                 li.style.color = "red";
//             } else if (todo.priority === "medium") {
//                 li.style.color = "orange";
//             } else {
//                 li.style.color = "green";
//             }

//             // Tamamlandı butonu ekle
//             const doneButton = document.createElement('button');
//             doneButton.textContent = "Tamamla";
//             doneButton.onclick = function() {
//                 li.classList.toggle('completed');
//                 saveTodos();
//             };

//             // Silme butonu ekle
//             const deleteButton = document.createElement('button');
//             deleteButton.textContent = "Sil";
//             deleteButton.onclick = function() {
//                 li.remove();
//                 saveTodos();
//             };

//             li.appendChild(doneButton);
//             li.appendChild(deleteButton);
//             todoList.appendChild(li);
//         });
//     }
// }

// // Sayfa yüklendiğinde loadTodos'u çalıştıralım
// window.onload = loadTodos;

//     todoInput.value = ""; // Inputu temizle
//     todoDate.value = "";  // Tarih inputunu temizle
//     todoPriority.value = "high"; // Önceliği varsayılan "Yüksek" olarak ayarla
//     saveTodos(); // Veriyi kaydet
// }




// // Yapılacaklar Listesini kaydet
// function saveTodos() {
//     const todos = [];
//     const todoItems = document.querySelectorAll('#todo-list li');
//     todoItems.forEach(item => {
//         todos.push({
//             text: item.textContent.replace("TamamlaSil", ""),
//             completed: item.classList.contains('completed')
//         });
//     });
//     localStorage.setItem('todos', JSON.stringify(todos));
// }

// // Yapılacaklar Listesini yükle
// function loadTodos() {
//     const todos = JSON.parse(localStorage.getItem('todos')) || [];
//     const todoList = document.getElementById('todo-list');
//     todos.forEach(todo => {
//         const li = document.createElement('li');
//         li.textContent = todo.text;
//         if (todo.completed) {
//             li.classList.add('completed');
//         }

//         const doneButton = document.createElement('button');
//         doneButton.textContent = "Tamamla";
//         doneButton.onclick = function() {
//             li.classList.toggle('completed');
//             saveTodos();
//         };

//         const deleteButton = document.createElement('button');
//         deleteButton.textContent = "Sil";
//         deleteButton.onclick = function() {
//             li.remove();
//             saveTodos();
//         };

//         li.appendChild(doneButton);
//         li.appendChild(deleteButton);
//         todoList.appendChild(li);
//     });
// }

// // Notları kaydet
// function saveNotes() {
//     const notes = document.getElementById('notes').value;
//     localStorage.setItem('notes', notes);
// }

// // Notları yükle
// function loadNotes() {
//     const notes = localStorage.getItem('notes') || "";
//     document.getElementById('notes').value = notes;
// }

// // Notlar alanı değiştiğinde kaydet
// document.getElementById('notes').addEventListener('input', saveNotes);

// // Bildirim izni al
// function requestNotificationPermission() {
//     if (Notification.permission !== "granted") {
//         Notification.requestPermission();
//     }
// }

// // Bildirim gönderme
// function sendNotification(todoText, date) {
//     if (Notification.permission === "granted") {
//         const notification = new Notification("Hatırlatıcı", {
//             body: `${todoText} için son tarih: ${date}`,
//             icon: "https://via.placeholder.com/150", // İstersen burada bir ikon da kullanabilirsin
//         });
//     }
// }

// // Tarihi yaklaşan yapılacakları kontrol et
// function checkTodoDates() {
//     const todoList = document.getElementById('todo-list');
//     const todos = todoList.children;

//     const currentDate = new Date();

//     for (let i = 0; i < todos.length; i++) {
//         const todo = todos[i];
//         const dateText = todo.textContent.split(" - ")[2].trim();
//         const todoDate = new Date(dateText);

//         const timeDiff = todoDate - currentDate;

//         // Eğer tarih 1 gün (86400000 ms) içinde ise bildirim gönder
//         if (timeDiff > 0 && timeDiff <= 86400000) {
//             const todoText = todo.textContent.split(" - ")[0];
//             sendNotification(todoText, dateText);
//         }
//     }
// }

// // Bildirim kontrolünü belirli aralıklarla yapalım
// setInterval(checkTodoDates, 60000); // Her 60 saniyede bir kontrol et

