
    function removeColor() {
      // Get the dropdown element
      var dropdown = document.getElementById("colorSelect");

      // Get the index of the selected option
      var selectedIndex = dropdown.selectedIndex;

      // Remove the selected option from the dropdown
      dropdown.remove(selectedIndex);
    }
