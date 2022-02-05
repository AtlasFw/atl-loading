let value = 0;
const sidebar = document.getElementById('loading-bar');

const updateProgress = () => {
  sidebar.style.width = `${value}%`
}

const handlers = {
  startInitFunctionOrder(data)
  {
    value = 25;
  },

  initFunctionInvoking(data)
  {
    value = 50;
  },

  startDataFileEntries(data)
  {
    value = 75;
  },

  performMapLoadFunction(data)
  {
    value = 100;
  },
};

window.addEventListener('message', function(e)
{
  (handlers[e.data.eventName] || function() {})(e.data);
});