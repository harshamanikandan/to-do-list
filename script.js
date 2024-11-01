document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        // Split the task text into words
        const words = taskText.split(' ');

        const li = document.createElement('li');

        // Loop through each word and create a span
        words.forEach(function(word) {
            const span = document.createElement('span');
            span.textContent = word + ' ';  // Add a space after each word

            // Add event listener to toggle strike-through on single click
            span.addEventListener('click', function() {
                this.style.textDecoration = this.style.textDecoration === 'line-through' ? 'none' : 'line-through';
            });

            // Add event listener to remove the word on double-click
            span.addEventListener('dblclick', function() {
                this.remove();
            });

            // Append each word to the list item (li)
            li.appendChild(span);
        });

        // Add the list item to the task list
        document.getElementById('taskList').appendChild(li);
        taskInput.value = '';  // Clear the input field
    }
});
