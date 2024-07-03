const prisma = require("../prisma");

const seed = async () => {
  for (let i = 1; i <= 10; i++) {
    await prisma.puppy.upsert({
      where: { id: i },
      update: {},
      create: {
        id: i,
        name: `Puppy ${i}`,
        breed: `Breed${i}`,
      },
    });
  }
};

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
