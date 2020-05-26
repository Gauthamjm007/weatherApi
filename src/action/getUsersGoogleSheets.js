const { GoogleSpreadsheet } = require("google-spreadsheet");

async function data() {
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
  return data;
}

module.exports = data;
