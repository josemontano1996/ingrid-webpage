'use client';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { adminAllergens } from '@/consts/allergens';
import { Checkbox } from '@/components/ui/checkbox';
import { createNewProduct } from '@/actions/product';

const formSchema = z.object({
  image: z.instanceof(File),
  type: z.enum(['starter', 'mainDish', 'dessert']),
  price: z.coerce
    .number()
    .min(0.1, { message: 'Minimo 0.1' })
    .transform((val) => Number(val.toFixed(2))),
  minServings: z.coerce.number().optional(),
  allergens: z
    .array(
      z.enum([
        'gluten',
        'crustaceans',
        'eggs',
        'fish',
        'peanuts',
        'soy',
        'milk',
        'nuts',
        'celery',
        'mustard',
        'sesame',
        'so2',
        'lupin',
        'molluscs',
      ]),
    )
    .optional(),
  en: z.object({
    name: z.string().min(1, { message: 'Campo requerido' }),
    description: z.string().min(1, { message: 'Campo requerido' }),
  }),
  es: z.object({
    name: z.string().min(1, { message: 'Campo requerido' }),
    description: z.string().min(1, { message: 'Campo requerido' }),
  }),
  fr: z.object({
    name: z.string().min(1, { message: 'Campo requerido' }),
    description: z.string().min(1, { message: 'Campo requerido' }),
  }),
  de: z.object({
    name: z.string().min(1, { message: 'Campo requerido' }),
    description: z.string().min(1, { message: 'Campo requerido' }),
  }),
});
const NewProductForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      image: new File([], ''),
      type: undefined,
      price: undefined,
      minServings: undefined,
      allergens: [],
      en: {
        name: '',
        description: '',
      },
      de: {
        name: '',
        description: '',
      },
      fr: {
        name: '',
        description: '',
      },
      es: {
        name: '',
        description: '',
      },
    },
  });
  /* const onSubmit = async (values: z.infer<typeof formSchema>) => {
  
    const parsedData: INewProduct = {
      ...values,
      image: await bufferImgToBase64(values.image),
    };

    const resp = await adminApi.post('/product', JSON.stringify(parsedData));
  }; */
  return (
    <Form {...form}>
      <form
        /* onSubmit={form.handleSubmit(onSubmit)} */ action={createNewProduct}
        className="space-y-8"
      >
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Imagen</FormLabel>
                <FormControl>
                  <Input
                    accept=".jpg, .jpeg, .png"
                    type="file"
                    name="image"
                    onChange={(e) =>
                      field.onChange(e.target.files ? e.target.files[0] : null)
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Tipo de plato</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl className="text-lg">
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona tipo de plato" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="starter" className="text-lg">
                      Entrante
                    </SelectItem>
                    <SelectItem value="mainDish" className="text-lg">
                      Principal
                    </SelectItem>
                    <SelectItem value="dessert" className="text-lg">
                      Postre
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Precio</FormLabel>
                <FormControl className="text-lg">
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="minServings"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">
                  Ración Mínima {`(voluntario)`}
                </FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="allergens"
            render={({}) => (
              <FormItem>
                <div>
                  <FormLabel className="text-lg">
                    Alergenos {`(voluntario)`}
                  </FormLabel>
                  <FormDescription>Elige los alergenos</FormDescription>
                </div>
                <div className="flex flex-wrap items-start gap-8">
                  {adminAllergens.map((allergen) => (
                    <FormField
                      key={allergen.id}
                      control={form.control}
                      name="allergens"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={allergen.id}
                            className="flex items-center space-x-2 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(allergen.id)}
                                onCheckedChange={(checked: any) => {
                                  return checked
                                    ? field.onChange([
                                        ...field.value!,
                                        allergen.id,
                                      ])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value: any) => value !== allergen.id,
                                        ),
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-lg">
                              {allergen.label}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </div>
              </FormItem>
            )}
          />
        </div>
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold">Traducciones</h2>
          <div className="space-y-2">
            <h3 className="text-2xl">Español</h3>
            <FormField
              control={form.control}
              name="es.name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre del plato</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="es.description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descripción del plato</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl">Inglés</h3>
            <FormField
              control={form.control}
              name="en.name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre del plato</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="en.description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descripción del plato</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl">Alemán</h3>
            <FormField
              control={form.control}
              name="de.name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre del plato</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="de.description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descripción del plato</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl">Francés</h3>
            <FormField
              control={form.control}
              name="fr.name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre del plato</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fr.description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descripción del plato</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default NewProductForm;
