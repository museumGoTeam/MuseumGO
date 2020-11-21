import { IWithName } from "../types";

interface IFilterParams<TElem> {
  arr: TElem[];
  filter: string;
}

export default (): (<TElem extends IWithName>(
  params: IFilterParams<TElem>
) => TElem[]) => {
  return ({ arr, filter }) => {
    const updatedArr = arr.filter((poi) =>
      poi.name.toLowerCase().includes(filter.toLowerCase())
    );
    return updatedArr;
  };
};
