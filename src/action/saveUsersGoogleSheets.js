const { GoogleSpreadsheet } = require("google-spreadsheet");

async function data(name, email, password) {
  const doc = new GoogleSpreadsheet(
    "1VuUA8MKKA8IJwCNi6QdsCRyVWcgn_ZS1uoz_f_sUBFM"
  );
  await doc.useServiceAccountAuth(require("./keys.json"));
  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];
  const rows = await sheet.getRows();

  const data = rows.map((userData) => {
    return {
      id: userData.id,
      name: userData.Name,
      email: userData.Email,
      password: userData.password,
    };
  });
  const larryRow = await sheet.addRow({
    id: data.length + 1,
    Name: name,
    Email: email,
    password: password,
  });
  console.log(larryRow);
  return data;
}

module.exports = data;
