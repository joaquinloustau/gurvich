var postRef = new Firebase('https://popping-heat-3599.firebaseio.com/obras');

post1.put("author", "gracehop");
post1.put("title", "Announcing COBOL, a New Programming Language");
postRef.push().setValue(post1);

post2.put("author", "alanisawesome");
post2.put("title", "The Turing Machine");
postRef.push().setValue(post2);

