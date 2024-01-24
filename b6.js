


document.getElementById('button').addEventListener('click', function() {
    const studentId = document.getElementById('studentId').value;
    const studentName = document.getElementById('studentName').value;
    const age = document.getElementById('age').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
  
    let errorMessage = '';
  
    // Kiểm tra dữ liệu
    if (studentId.length !== 6) {
      errorMessage += '- Mã sinh viên phải có độ dài là 6 ký tự.\n';
    }
  
    if (studentName.trim() === '') {
      errorMessage += '- Họ tên sinh viên không được để trống.\n';
    }
  
    if (isNaN(age) || parseInt(age) < 18) {
      errorMessage += '- Tuổi phải là một số và lớn hơn hoặc bằng 18.\n';
    }
  
    if (!(/^\d{10,11}$/.test(phone))) {
      errorMessage += '- Số điện thoại phải là một chuỗi số từ 10 đến 11 chữ số.\n';
    }
  
    if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) {
      errorMessage += '- Email phải có định dạng hợp lệ.\n';
    }
  
    // Hiển thị thông báo lỗi hoặc thông tin sinh viên
    if (errorMessage !== '') {
      alert('Vui lòng kiểm tra các lỗi sau:\n' + errorMessage);
    } else {
      const studentInfo = document.getElementById('studentInfo');
      const studentIdOutput = document.getElementById('studentIdOutput');
      const studentNameOutput = document.getElementById('studentNameOutput');
      const ageOutput = document.getElementById('ageOutput');
      const phoneOutput = document.getElementById('phoneOutput');
      const emailOutput = document.getElementById('emailOutput');
  
      studentIdOutput.textContent = 'Mã sinh viên: ' + studentId;
      studentNameOutput.textContent = 'Họ tên sinh viên: ' + studentName;
      ageOutput.textContent = 'Tuổi: ' + age;
      phoneOutput.textContent = 'Số điện thoại: ' + phone;
      emailOutput.textContent = 'Email: ' + email;
  
      studentInfo.classList.remove('hidden');
    }
  });
