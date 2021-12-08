


SELECT jobs.*
FROM jobs
    LEFT JOIN usersjobs ON (jobs.id = usersjobs.JobId AND usersjobs.UserId = 19)
WHERE usersjobs.UserId IS NULL
-- ORDER BY RAND()
-- LIMIT 1
;

SELECT jobs.id FROM jobs ORDER BY jobs.id;

SELECT * FROM usersjobs ORDER BY UserId;


SELECT jobs.*
FROM jobs 
    LEFT JOIN usersjobs  ON (usersjobs.JobId = jobs.id AND usersjobs.UserId = 19)
WHERE usersjobs.UserId IS NULL
ORDER BY RAND() LIMIT 1
;


SELECT jobs.id, usersjobs.JobId, usersjobs.UserId
FROM jobs LEFT JOIN usersjobs  ON (usersjobs.JobId = jobs.id AND usersjobs.UserId = 4)
WHERE usersjobs.UserId IS NULL
;



WHERE usersjobs.UserId IS NULL
ORDER BY RAND() LIMIT 1
;


1           (2,u2) 
2           (1,u1)  
3           (1,u3)
4
5   

t1 JOIN t2 ON (job.id = usersjobs.jobid)

1 (1,u1)
1 (1,u3)
2 (2,u2)

t1 LEFT JOIN t2 (job.id = usersjobs.jobid)
1 (1,u1)
1 (1,u3)
2 (2,u2)
3 NULL
4 NULL
5 NULL


t1 JOIN t2 (job.id = usersjobs.jobid AND usersjobs.userId = u1)
1 (1, u1)

t1 JOIN t2 (job.id = usersjobs.jobid AND usersjobs.userId = u1)
1 (1, u1)
2 NULL
3 NULL
4 NULL
5 NULL

WHERE x IS NULL





2 

1a
1b
1c
2a
2b
2c
3a
3b
3c