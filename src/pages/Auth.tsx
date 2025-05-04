
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const authFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

type AuthFormValues = z.infer<typeof authFormSchema>;

const Auth = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState<'signin' | 'signup'>('signin');

  const form = useForm<AuthFormValues>({
    resolver: zodResolver(authFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleSubmit = async (values: AuthFormValues) => {
    setIsSubmitting(true);
    
    try {
      if (activeTab === 'signin') {
        const { error } = await supabase.auth.signInWithPassword({
          email: values.email,
          password: values.password,
        });
        
        if (error) throw error;
        
        toast.success(t('auth.signinSuccess'));
        navigate('/');
      } else {
        const { error } = await supabase.auth.signUp({
          email: values.email,
          password: values.password,
        });
        
        if (error) throw error;
        
        toast.success(t('auth.signupSuccess'), {
          description: t('auth.signupVerification'),
        });
      }
    } catch (error) {
      console.error('Authentication error:', error);
      toast.error(activeTab === 'signin' ? t('auth.signinError') : t('auth.signupError'), {
        description: error instanceof Error ? error.message : t('auth.errorDescription')
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex flex-col items-center justify-center bg-syria-light py-12">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-syria-teal text-center">
              {activeTab === 'signin' ? t('auth.signinTitle') : t('auth.signupTitle')}
            </CardTitle>
            <CardDescription className="text-center">
              {activeTab === 'signin' ? t('auth.signinDescription') : t('auth.signupDescription')}
            </CardDescription>
          </CardHeader>
          <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as 'signin' | 'signup')}>
            <TabsList className="grid grid-cols-2 mx-6">
              <TabsTrigger value="signin">{t('auth.signin')}</TabsTrigger>
              <TabsTrigger value="signup">{t('auth.signup')}</TabsTrigger>
            </TabsList>
            <CardContent className="pt-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('auth.email')}</FormLabel>
                        <FormControl>
                          <Input placeholder="your@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('auth.password')}</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="••••••" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full mt-6 bg-syria-teal hover:bg-syria-teal-dark"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {activeTab === 'signin' ? t('auth.signingIn') : t('auth.signingUp')}
                      </span>
                    ) : activeTab === 'signin' ? t('auth.signin') : t('auth.signup')}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Tabs>
          <CardFooter className="flex justify-center pt-2 pb-6">
            <Button variant="link" onClick={() => setActiveTab(activeTab === 'signin' ? 'signup' : 'signin')}>
              {activeTab === 'signin' ? t('auth.noAccount') : t('auth.haveAccount')}
            </Button>
          </CardFooter>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Auth;
