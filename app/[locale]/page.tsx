import Image from 'next/image';
import { cn } from '../../lib/utils';
import { buttonVariants } from '@/components/ui/button';
import MaxWidthWrapper from '@/components/Wrappers/MaxWidthWrapper';
import { SmoothScrollLink } from '@/components/SmoothScrollElement';
import { ExperiencesSection } from '@/components/homePage/ExperiencesSection';
import LocaleLink from '@/components/LocaleLink';

export default function Home({ params }: { params: { locale: string } }) {
  const { locale } = params;
  return (
    <>
      <div className=" bg-bgAlt py-8">
        <MaxWidthWrapper>
          <section className="grid grid-cols-1 items-center gap-6 px-[3vw] md:grid-cols-2 md:px-0">
            <div className="mx-auto md:w-full">
              <h2 className="text-center text-4xl font-semibold sm:text-5xl lg:text-6xl">
                A healthy meal delivered to your door, every single day
              </h2>
              <h6 className="mb-6 mt-8 text-center text-xl md:text-left lg:text-2xl">
                The smart 365-days-year food subscription that will make you eat
                healthy again. Tailored to your personal tastes and nutritional
                needs.
              </h6>

              <div className="text-center lg:space-x-8">
                <LocaleLink
                  path="/menu"
                  styling={cn(
                    buttonVariants({ size: 'lg' }),
                    'hidden text-xl lg:inline-flex',
                  )}
                >
                  Check our menu
                </LocaleLink>
                <SmoothScrollLink
                  classes={cn(
                    buttonVariants({ variant: 'outline', size: 'lg' }),
                    'text-xl lg:inline-flex',
                  )}
                  scrollToId={'chef'}
                >
                  Learn More
                </SmoothScrollLink>
              </div>
            </div>
            <div>
              <Image
                src="https://res.cloudinary.com/dfupfbnez/image/upload/v1696712336/hero_ea7ibx.webp"
                width={600}
                height={500}
                alt="Hero-Image"
              />
            </div>
          </section>
        </MaxWidthWrapper>
      </div>

      <MaxWidthWrapper>
        <section id="chef" className="text-center">
          <h2 className="my-16 text-center text-5xl">The Chef</h2>
          <div className="grid grid-cols-1 items-center space-y-4 sm:grid-cols-2 sm:gap-6 sm:space-y-0">
            <div className="mx-auto">
              <Image
                src="https://res.cloudinary.com/dfupfbnez/image/upload/v1696760817/pexels-miquel-ferran-gomez-figueroa-3814446_vunxq8.jpg"
                width={500}
                height={500}
                unoptimized
                alt="chef photo"
              />
            </div>
            <div className="sm:flex sm:flex-col sm:justify-center md:text-left">
              <h3 className="text-2xl sm:text-4xl">
                Chef Bautista: A culinary journey
              </h3>
              <p className="my-6 sm:text-lg">
                Meet Chef DArconso, a culinary virtuoso with over 25 years of
                culinary expertise. Her journey in the world of gastronomy has
                been nothing short of extraordinary. Having honed her skills in
                the most prestigious kitchens around the globe, she now stands
                at the threshold of a new culinary adventure.
              </p>

              <p className="mb-6 hidden sm:text-lg lg:block">
                Now, Chef DArconso embarks on a new standalone project, bringing
                her unparalleled passion and expertise directly to you. Her
                dedication to culinary excellence remains unwavering as she
                introduces a range of experiences on this webpage that reflect
                her commitment to culinary innovation and the art of food.
              </p>

              <div className="text-center">
                <a
                  href={process.env.NEXT_PUBLIC_INSTAGRAM}
                  target="_blank"
                  className={cn(
                    buttonVariants({ variant: 'outline' }),
                    'sm:text-xl',
                  )}
                >
                  Check my Instagram
                </a>
              </div>
            </div>
          </div>
        </section>

        <ExperiencesSection />

        <section className="text-center">
          <h2 className="mb-8 mt-12 text-5xl">Testimonies </h2>
          <div>
            <div>
              <h4 className="mb-4 text-2xl">Culinary Delight at Its Finest!</h4>
              <p>
                Chef culinary expertise is a true revelation. The flavors in
                each dish are simply extraordinary. I get enough of the
                mouthwatering creations. Its a dining experience that will leave
                you craving for more. - Sarah W.
              </p>
            </div>
          </div>
        </section>
      </MaxWidthWrapper>
    </>
  );
}
