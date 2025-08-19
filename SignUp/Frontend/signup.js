document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", async (e) => {
        e.preventDefault(); // stop default form submission

        // Collect form data
        const formData = {
            name: document.getElementById("name").value.trim(),
            phone: document.getElementById("phone").value.trim(),
            dob: document.getElementById("dob").value, // yyyy-MM-dd format
            gender: document.getElementById("gender").value,
            email: document.getElementById("email").value.trim(),
            password: document.getElementById("password").value
        };

        try {
            // Call backend API
            const res = await fetch("http://localhost:8080/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            const text = await res.text();

            if (res.ok) {
                // redirect to success page
                window.location.href = "success.html";
            } else {
                alert("❌ " + text);
            }

        } catch (err) {
            alert("⚠️ Network error: " + err.message);
        }
    });
});
