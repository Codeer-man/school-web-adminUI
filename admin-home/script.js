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
    // form data
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
    } catch (error) {
      console.log("Error submitting data", error);
      alert(error.message);
    }

    // image uploading
    const ImageFile = document.getElementById("imageupload").files[0];

    if (ImageFile) {
      const formData = new FormData();
      formData.append("image", ImageFile);
    }

    try {
      const response = await fetch(
        "http://localhost:3000/api/image/imageUpload",
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.ok) {
        document.getElementById("imageUpload").value = "";
        return alert("Image uploaded successfully!");
      }
    } catch (error) {
      console.error("Error uploading image", error);
      alert(error.message);
    }
  });
