export type CreateDonationDTO = {
  date: Date;
  personId: number;
  collectionPlaceId: number;
}

export type UpdateDonationDTO = {
  id: number;
  date?: Date;
  personId?: number;
  collectionPlaceId?: number;
}
