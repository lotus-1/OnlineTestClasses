BEGIN;

DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS class;
DROP TABLE IF EXISTS studentcla;


CREATE TABLE students (
  student_id VARCHAR(20) PRIMARY KEY,
  full_name VARCHAR(100) NOT NULL ,
  email VARCHAR(100) NOT NULL,
  password VARCHAR NOT NULL
);


INSERT INTO students (student_id, full_name, email, password) VALUES
 (20076678, 'Enass Kmal', 'enass@gmail.com', 123456);
INSERT INTO students (student_id, full_name,  email, password) VALUES
 (12356758, 'Loreen Hamdan', 'loren@gamil.com', 25852);
INSERT INTO students (student_id, full_name, email, password) VALUES
 (8321258, 'Hoda Mansor', 'huda@gamil.com', 54878);
INSERT INTO students (student_id, full_name, email, password) VALUES
 (1245673, 'Jasmine Badria','Jasmine@gmail.com', 87956);
INSERT INTO students (student_id, full_name,  email, password) VALUES
 (5454555, 'Sleem Kmal', 'sleem@gmail', 54652);


 CREATE TABLE class (
 class_id VARCHAR(2) PRIMARY KEY,
   class_teacher VARCHAR(100) NOT NULL,
   student_name VARCHAR(100) NOT NULL
 );

  -- CREATE TABLE class (
  -- class_id VARCHAR(2) PRIMARY KEY,
  --  class_teacher VARCHAR(100) NOT NULL,
  --  FOREIGN KEY (student_id) REFERENCES students (student_id)
  --  -- VARCHAR(100) NOT NULL
  -- );


 INSERT INTO class (class_id, class_teacher,  student_name) VALUES
  ( 7 , 'doaa Masad', 'Enass Kmal');
 INSERT INTO class (class_id, class_teacher,  student_name) VALUES
  ( 8, 'Foad', 'Loren Hamdan');
 INSERT INTO class ( class_id, class_teacher,student_name) VALUES
  ( 9, 'Maha Mansor','Huda Mansor');

CREATE TABLE studentcla (
  student_id VARCHAR(100),
  class_id VARCHAR(100),
 unique (student_id, class_id)
);


-- student_id REFERENCES students(student_id),
-- class_id REFERENCES class(class_id)

  INSERT INTO studentcla (student_id, class_id) VALUES
   (20076678, 7);
  INSERT INTO studentcla (student_id, class_id) VALUES
  (12356758, 8);
  INSERT INTO studentcla (student_id, class_id) VALUES
  (8321258, 9);
  INSERT INTO studentcla(student_id, class_id) VALUES
  (1245673, 8);
  INSERT INTO studentcla (student_id, class_id) VALUES
  (5454555, 7);

COMMIT;
