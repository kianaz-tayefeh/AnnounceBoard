import { v4 as uuidv4 } from "uuid";
import { format } from "date-fns";

export interface IAnnouncement {
  _id: string;
  title: string;
  date: string;
  username: string;
  avatar: string;
  role: string;
  message: string;
  termsOfService: boolean;
}

export const initialValues: IAnnouncement = {
  _id: uuidv4(),
  title: "",
  message: "",
  date: format(new Date(), "MM/dd/yyyy HH:mm 'UTC'XXX"),
  username: "Jack Jacklyne",
  avatar: "public/images/user.png",
  role: "Production coordinator",
  termsOfService: false,
};
