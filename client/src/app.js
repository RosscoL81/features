const InstrumentFamilies = import('./models/instrument_families.js');
const SelectView = import('./views/select_view.js');
const InstrumentFamilyView = import('./views/instrument_family_view.js');
const data = import('./data/instrument_families.js');

document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.querySelector('select#instrument-families');
  const familyDropdown = new SelectView(selectElement);
  familyDropdown.bindEvents();

  const familyContainer = document.querySelector('div#instrument-family');
  const instrumentFamilyView = new InstrumentFamilyView(familyContainer);
  instrumentFamilyView.bindEvents();

  const instrumentFamilies = new InstrumentFamilies(data);
  instrumentFamilies.bindEvents();
});
