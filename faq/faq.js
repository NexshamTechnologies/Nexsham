
  const items = document.querySelectorAll('.faq-item');

  function setMaxHeight(item, open){
    const answer = item.querySelector('.faq-answer');
    if(open){
      answer.style.maxHeight = answer.scrollHeight + 'px';
    } else {
      answer.style.maxHeight = '0px';
    }
  }

  items.forEach(item => {
    // init state
    setMaxHeight(item, item.classList.contains('active'));

    item.querySelector('.faq-question').addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      items.forEach(other => {
        other.classList.remove('active');
        setMaxHeight(other, false);
      });
      if(!isActive){
        item.classList.add('active');
        setMaxHeight(item, true);
      }
    });
  });

  window.addEventListener('resize', () => {
    items.forEach(item => {
      if(item.classList.contains('active')) setMaxHeight(item, true);
    });
  });
