// 1. Display the current year and last modified date
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// 2. Course data array
const courses = [
    { title: 'Course 1', description: 'Course description goes here.', completed: true, credits: 3 },
    { title: 'Course 2', description: 'Course description goes here.', completed: false, credits: 4 }
];

// 3. Display courses dynamically
const courseList = document.querySelector('.course-list');

courses.forEach(course => {
    const courseCard = document.createElement('div');
    courseCard.classList.add('course-card');
    courseCard.innerHTML = `
        <h3>${course.title}</h3>
        <p>${course.description}</p>
        <p>Credits: ${course.credits}</p>
        ${course.completed ? '<p class="completed">Completed</p>' : '<p class="not-completed">Not Completed</p>'}
    `;
    courseList.appendChild(courseCard);
});

// 4. Optional: Add course filtering
function filterCourses(filter) {
    const filteredCourses = courses.filter(course => {
        if (filter === 'All') return true;
        if (filter === 'WDD' && course.title.includes('WDD')) return true;
        if (filter === 'CSE' && course.title.includes('CSE')) return true;
        return false;
    });

    courseList.innerHTML = '';  // Clear current course list
    filteredCourses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');
        courseCard.innerHTML = `
            <h3>${course.title}</h3>
            <p>${course.description}</p>
            <p>Credits: ${course.credits}</p>
            ${course.completed ? '<p class="completed">Completed</p>' : '<p class="not-completed">Not Completed</p>'}
        `;
        courseList.appendChild(courseCard);
}

// Example usage: Filter by "WDD" courses
filterCourses('WDD');