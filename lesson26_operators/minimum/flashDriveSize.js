let flashDriveSizeGB = +prompt("Будь ласка, введіть обсяг флешки в ГБ:");

let flashDriveSizeMB = flashDriveSizeGB * 1024;

const fileSizeMB = 820;

let filesCount = Math.floor(flashDriveSizeMB / fileSizeMB);

alert(`На флешці об'ємом ${flashDriveSizeGB} ГБ можна помістити ${filesCount} файл(ів) розміром 820 МБ.`);