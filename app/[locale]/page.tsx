import { Img } from '@/components/Img';
import { buttonVariants } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '../../lib/utils';
import MaxWidthWrapper from '@/components/Wrappers/MaxWidthWrapper';
import { SmoothScrollLink } from '@/components/SmoothScrollElement';

export default function Home() {
  return (
    <>
      <div className=" bg-bgAlt py-8">
        <MaxWidthWrapper>
          <section className="grid grid-cols-1 px-[3vw] md:px-0 md:grid-cols-2 items-center gap-6">
            <div className='w-[80vw] mx-auto md:w-full'>
              <h2 className="text-center text-4xl sm:text-5xl font-semibold lg:text-6xl">
                A healthy meal delivered to your door, every single day
              </h2>
              <h6 className="mb-6 text-center md:text-left mt-8 text-xl lg:text-2xl">
                The smart 365-days-year food subscription that will make you eat
                healthy again. Tailored to your personal tastes and nutritional
                needs.
              </h6>

              <div className="text-center lg:space-x-8">
                <Link
                  href="/menu"
                  className={cn(
                    buttonVariants({ size: 'lg' }),
                    'hidden text-xl lg:inline-flex',
                  )}
                >
                  Check our Menu
                </Link>
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
        <section id="chef">
          <h2 className="my-16 text-center text-5xl">The Chef</h2>
          <div className="">
            <div>
              <Img
                url="https://res.cloudinary.com/dfupfbnez/image/upload/v1696760817/pexels-miquel-ferran-gomez-figueroa-3814446_vunxq8.jpg"
                optimized={false}
                altText={`Chef d'Arconso image`}
              />
            </div>
            <div>
              <h3>Chef d{`'`}Arconso: A culinary journey</h3>
              <p className="mx-auto my-6">
                Meet Chef DArconso, a culinary virtuoso with over 25 years of
                culinary expertise. Her journey in the world of gastronomy has
                been nothing short of extraordinary. Having honed her skills in
                the most prestigious kitchens around the globe, she now stands
                at the threshold of a new culinary adventure.
              </p>

              <p className="mb-6 sm:hidden">
                Now, Chef DArconso embarks on a new standalone project, bringing
                her unparalleled passion and expertise directly to you. Her
                dedication to culinary excellence remains unwavering as she
                introduces a range of experiences on this webpage that reflect
                her commitment to culinary innovation and the art of food.
              </p>

              <div className="text-center">
                <a href="/" target="_blank">
                  Check my Instagram
                </a>
              </div>
            </div>
          </div>
        </section>

        {/*    <ExperiencesSection /> */}

        <section className="text-center">
          <h3 className="mt-8">Testimonies </h3>
          <div>
            <div className="max-w-vw85 mx-auto ">
              <h6>Culinary Delight at Its Finest!</h6>
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
