// 삭제 버튼 누르면 뜨는 모달창
document.addEventListener("DOMContentLoaded", function () {
  const deleteButtons = document.querySelectorAll(".delete-button");
  const modalWrap = document.querySelector(".delete-modal-wrap");

  console.log(deleteButtons);

  deleteButtons.forEach(function (deleteButton) {
    deleteButton.addEventListener("click", (e) => {
      modalWrap.style.display = "flex";
    });
  });

  const cancelButton = document.querySelector(".modal-cancel button");
  const confirmButton = document.querySelector(".modal-confirm button");

  cancelButton.addEventListener("click", (e) => {
    modalWrap.style.display = "none";
  });

  confirmButton.addEventListener("click", (e) => {
    modalWrap.style.display = "none";
  });
});

//아래 게시물 창 버튼
const paginationBtn = document.querySelectorAll(".page-count-num");
const paginationBox = document.querySelector(".page");

paginationBox.addEventListener("click", (e) => {
  let pageBtn = e.target.closest("button.page-count-num");
  if (pageBtn) {
    paginationBtn.forEach((item) => {
      item.classList.contains("page-count-num") &&
        item.classList.remove("page-count-num-choice");
    });
    pageBtn.classList.add("page-count-num-choice");
  }
});

// 검색창 눌렀을때 검색바에 아웃라인주기
const searchBar = document.querySelector("label.search-bar");

document.addEventListener("click", (e) => {
  if (e.target.closest("label.search-bar")) {
    searchBar.classList.add("search-bar-checked");
    return;
  }
  searchBar.classList.remove("search-bar-checked");
});

const inputField = document.querySelector(".search-bar input");
const cancelButton = document.querySelector(".search-bar .cancel-logo");
const searchButton = document.querySelector(".search-bar .search-logo");

// 입력 필드에 입력 내용이 변경될 때마다 실행될 함수를 정의합니다.
function handleInputChange() {
  const inputValue = inputField.value.trim(); // 입력 내용을 가져옵니다.

  // 입력 내용이 있을 때
  if (inputValue !== "") {
    cancelButton.style.display = "flex"; // cancel-logo를 보여줍니다.
    searchButton.style.display = "none"; // search-logo를 숨깁니다.
  } else {
    // 입력 내용이 없을 때
    cancelButton.style.display = "none"; // cancel-logo를 숨깁니다.
    searchButton.style.display = "flex"; // search-logo를 보여줍니다.
  }
}

// cancel-logo를 클릭했을 때 실행될 함수를 정의합니다.
function handleCancelClick() {
  inputField.value = ""; // 입력 필드 내용을 지웁니다.
  cancelButton.style.display = "none"; // cancel-logo를 숨깁니다.
  searchButton.style.display = "flex"; // search-logo를 보여줍니다.
}

// 입력 필드에 이벤트 리스너를 추가합니다.
inputField.addEventListener("input", handleInputChange);

// cancel-logo에 클릭 이벤트 리스너를 추가합니다.
cancelButton.addEventListener("click", handleCancelClick);

// 공지사항, 자주묻는 질문 목록 선택하는 js
const catebtns = document.querySelectorAll("#btn");
const cateUnder = document.querySelectorAll("#under");
cateUnder[1].classList.add("underbar-checked");
catebtns[1].classList.add("lecture-checked");

catebtns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    catebtns.forEach((btn, i) => {
      btn.classList.remove("lecture-checked");
      cateUnder[i].classList.remove("underbar-checked");
    });
    btn.classList.add("lecture-checked");
    cateUnder[i].classList.add("underbar-checked");
  });
});

// 체크박스 js
const allCheck = document.querySelector(".all-check");
const checkboxes = document.querySelectorAll(".checkbox-input");

// all-check 체크 여부에 따라 checkbox-input 체크 여부 조절
allCheck.addEventListener("change", function () {
  checkboxes.forEach(function (checkbox) {
    checkbox.checked = allCheck.checked;
  });
});

// checkbox-input 중 하나라도 체크가 해제되면 all-check 체크 해제
checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    let allChecked = true;
    checkboxes.forEach(function (checkbox) {
      if (!checkbox.checked) {
        allChecked = false;
      }
    });
    allCheck.checked = allChecked;
  });
});

// checkbox-input 모두 체크되면 all-check 체크
checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    let allChecked = true;
    checkboxes.forEach(function (checkbox) {
      if (!checkbox.checked) {
        allChecked = false;
      }
    });
    allCheck.checked = allChecked;
  });
});
