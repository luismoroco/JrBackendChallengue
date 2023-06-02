\c db_quotes

INSERT INTO autor (name)
VALUES ('Joanne Rowling'), ('Edsger Dijkstra'), ('Friedrich Nietzsche');

INSERT INTO quotes (quote, autor_id)
VALUES
  ('If you want to see the true measure of a man, watch how he treats his inferiors, not his equals.', 1),
  ('The internet has been a boon and a curse for teenagers.', 1),
  ('It is our choices... that show what we truly are, far more than our abilities.', 1);

INSERT INTO quotes (quote, autor_id)
VALUES
  ('Simplicity is prerequisite for reliability.', 2),
  ('Program testing can be used to show the presence of bugs, but never to show their absence!', 2),
  ('Perfecting oneself is as much unlearning as it is learning.', 2);

INSERT INTO quotes (quote, autor_id)
VALUES
  ('The true man wants two things: danger and play.', 3),
  ('Be careful, lest in casting out your demon you exorcise the best thing in you.', 3),
  ('The secret for harvesting from existence the greatest fruitfulness and the greatest enjoyment is: to live dangerously!', 3);

INSERT INTO users (username, password)
VALUES
  ('root', 'makanaki'),
  ('master', 'faraonloveshady');