export type CreateCollectionPlaceDTO = {
  name: string;
  number: string;
  complement: string;
  street: string;
}

export type UpdateCollectionPlaceDTO = {
  id: number;
  name?: string;
  number?: string;
  complement?: string;
  street?: string;
}
