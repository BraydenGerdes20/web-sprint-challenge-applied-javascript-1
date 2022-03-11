const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  const topicWrapper = document.createElement('div');
  const tab1 = document.createElement("div");
  const tab2 = document.createElement("div");
  const tab3 = document.createElement('div');

  topicWrapper.classList.add("topics");
  tab1.classList.add("tab");
  tab2.classList.add("tab");
  tab3.classList.add("tab");

  tab1.textContent = topics.Tabs;
  tab2.textContent = topics.Tabs;
  tab3.textContent = topics.Tabs;

  topicWrapper.appendChild(tab1);
  topicWrapper.appendChild(tab2);
  topicWrapper.appendChild(tab3);
  
  return topicWrapper;
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }
