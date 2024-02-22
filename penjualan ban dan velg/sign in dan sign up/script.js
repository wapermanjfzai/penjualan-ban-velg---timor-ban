// Fungsi untuk menampilkan/menyembunyikan password
function togglePasswordVisibility(inputId) {
    var passwordInput = document.getElementById(inputId);
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

// Fungsi untuk menangani pendaftaran pengguna
function signUp() {
    var username = document.getElementsByName("username")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var password = document.getElementById("password").value;
    var passwordVerify = document.getElementById("password-verify").value;

    // Validasi input
    if (!username || !email || !password || !passwordVerify) {
        alert("Mohon lengkapi semua field!");
        return;
    }
    if (password !== passwordVerify) {
        alert("Password tidak cocok!");
        return;
    }

    // Simpan informasi pengguna di localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Pendaftaran berhasil! Silakan login.");
}

// Fungsi untuk menangani login pengguna
function signIn() {
    var email = document.getElementsByName("email")[0].value;
    var password = document.getElementById("password").value;

    // Validasi input
    if (!email || !password) {
        alert("Mohon lengkapi email dan password!");
        return;
    }

    // Periksa apakah email dan password cocok dengan yang disimpan di localStorage
    var storedEmail = localStorage.getItem("email");
    var storedPassword = localStorage.getItem("password");
    if (email === storedEmail && password === storedPassword) {
        alert("Login berhasil!");
        // Di sini Anda bisa mengarahkan pengguna ke halaman beranda atau melakukan tindakan lain yang sesuai.
    } else {
        alert("Email atau password salah!");
    }
}
