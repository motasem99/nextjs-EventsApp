const { MongoClient } = require('mongodb');

async function handler(req, res) {
  if (req.method === 'POST') {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes('@')) {
      res.status(422).json({ message: 'Invalid email address.' });
      return;
    }

    const client = await MongoClient.connect(
      'mongodb+srv://mutasem-NextjsProject:2741999@cluster0.6sm4t.mongodb.net/newsletter?retryWrites=true&w=majority'
    );
    const db = client.db();
    await db.collection('emails').insertOne({ email: userEmail });

    client.close();

    // const uri =
    //   'mongodb+srv://mutasem-NextjsProject:2741999@cluster0.6sm4t.mongodb.net/newsletter?retryWrites=true&w=majority';
    // const client = new MongoClient(uri, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // });
    // client.connect((err) => {
    //   const collection = client.db().collection('emails');
    //   // perform actions on the collection object
    //   client.close();
    // });

    console.log(userEmail);
    res.status(201).json({ message: 'Signed up!' });
  }
}

export default handler;
