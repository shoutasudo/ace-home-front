import { contactType, contactTypeMapping, statusType, statusTypeMapping } from "@/types/contact";

export const getContactTypeText = (type: contactType): string => {
    return contactTypeMapping[type] || "Undefined type.";
};

export const getStatusTypeText = (type: statusType): string => {
    return statusTypeMapping[type] || "Undefined type.";
};
