const courses = [
    { code: "CSE 121b", name: "JavaScript Language", credits: 3, subject: "CSE", completed: true },
    { code: "CSE 110", name: "Intro to Programming", credits: 2, subject: "CSE", completed: false },
    { code: "WDD 130", name: "Web Fundamentals", credits: 2, subject: "WDD", completed: true },
    { code: "WDD 231", name: "Frontend Development", credits: 3, subject: "WDD", completed: false },
    { code: "CIT 111", name: "Intro to IT", credits: 3, subject: "CIT", completed: true }
  ];
  
  const courseList = document.getElementById("courseList");
  const totalCredits = document.getElementById("totalCredits");
  const buttons = document.querySelectorAll("#filters button");
  
  function displayCourses(filtered = "all") {
    courseList.innerHTML = "";
    let filteredCourses = courses.filter(course => filtered === "all" || course.subject === filtered);
  
    filteredCourses.forEach(course => {
      const li = document.createElement("li");
      li.textContent = `${course.code} - ${course.name}`;
      if (course.completed) li.classList.add("completed");
      courseList.appendChild(li);
    });
  
    const total = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    totalCredits.textContent = total;
  }
  
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      displayCourses(btn.dataset.subject);
    });
  });
  
  displayCourses();
  
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
  
  document.getElementById("menu").addEventListener("click", () => {
    document.querySelector(".navigation").classList.toggle("show");
  });
  