import { SuportTicket as TSuportTicket } from "../api/suportTicket/SuportTicket";

export const SUPORTTICKET_TITLE_FIELD = "id";

export const SuportTicketTitle = (record: TSuportTicket): string => {
  return record.id || record.id;
};
