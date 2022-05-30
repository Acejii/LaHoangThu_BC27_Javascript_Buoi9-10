function Employees(
  account,
  name,
  email,
  password,
  datepicker,
  salary,
  position,
  worktime
) {
  this.account = account;
  this.name = name;
  this.email = email;
  this.password = password;
  this.datepicker = datepicker;
  this.salary = salary;
  this.position = position;
  this.worktime = worktime;
}

Employees.prototype.calcSalary = function () {
  var salarySum;
  if (this.position === "Sếp") {
    salarySum = this.salary * 3;
  } else if (this.position === "Trưởng phòng") {
    salarySum = this.salary * 2;
  } else if (this.position === "Nhân viên") {
    salarySum = this.salary;
  }
  return salarySum.toLocaleString();
};

Employees.prototype.rank = function () {
  var worktime = +document.getElementById("gioLam").value;
  var rankName = "";
  if (this.worktime >= 192) {
    rankName = "Nhân viên xuất sắc";
  } else if (this.worktime >= 176) {
    rankName = "Nhân viên giỏi";
  } else if (this.worktime >= 160) {
    rankName = "Nhân viên khá";
  } else {
    rankName = "Nhân viên trung bình";
  }

  return rankName;
};

// Kiểm tra
function validation() {
  var account = document.getElementById("tknv").value;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var datepicker = document.getElementById("datepicker").value;
  var salary = +document.getElementById("luongCB").value;
  var position = document.getElementById("chucvu").value;
  var worktime = +document.getElementById("gioLam").value;

  var divAccount = document.getElementById("tbTKNV");
  var divName = document.getElementById("tbTen");
  var divEmail = document.getElementById("tbEmail");
  var divPassword = document.getElementById("tbMatKhau");
  var divDay = document.getElementById("tbNgay");
  var divSalary = document.getElementById("tbLuongCB");
  var divPosition = document.getElementById("tbChucVu");
  var divWorkTime = document.getElementById("tbGiolam");

  var isValid = true;

  if (!isRequired(account)) {
    isValid = false;
    divAccount.style.display = "block";
    divAccount.innerHTML = "Bạn chưa nhập Tài khoản";
  } else if (!accountValidation()) {
    isValid = false;
  } else {
    divAccount.innerHTML = "";
  }

  var letterName =
    /^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$/;
  var checkName = letterName.test(name);
  if (!isRequired(name)) {
    isValid = false;
    divName.style.display = "block";
    divName.innerHTML = "Bạn chưa nhập Họ tên";
  } else if (!checkName) {
    isValid = false;
    divName.style.display = "block";
    divName.innerHTML = "Tên nhập không đúng định dạng";
  } else {
    divName.style.display = "";
  }

  var checkPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,10}$/.test(
    password
  );
  if (!isRequired(password)) {
    isValid = false;
    divPassword.style.display = "block";
    divPassword.innerHTML = "Bạn chưa nhập Mật khẩu";
  } else if (!checkPassword) {
    isValid = false;
    divPassword.style.display = "block";
    divPassword.innerHTML =
      "Mật khẩu phải từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)";
  } else {
    divPassword.style.display = "none";
  }

  var checkEmail =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  if (!isRequired(email)) {
    isValid = false;
    divEmail.style.display = "block";
    divEmail.innerHTML = "Bạn chưa nhập Email";
  } else if (!checkEmail) {
    isValid = false;
    divEmail.style.display = "block";
    divEmail.innerHTML = "Email không đúng định dạng";
  } else {
    divEmail.style.display = "none";
  }
  if (!isRequired(datepicker)) {
    isValid = false;
    divDay.style.display = "block";
    divDay.innerHTML = "Bạn chưa nhập Ngày nhận việc";
  } else {
    divDay.style.display = "none";
  }

  if (!isRequired(salary)) {
    isValid = false;
    divSalary.style.display = "block";
    divSalary.innerHTML = "Bạn chưa nhập lương cơ bản";
  } else if (salary < 1000000 || salary > 20000000) {
    isValid = false;
    divSalary.style.display = "block";
    divSalary.innerHTML =
      "Lương cơ bản phải trong khoảng 1,000,000 - 20,000,000";
  } else {
    divSalary.style.display = "none";
  }
  if (!isRequired(position)) {
    isValid = false;
    divPosition.style.display = "block";
    divPosition.innerHTML = "Bạn chưa chọn chức vụ";
  } else {
    divPosition.style.display = "none";
  }
  if (!isRequired(worktime)) {
    isValid = false;
    divWorkTime.style.display = "block";
    divWorkTime.innerHTML = "Bạn chưa nhập số giờ làm";
  }
  if (worktime < 80 || worktime > 200) {
    isValid = false;
    divWorkTime.style.display = "block";
    divWorkTime.innerHTML =
      "Số giờ làm trong tháng phải trong khoảng 80 - 200 giờ";
  } else {
    divWorkTime.style.display = "none";
  }

  return isValid;
}

var employees = [];
init();
function init() {
  employees = JSON.parse(localStorage.getItem("employees")) || [];

  for (var i = 0; i < employees.length; i++) {
    var employee = employees[i];
    employees[i] = new Employees(
      employee.account,
      employee.name,
      employee.email,
      employee.password,
      employee.datepicker,
      employee.salary,
      employee.position,
      employee.worktime
    );
  }

  display(employees);
}

function addEmployee() {
  //   DOM:
  var account = document.getElementById("tknv").value;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var datepicker = document.getElementById("datepicker").value;
  var salary = +document.getElementById("luongCB").value;
  var position = document.getElementById("chucvu").value;
  var worktime = +document.getElementById("gioLam").value;

  //   var isValid = validation();
  if (!validation()) {
    return;
  }
  var employee = new Employees(
    account,
    name,
    email,
    password,
    datepicker,
    salary,
    position,
    worktime
  );

  //   Add vào mảng
  employees.push(employee);

  localStorage.setItem("employees", JSON.stringify(employees));

  display(employees);
  resetForm();
}

function display(list) {
  // DOM
  var employeeList = document.getElementById("tableDanhSach");
  var htmls = "";
  for (var i = 0; i < list.length; i++) {
    htmls += `
            <tr>
            <td>${list[i].account}</td>
            <td>${list[i].name}</td>
            <td>${list[i].email}</td>
            <td>${list[i].worktime}</td>
            <td>${list[i].position}</td>
            <td>${list[i].calcSalary()}</td>
            <td>${list[i].rank()}</td>
            <td class="d-flex flex-row">
            <button class="btn btn-danger me-2" id="delete-btn" onclick="handleDelete('${
              list[i].account
            }')">Xóa</button>
            <button class="btn btn-success" id="update-btn" data-toggle="modal"
            data-target="#myModal" onclick="handleUpdate('${
              list[i].account
            }')">Cập nhật</button>
            </td>
            </tr>
            `;
  }

  employeeList.innerHTML = htmls;
}

function resetForm() {
  document.getElementById("tknv").value = "";
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("datepicker").value = "";
  document.getElementById("luongCB").value = "";
  document.getElementById("chucvu").value = "";
  document.getElementById("gioLam").value = "";

  document.getElementById("tknv").disabled = false;
  document.getElementById("btnThemNV").disabled = false;

  notification();
}

// Hàm kiểm tra input đã được nhập hay chưa

function isRequired(value) {
  if (!value) {
    return false;
  }
  return true;
}

function accountValidation() {
  if (
    document.getElementById("tknv").value.length < 4 ||
    document.getElementById("tknv").value.length > 6
  ) {
    document.getElementById("tbTKNV").style.display = "block";
    document.getElementById("tbTKNV").innerHTML = "Tài khoản chỉ gồm 4-6 kí tự";
    return false;
  } else {
    document.getElementById("tbTKNV").style.display = "none";
    return true;
  }
}

// Handle Delete
function handleDelete(employeeId) {
  index = findEmployee(employeeId);
  if (index != -1) {
    employees.splice(index, 1);
  }

  localStorage.setItem("employees", JSON.stringify(employees));
  display(employees);
}

// Handle Update

function handleUpdate(employeeId) {
  document.getElementById("tknv").disabled = true;
  document.getElementById("btnThemNV").disabled = true;

  var index = findEmployee(employeeId);
  var employee = employees[index];

  document.getElementById("tknv").value = employee.account;
  document.getElementById("name").value = employee.name;
  document.getElementById("email").value = employee.email;
  document.getElementById("password").value = employee.password;
  document.getElementById("datepicker").value = employee.datepicker;
  document.getElementById("luongCB").value = employee.salary;
  document.getElementById("chucvu").value = employee.position;
  document.getElementById("gioLam").value = employee.worktime;
  notification();
}
// Find employee

function findEmployee(employeeId) {
  var index = -1;

  for (var i = 0; i < employees.length; i++) {
    if (employees[i].account === employeeId) {
      index = i;
      break;
    }
  }
  return index;
}

// Update function

function updateEmployee() {
  document.getElementById("btnCapNhat").removeAttribute("data-dismiss");
  var account = document.getElementById("tknv").value;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var datepicker = document.getElementById("datepicker").value;
  var salary = +document.getElementById("luongCB").value;
  var position = document.getElementById("chucvu").value;
  var worktime = +document.getElementById("gioLam").value;

  if (!validation()) {
    return;
  }
  var employee = new Employees(
    account,
    name,
    email,
    password,
    datepicker,
    salary,
    position,
    worktime
  );

  var index = findEmployee(employee.account);
  employees[index] = employee;
  localStorage.setItem("employees", JSON.stringify(employees));
  display(employees);
}

// search

function searchEmployee() {
  var searchName = document.getElementById("searchName").value;
  searchName = searchName.toLowerCase();
  console.log(searchName);
  var newEmployees = [];
  for (var i = 0; i < employees.length; i++) {
    var employee = employees[i];
    var employeeRank = employee.rank().toLowerCase();
    console.log(employeeRank);
    if (employeeRank.indexOf(searchName) != -1) {
      newEmployees.push(employee);
    }
  }

  display(newEmployees);
}

// Display: none div thông báo

function notification() {
  divAccount = document.getElementById("tbTKNV").innerHTML = "";
  divName = document.getElementById("tbTen").innerHTML = "";
  divEmail = document.getElementById("tbEmail").innerHTML = "";
  divPassword = document.getElementById("tbMatKhau").innerHTML = "";
  divDay = document.getElementById("tbNgay").innerHTML = "";
  divSalary = document.getElementById("tbLuongCB").innerHTML = "";
  divPosition = document.getElementById("tbChucVu").innerHTML = "";
  divWorkTime = document.getElementById("tbGiolam").innerHTML = "";
}
