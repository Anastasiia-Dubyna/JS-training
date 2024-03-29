// selecting required element
const element = document.querySelector(".pagination ul");
let totalPages = 10;
let page = 1;

//calling function with passing parameters and adding inside element which is ul tag
element.innerHTML = createPagination(totalPages, page);

element.addEventListener("click", handlePageClick);

function createPagination(totalPages, page) {
  let liTag = "";
  let active;
  let beforePage = page - 1;
  let afterPage = page + 1;

  if (totalPages === 1) {
    return `<li class="numb active" data-page="1"><span>1</span></li>`;
  }

  if (page > 1) {
    //show the next button if the page value is greater than 1
    liTag += `<li class="btn prev" data-page="${
      page - 1
    }""><span><i class="fas fa-angle-left"></i> Prev</span></li>`;
  }
  if (page > 5) {
    //if page value is less than 2 then add 1 after the previous button
    liTag += `<li class="first numb" data-page="1"><span>1</span></li>`;
    if (page > 3) {
      //if page value is greater than 3 then add this (...) after the first li or page
      liTag += `<li class="dots"><span>...</span></li>`;
    }
  }
  // how many pages or li show before the current li
  if (page === totalPages) {
    beforePage -= 2;
  } else if (page === totalPages - 1) {
    beforePage -= 1;
  }
  // how many pages or li show after the current li
  if (page === 1) {
    afterPage += 2;
  } else if (page === 2) {
    afterPage += 1;
  }
  for (let plength = beforePage; plength <= afterPage; plength++) {
    if (plength > totalPages || plength < 0) {
      //if plength is greater than totalPage length then continue
      continue;
    }

    if (plength === 0) {
      //if plength is 0 than add +1 in plength value
      plength += 1;
    }
    if (page === plength) {
      //if page is equal to plength than assign active string in the active variable
      active = "active";
    } else {
      //else leave empty to the active variable
      active = "";
    }
    liTag += `<li class="numb ${active}" data-page="${plength}"><span>${plength}</span></li>`;
  }
  if (page < totalPages - 1 && totalPages > 5) {
    //if page value is less than totalPage value by -1 then show the last li or page
    if (page < totalPages - 2) {
      //if page value is less than totalPage value by -2 then add this (...) before the last li or page
      liTag += `<li class="dots"><span>...</span></li>`;
    }
    liTag += `<li class="last numb" data-page="${totalPages}"><span>${totalPages}</span></li>`;
  }
  if (page < totalPages) {
    console.log(page);
    liTag += `<li class="btn next" data-page="${
      page + 1
    }"><span>Next <i class="fas fa-angle-right"></i></span></li>`;
  }

  element.innerHTML = liTag; //add li tag inside ul tag
  return liTag; //reurn the li tag
}

function handlePageClick(event) {
  if (event.target.nodeName === "UL") {
    return;
  }
  const item = event.target.closest("[data-page]");
  if (!item) {
    return;
  }
  const newPage = item.dataset.page;
  if (newPage) {
    createPagination(totalPages, Number(newPage));
  }
}
