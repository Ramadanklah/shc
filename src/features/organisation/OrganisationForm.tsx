
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Loader2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { LogoUpload } from "./LogoUpload";
import { organisationFormSchema, type OrganisationFormValues } from "./schema";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";

interface OrganisationFormProps {
  onSubmit: (values: OrganisationFormValues, logo: File | null) => Promise<void>;
  isSubmitting: boolean;
}

export const OrganisationForm: React.FC<OrganisationFormProps> = ({
  onSubmit,
  isSubmitting
}) => {
  const { t } = useTranslation();
  const [logo, setLogo] = React.useState<File | null>(null);
  const [logoPreview, setLogoPreview] = React.useState<string | null>(null);

  // Initialize form with react-hook-form
  const form = useForm<OrganisationFormValues>({
    resolver: zodResolver(organisationFormSchema),
    defaultValues: {
      orgName: "",
      location: "",
      contactPerson: "",
      email: "",
      license: "",
      about: "",
      whatsapp: "",
    },
  });

  const handleLogoChange = (file: File | null) => {
    setLogo(file);
    if (file) {
      setLogoPreview(URL.createObjectURL(file));
    } else {
      setLogoPreview(null);
    }
  };

  const handleSubmit = async (values: OrganisationFormValues) => {
    await onSubmit(values, logo);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="orgName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold">
                {t('register.orgName')} *
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="e.g. Syrian Health Initiative"
                  className="bg-gray-50"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <LogoUpload 
          logoPreview={logoPreview} 
          onLogoChange={handleLogoChange} 
        />

        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold">
                {t('register.location')} *
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="e.g. Aleppo, Syria"
                  className="bg-gray-50"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="contactPerson"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold">
                {t('register.contactPerson')} *
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Full name of main contact"
                  className="bg-gray-50"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold">
                {t('register.contactEmail')} *
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  placeholder="organisation@email.com"
                  className="bg-gray-50"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="license"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold">
                {t('register.license')}
                <span className="text-xs text-gray-500"> ({t('register.licenseOptional')})</span>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Reg # or leave blank"
                  className="bg-gray-50"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="about"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold">{t('register.about')}</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder={t('register.aboutPlaceholder')}
                  className="bg-gray-50"
                  rows={3}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="whatsapp"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold">
                {t('register.whatsapp')}
                <span className="text-xs text-gray-500"> ({t('register.whatsappCode')})</span>
              </FormLabel>
              <FormControl>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                  <Input
                    {...field}
                    placeholder="+1234567890"
                    className="bg-gray-50"
                    type="tel"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-between items-center mt-4">
          <Button
            className="bg-syria-teal hover:bg-syria-teal-dark text-white"
            type="submit"
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                {t('register.submitting')}
              </>
            ) : (
              t('register.submit')
            )}
          </Button>
          <Link to="/" className="text-syria-teal underline">
            {t('register.cancel')}
          </Link>
        </div>
      </form>
    </Form>
  );
};
