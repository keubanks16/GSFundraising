// GS Baseball slow pitch softball fundraiser signup page.
// The event details, prices and Venmo / Cash App come from the GS Baseball Hub
// (Team → Softball Fundraiser → Settings). DEFAULTS are used until those are saved.
window.FUND_CONFIG = {
  DEFAULTS: { title: "GS Baseball Slow Pitch Softball Fundraiser", teamPrice: 200, personPrice: 5 },
  // The Hub's Firebase project (public identifiers; the database rules protect the data)
  FIREBASE: {
    apiKey: "AIzaSyBfTjGdAr9nXPEp30X7c9Ot01fT5oGV7_0",
    authDomain: "stingerz-scorebook.firebaseapp.com",
    projectId: "stingerz-scorebook",
    appId: "1:667344236029:web:9f1372d2e6d96321587d94"
  }
};
