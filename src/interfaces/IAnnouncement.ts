import { format } from "date-fns";

export interface IAnnouncement {
  id: string;
  title: string;
  date: string;
  username: string;
  imageurl: string;
  role: string;
  message: string;
  termsOfService: boolean;
}

export const initialValues: IAnnouncement = {
  id: "",
  title: "",
  message: "",
  date: format(new Date(), "MM/dd/yyyy HH:mm 'UTC'XXX"),
  username: "Jack Jacklyne",
  imageurl: "/images/user.png",
  role: "Production coordinator",
  termsOfService: false,
};
