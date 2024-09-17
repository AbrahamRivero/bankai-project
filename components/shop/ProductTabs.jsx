import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const ProductTabs = () => {
  return (
    <Tabs defaultValue="additional-info" className="w-full mt-12">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="additional-info">Información</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
      </TabsList>

      <TabsContent value="additional-info">
        <Card>
          <CardContent className="space-y-2">
            <p className="text-gray-600 mb-4">
              Embodying the raw, wayward spirit of rock &apos;n&apos; roll, the
              Kilburn portable active stereo speaker takes the unmistakable look
              and sound of Marshall, unplugs the chords, and takes the show on
              the road.
            </p>
            <p className="text-gray-600 mb-4">
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted
              hero with a well-balanced audio which boasts a clear midrange and
              extended highs for a sound.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="reviews">
        <Card>
          <CardContent className="space-y-2">
            <p className="text-gray-600 mb-4">
              Embodying the raw, wayward spirit of rock &apos;n&apos; roll, the
              Kilburn portable active stereo speaker takes the unmistakable look
              and sound of Marshall, unplugs the chords, and takes the show on
              the road.
            </p>
            <p className="text-gray-600 mb-4">
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted
              hero with a well-balanced audio which boasts a clear midrange and
              extended highs for a sound.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default ProductTabs;
