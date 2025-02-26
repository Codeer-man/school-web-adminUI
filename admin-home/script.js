document
  .getElementById("BlogForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const FormData = {
      title: document.getElementById("title").value,
      event: document.getElementById("event").value,
      author: document.getElementById("author").value,
      message: document.getElementById("message").value,
      //   date: new Date(),
    };

    try {
      const response = await fetch("http://localhost:3000/api/home/Create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(FormData),
      });
      const data = await response.json();
      if (response.ok) {
        document.getElementById("BlogForm").reset();
        return alert("Blog created successfully!");
      }
      return alert("Blog something is error", data.error);
    } catch (error) {
      console.log("Error submitting data", error);
      alert(error.message);
    }
  });
