select t2.flightDate
     , t3.airlineName
     , t2.flightNumber
     , case when count(t1.illnessID) > 3 then 'Red'
            when count(t1.illnessID) between 2 and 3 then 'Yellow'
            else 'Green'
    end as 'Status'
from submission t1
         inner join flight t2
                    on t1.flightID = t2.flightID
         inner join airline t3
                    on t2.airlineID = t3.airlineID
group by 1, 2, 3;