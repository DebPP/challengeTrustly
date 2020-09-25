PayWithMyBank.addPanelListener(function(command, event) {
  if (command === 'event' && event.type === 'new_location') {
    if (event.data.indexOf('#success') === 0) {
      alert('sucess!');
    } else {
      alert('cancel!');
    }
    return false;
  }
});