export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="mb-6">Hi, I'm Stefan Blagojević</h1>
              <h2 className="text-muted-foreground mb-6">Fronted Developer</h2>
              <p className="mb-6"> text here</p>
              <p>another text</p>
            </div>
            <div className="flex justify-center">
              <div className="relative"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
