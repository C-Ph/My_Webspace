document.addEventListener("DOMContentLoaded", function () {
    // Sticky elements
    const header = document.querySelector(".header");
    const sidebar = document.querySelector(".sidebar");

    header.style.position = "sticky";
    header.style.top = "0";
    header.style.zIndex = "1000";
    header.style.backgroundColor = "#fff";

    sidebar.style.position = "sticky";
    sidebar.style.top = "80px";
    sidebar.style.height = "calc(100vh - 80px)";
    sidebar.style.zIndex = "999";

    // Smooth scroll
    document.querySelectorAll(".menu a").forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    });

    // Show More/Less functionality
    function initializeShowMore(containerId, itemsPerPage = 6) {
      const container = document.querySelector(
        `#${containerId} .grid-container`
      );
      const items = container.querySelectorAll(".card");
      const showMoreBtn = container.querySelector(".show-more-btn");
      let isExpanded = false;

      // ซ่อนปุ่มถ้ามี items น้อยกว่าหรือเท่ากับ 6
      if (items.length <= itemsPerPage) {
        showMoreBtn.style.display = "none";
        return;
      }

      // ซ่อน items ที่เกิน 6 ชิ้นแรก
      items.forEach((item, index) => {
        if (index >= itemsPerPage) {
          item.style.display = "none";
        }
      });

      showMoreBtn.addEventListener("click", function () {
        isExpanded = !isExpanded;

        items.forEach((item, index) => {
          if (index >= itemsPerPage) {
            item.style.display = isExpanded ? "block" : "none";
          }
        });

        this.textContent = isExpanded ? "<< See Less" : "See More >>";
      });
    }

    // เริ่มการทำงานสำหรับทั้ง Portfolio และ Online Learning
    initializeShowMore("portfolio");
    initializeShowMore("Online");
  })