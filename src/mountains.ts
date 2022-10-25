import Mountain from "./models/Mountain";

export const mountains: Mountain[] = [
  { name: "Kilimanjaro", height: 1931 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 },
];

export const findNameOfTallestMountain = (arrayOfMtns: Mountain[]): string => {
  let tallestMountain: Mountain = arrayOfMtns[0];
  arrayOfMtns.forEach((mtn) => {
    if (tallestMountain.height < mtn.height) {
      tallestMountain = mtn;
    }
  });
  if (arrayOfMtns !== undefined) {
    return tallestMountain.name;
  } else {
    return "";
  }
};
