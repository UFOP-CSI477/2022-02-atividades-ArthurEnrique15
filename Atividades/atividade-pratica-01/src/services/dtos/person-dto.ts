export type CreatePersonDTO = {
  document: string;
  name: string;
  number?: string;
  complement?: string;
  street?: string;
  bloodTypeId?: number;
}

export type UpdatePersonDTO = {
  id: number;
  document?: string;
  name?: string;
  number?: string;
  complement?: string;
  street?: string;
  bloodTypeId?: number | null;
}
