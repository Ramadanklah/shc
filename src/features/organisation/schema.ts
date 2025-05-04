
import { z } from "zod";
import i18next from "i18next";

// Form validation schema
export const organisationFormSchema = z.object({
  orgName: z.string().min(2, i18next.t('register.nameRequired')),
  location: z.string().min(2, i18next.t('register.locationRequired')),
  contactPerson: z.string().min(2, i18next.t('register.contactPersonRequired')),
  email: z.string().email(i18next.t('register.validEmail')),
  license: z.string().optional(),
  about: z.string().optional(),
  whatsapp: z.string()
    .refine(val => !val || val.match(/^\+?[1-9]\d{1,14}$/), { 
      message: i18next.t('register.invalidWhatsapp') 
    }).optional(),
});

export type OrganisationFormValues = z.infer<typeof organisationFormSchema>;
