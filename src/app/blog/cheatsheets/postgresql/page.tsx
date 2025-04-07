import "@/styles/cheatsheets.css";

export default function PostgresqlCheatsheet() {
  return (
    <div className="w-full">
      <h1 id="postgres-sql-query-cheat-sheet">
        Postgres SQL query cheat sheet
      </h1>
      <h4 id="hope-to-enjoy-">Hope to enjoy!</h4>
      <p>
        <a href="#select">SELECT</a>
        <br />
        <a href="#where">WHERE</a>
        <br />
        <a href="#crud-create-read-update-delete">CRUD</a>
        <br />
        <a href="#change-configuration">Change Configuration</a>
        <br />
        <a href="#aggregation-and-grouping">Aggregation &amp; Grouping</a>
        <br />
        <a href="#pattern-matching">Pattern matching</a>
        <br />
        <a href="#join">JOIN</a>
        <br />
        <a href="#union">UNION</a>
        <br />
        <a href="#constraint">Constraint</a>
        <br />
        <a href="#on-delete">On delete</a>
        <br />
        <a href="#sub-query">Sub query</a>
        <br />
        <a href="#common-table-expressions">CTE</a>
        <br />
        <a href="#index">INDEX</a>
        <br />
        <a href="#view-and-stored-procedure">View and Procedures</a>
        <br />
        <a href="#function">Function</a>
        <br />
        <a href="#trigger">Trigger</a>
        <br />
        <a href="#transferring-data">Transferring Data</a>
        <br />
        <a href="#vaccum">Vaccum</a>
        <br />
        <a href="#other">Other</a>{" "}
      </p>
      <h1 id="select">SELECT</h1>
      <p>
        The SELECT statement is used to select data from a database.The data
        returned is stored in a result table, called the result-set
      </p>
      <ul>
        <li>
          <p>return all rows from selected table: </p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">SELECT</span> *{" "}
              <span className="hljs-keyword">FROM</span> table_name;{"\n"}
              {"    "}
            </code>
          </pre>
        </li>
        <li>
          <p>return un-repeated rows: </p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">SELECT</span>{" "}
              <span className="hljs-keyword">DISTINCT</span> *{" "}
              <span className="hljs-keyword">FROM</span> table_name;{"\n"}
              {"    "}
            </code>
          </pre>
        </li>
        <li>
          <p>return unique-combination: </p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">SELECT</span>{" "}
              <span className="hljs-keyword">DISTINCT</span> column1, column2{" "}
              <span className="hljs-keyword">FROM</span> table_name;{"\n"}
              {"    "}
            </code>
          </pre>
        </li>
        <li>
          <p>return all rows but skip first 10 rows: </p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">SELECT</span> *{" "}
              <span className="hljs-keyword">FROM</span> table_name{" "}
              <span className="hljs-keyword">OFFSET</span>{" "}
              <span className="hljs-number">10</span>;{"\n"}
              {"    "}
            </code>
          </pre>
        </li>
        <li>
          <p>
            skip first 10 rows and then return 5 rows after that (always it run
            OFFSET then LIMIT in combination cases):
          </p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">SELECT</span> *{" "}
              <span className="hljs-keyword">FROM</span> table_name{" "}
              <span className="hljs-keyword">OFFSET</span>{" "}
              <span className="hljs-number">10</span>{" "}
              <span className="hljs-keyword">LIMIT</span>{" "}
              <span className="hljs-number">5</span>;{"\n"}
              {"    "}
            </code>
          </pre>
        </li>
        <li>
          <p>
            return column1 and greatest and put value in greatest-column
            according to the comparison result:{" "}
          </p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">SELECT</span> column1,{" "}
              <span className="hljs-keyword">GREATEST</span>(
              <span className="hljs-number">30</span>,{" "}
              <span className="hljs-number">2</span> * column1){"  "}
              <span className="hljs-keyword">FROM</span> table_name;{"\n"}
              {"    "}
            </code>
          </pre>
        </li>
        <li>
          <p>
            return column1 and least and put value in least-column according to
            the comparison result:{" "}
          </p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">SELECT</span> column1,{" "}
              <span className="hljs-keyword">LEAST</span>(
              <span className="hljs-number">30</span>,{" "}
              <span className="hljs-number">2</span> * column1){"  "}
              <span className="hljs-keyword">FROM</span> table_name;{"\n"}
              {"    "}
            </code>
          </pre>
        </li>
        <li>
          <p>
            <strong>ORDER BY</strong>: is used to sort the result-set in
            ascending or descending order. This keyword sorts the records in
            ascending order (ASC) by default. To sort the records in descending
            order, use the DESC keyword.
          </p>
          <p>
            {" "}
            In this example we passed double columns to the ORDER BY, This means
            when we have the same value on column1, then these rows should order
            based on the second column:
          </p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">SELECT</span> column1, column2{" "}
              <span className="hljs-keyword">FROM</span> table_name{" "}
              <span className="hljs-keyword">ORDER</span>{" "}
              <span className="hljs-keyword">BY</span> column1{" "}
              <span className="hljs-keyword">ASC</span>, column2{" "}
              <span className="hljs-keyword">DESC</span>;{"\n"}
              {"    "}
            </code>
          </pre>
          <p>
            {" "}
            In Postgres, you can return results distinct on a special column
            Provided that the result be ordered by that column:{" "}
          </p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">SELECT</span>{" "}
              <span className="hljs-keyword">DISTINCT</span>{" "}
              <span className="hljs-keyword">ON</span> (column1) column1,
              column2 <span className="hljs-keyword">FROM</span> table_name{" "}
              <span className="hljs-keyword">ORDER</span>{" "}
              <span className="hljs-keyword">BY</span> column1{" "}
              <span className="hljs-keyword">LIMIT</span>{" "}
              <span className="hljs-number">10</span>;{"\n"}
              {"    "}
            </code>
          </pre>
        </li>
        <li>
          <p>
            <strong>Math Operation</strong>: it is possible to do math operation
            on column values and return them as a new column. add(+),
            subtract(-), multiply(*), divide(/), exponent(^), square root(|/),
            absolute value(@) and remainder(%) are some candidate for this
            situations.{" "}
          </p>
          <p>
            {" "}
            Note: when you make a new temporary column with math operation, this
            column has not any name, But you can define a name for it with "AS":
          </p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">SELECT</span> column1, column2 *
              column3 <span className="hljs-keyword">AS</span> total{" "}
              <span className="hljs-keyword">FROM</span> table_name{" "}
              <span className="hljs-keyword">LIMIT</span>{" "}
              <span className="hljs-number">10</span>;{"\n"}
              {"    "}
            </code>
          </pre>
        </li>
        <li>
          <p>
            <strong>String Operation</strong>: in addition to math operators,
            SQL offers us some operators and functions to work with strings. we
            can contact two or more strings with the || or concat() function.
            there are also some available functions like LENGTH(), LOWER(), and
            UPPER().{" "}
          </p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">SELECT</span> column1, city ||{" "}
              <span className="hljs-string">', '</span> || country{" "}
              <span className="hljs-keyword">AS</span> location{" "}
              <span className="hljs-keyword">FROM</span> table_name;{"\n"}
              {"      "}
              <span className="hljs-keyword">SELECT</span>{" "}
              <span className="hljs-keyword">CONCAT</span>(
              <span className="hljs-keyword">LOWER</span>(
              <span className="hljs-keyword">name</span>),{" "}
              <span className="hljs-string">' - '</span>,{" "}
              <span className="hljs-keyword">UPPER</span>(family)){" "}
              <span className="hljs-keyword">AS</span> full_name{" "}
              <span className="hljs-keyword">FROM</span> table_name;{"\n"}
              {"    "}
            </code>
          </pre>
        </li>
      </ul>
      <p>
        <br />
      </p>
      <h1 id="where">WHERE</h1>
      <p>
        The SQL WHERE clause is used to specify a condition while fetching the
        data from a single table or by joining with multiple tables. If the
        given condition is satisfied, then only it returns a specific value from
        the table. You should use the WHERE clause to filter the records and
        fetching only the necessary records.
      </p>
      <ul>
        <li>
          <p>Example:</p>
          <p>
            {" "}
            example of working with <strong>is</strong> and{" "}
            <strong>is not</strong>:
          </p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">SELECT</span> *{" "}
              <span className="hljs-keyword">FROM</span> table_name{" "}
              <span className="hljs-keyword">WHERE</span> column1{" "}
              <span className="hljs-keyword">IS</span>{" "}
              <span className="hljs-literal">null</span>;{"\n"}
              {"    "}
            </code>
          </pre>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">SELECT</span> *{" "}
              <span className="hljs-keyword">FROM</span> table_name{" "}
              <span className="hljs-keyword">WHERE</span> column1{" "}
              <span className="hljs-keyword">IS</span>{" "}
              <span className="hljs-keyword">not</span>{" "}
              <span className="hljs-literal">null</span>;{"\n"}
              {"    "}
            </code>
          </pre>
          <p>
            {" "}
            example of working with <strong>and</strong>, <strong>or</strong>:
          </p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">SELECT</span> *{" "}
              <span className="hljs-keyword">FROM</span> table_name {"\n"}
              {"      "}
              <span className="hljs-keyword">WHERE</span> (column1 &gt;{" "}
              <span className="hljs-number">100</span>{" "}
              <span className="hljs-keyword">AND</span> column2=
              <span className="hljs-string">'berlin'</span>){" "}
              <span className="hljs-keyword">OR</span> (column2=
              <span className="hljs-string">'berlin'</span>{" "}
              <span className="hljs-keyword">AND</span>{" "}
              <span className="hljs-keyword">NOT</span> column3=
              <span className="hljs-number">100</span>);{"\n"}
              {"    "}
            </code>
          </pre>
          <p>
            {" "}
            example of working with <strong>between</strong>:
          </p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">SELECT</span> *{" "}
              <span className="hljs-keyword">FROM</span> table_name{" "}
              <span className="hljs-keyword">WHERE</span> column1{" "}
              <span className="hljs-keyword">BETWEEN</span>{" "}
              <span className="hljs-number">10</span>{" "}
              <span className="hljs-keyword">AND</span>{" "}
              <span className="hljs-number">50</span>;{"\n"}
              {"    "}
            </code>
          </pre>
          <p>
            {" "}
            example of working with <strong>in</strong>:
          </p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">SELECT</span> column1, column2{" "}
              <span className="hljs-keyword">FROM</span> table_name {"\n"}
              {"      "}
              <span className="hljs-keyword">WHERE</span> column1{" "}
              <span className="hljs-keyword">NOT</span>{" "}
              <span className="hljs-keyword">IN</span> (
              <span className="hljs-number">300</span>,{" "}
              <span className="hljs-number">400</span>){" "}
              <span className="hljs-keyword">and</span> column2 !={" "}
              <span className="hljs-string">'somethings'</span>;{"\n"}
              {"    "}
            </code>
          </pre>
        </li>
      </ul>
      <p>
        <br />
      </p>
      <h1 id="crud-create-read-update-delete-">
        CRUD (create, read, update, delete)
      </h1>
      <ul>
        <li>
          <p>
            <strong>CREATE database</strong>:{" "}
          </p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">CREATE</span>{" "}
              <span className="hljs-keyword">DATABASE</span> database_name;
              {"\n"}
              {"    "}
            </code>
          </pre>
        </li>
        <li>
          <p>
            <strong>CREATE table</strong>:
          </p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-type">CREATE</span>{" "}
              <span className="hljs-type">TABLE</span> table_name ({"\n"}
              {"          "}column1 data
              <span className="hljs-keyword">type</span>,{"\n"}
              {"          "}column2 data
              <span className="hljs-keyword">type</span>,{"\n"}
              {"      "});{"\n"}
              {"    "}
            </code>
          </pre>
        </li>
        <li>
          <p>
            <strong>Add row</strong>:
          </p>
          <pre>
            <code className="lang-sql">
              {"  "}INSERT INTO table_name (
              <span className="hljs-name">column1</span>, column2) VALUES (
              <span className="hljs-name">value1</span>, value2)
              <span className="hljs-comment">;</span>
              {"\n"}
              {"    "}
            </code>
          </pre>
          <p>
            {" "}
            Note: To insert data into a table that has a foreign key column, we
            should insert the value that was in the referenced column or we can
            insert Null. It will lead to an error if we do not do this.
          </p>
        </li>
        <li>
          <p>
            <strong>Update row</strong>:
          </p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">UPDATE</span> table_name{" "}
              <span className="hljs-keyword">SET</span> column1=value1,
              column2=value2 <span className="hljs-keyword">WHERE</span>{" "}
              condition;
              {"\n"}
              {"    "}
            </code>
          </pre>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">UPDATE</span> products{" "}
              <span className="hljs-keyword">SET</span> price=
              <span className="hljs-number">9999</span>{" "}
              <span className="hljs-keyword">WHERE</span> price{" "}
              <span className="hljs-keyword">is</span>{" "}
              <span className="hljs-literal">NULL</span>;{"\n"}
              {"    "}
            </code>
          </pre>
          <p>
            {" "}
            Note: To prevent updating unwanted columns, always use WHERE when
            updating rows.
          </p>
        </li>
        <li>
          <p>
            <strong>DELETE database</strong>:{" "}
          </p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">DROP</span>{" "}
              <span className="hljs-keyword">DATABASE</span> database_name;
              {"\n"}
              {"    "}
            </code>
          </pre>
        </li>
        <li>
          <p>
            <strong>DELETE table</strong>:{" "}
          </p>
          <pre>
            <code className="lang-sql">
              {"  "}DROP <span className="hljs-keyword">TABLE</span> table_name
              {"\n"}
              {"    "}
            </code>
          </pre>
        </li>
        <li>
          <p>
            <strong>DELETE row</strong>:
          </p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">DELETE</span>{" "}
              <span className="hljs-keyword">FROM</span> table_name{" "}
              <span className="hljs-keyword">WHERE</span> condition;{"\n"}
              {"    "}
            </code>
          </pre>
          <p>
            {" "}
            Note: To prevent deleting unwanted columns, always use WHERE when
            deleting rows.
          </p>
        </li>
      </ul>
      <p>
        <br />
      </p>
      <h1 id="change-configuration">Change Configuration</h1>
      <p>
        The ALTER TABLE statement is used to add, delete, or modify columns in
        an existing table. They also used to add and drop various constraints on
        an existing table:
      </p>
      <ul>
        <li>
          <p>Rename table:</p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">ALTER</span>{" "}
              <span className="hljs-keyword">TABLE</span> table_name{" "}
              <span className="hljs-keyword">RENAME</span>{" "}
              <span className="hljs-keyword">TO</span> new_table_name;{"\n"}
              {"    "}
            </code>
          </pre>
        </li>
        <li>
          <p>Add column:</p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">ALTER</span>{" "}
              <span className="hljs-keyword">TABLE</span> table_name{" "}
              <span className="hljs-keyword">ADD</span>{" "}
              <span className="hljs-keyword">COLUMN</span> column_name datatype;
              {"\n"}
              {"    "}
            </code>
          </pre>
        </li>
        <li>
          <p>Rename column:</p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">ALTER</span>{" "}
              <span className="hljs-keyword">TABLE</span> table_name{" "}
              <span className="hljs-keyword">RENAME</span> column_name{" "}
              <span className="hljs-keyword">TO</span> new_column_name;{"\n"}
              {"    "}
            </code>
          </pre>
        </li>
        <li>
          <p>Delete column:</p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">ALTER</span>{" "}
              <span className="hljs-keyword">TABLE</span> table_name{" "}
              <span className="hljs-keyword">DROP</span>{" "}
              <span className="hljs-keyword">COLUMN</span> column_name;{"\n"}
              {"    "}
            </code>
          </pre>
        </li>
        <li>
          <p>Change column datatype:</p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">ALTER</span>{" "}
              <span className="hljs-keyword">TABLE</span> table_name{" "}
              <span className="hljs-keyword">COLUMN</span> column_name{" "}
              <span className="hljs-keyword">TYPE</span> datatype;{"\n"}
              {"    "}
            </code>
          </pre>
          <p>
            {" "}
            Sometimes it is not possible to cast automatically some datatype to
            another for example integer to boolean. In these cases can use:
          </p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">ALTER</span>{" "}
              <span className="hljs-keyword">TABLE</span> table_name{" "}
              <span className="hljs-keyword">ALTER</span>{" "}
              <span className="hljs-keyword">COLUMN</span> column_name{" "}
              <span className="hljs-keyword">TYPE</span>{" "}
              <span className="hljs-built_in">BOOLEAN</span>{" "}
              <span className="hljs-keyword">USING</span> (column_name::
              <span className="hljs-built_in">BOOLEAN</span>);{"\n"}
              {"    "}
            </code>
          </pre>
        </li>
        <li>
          <p>Change column constraint:</p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">ALTER</span>{" "}
              <span className="hljs-keyword">TABLE</span> table_name{" "}
              <span className="hljs-keyword">ALTER</span>{" "}
              <span className="hljs-keyword">COLUMN</span> column_name{" "}
              <span className="hljs-keyword">SET</span>{" "}
              <span className="hljs-keyword">NOT</span>{" "}
              <span className="hljs-literal">NULL</span>;{"\n"}
              {"    "}
            </code>
          </pre>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">ALTER</span>{" "}
              <span className="hljs-keyword">TABLE</span> table_name{" "}
              <span className="hljs-keyword">ALTER</span>{" "}
              <span className="hljs-keyword">COLUMN</span> column_name{" "}
              <span className="hljs-keyword">SET</span>{" "}
              <span className="hljs-keyword">DEFAULT</span>{" "}
              <span className="hljs-number">1000</span>;{"\n"}
              {"    "}
            </code>
          </pre>
        </li>
      </ul>
      <p>
        <br />
      </p>
      <h1 id="aggregation-and-grouping">Aggregation and Grouping</h1>
      <p>
        An aggregate function in SQL performs a calculation on multiple values
        and returns a single value. SQL provides many aggregate functions that
        include avg, count, sum, min, max, etc. An aggregate function ignores
        NULL values when it performs the calculation, except for the count
        function.{" "}
      </p>
      <ul>
        <li>
          <p>
            <strong>Aggregation Example</strong>:
          </p>
          <p> Note: We can not use aggregate and other column in same SELECT</p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">SELECT</span>{" "}
              <span className="hljs-keyword">MAX</span>(column1){" "}
              <span className="hljs-keyword">FROM</span> table_name{"\n"}
              {"      "}
              <span className="hljs-keyword">SELECT</span>{" "}
              <span className="hljs-keyword">MIN</span>(column1){" "}
              <span className="hljs-keyword">FROM</span> table_name{"\n"}
              {"      "}
              <span className="hljs-keyword">SELECT</span>{" "}
              <span className="hljs-keyword">AVG</span>(column1){" "}
              <span className="hljs-keyword">FROM</span> table_name{"\n"}
              {"      "}
              <span className="hljs-keyword">SELECT</span>{" "}
              <span className="hljs-keyword">SUM</span>(column1){" "}
              <span className="hljs-keyword">FROM</span> table_name{"\n"}
              {"      "}
              <span className="hljs-keyword">SELECT</span>{" "}
              <span className="hljs-keyword">COUNT</span>(*){" "}
              <span className="hljs-keyword">FROM</span> table_name;{"\n"}
              {"    "}
            </code>
          </pre>
        </li>
        <li>
          <p>
            <strong>GROUP BY</strong>: groups rows that have the same values
            into summary rows, like "find the number of customers in each
            country". It is often used with aggregate functions that learned
            about it.
          </p>
          <p>
            {" "}
            Note: when we group a table, just grouped column is directly
            accessible. For example in the below code we grouped our table based
            on column1 so we can just select column1 in SELECT - FROM:
          </p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">SELECT</span> column1{" "}
              <span className="hljs-keyword">FROM</span> table_name{" "}
              <span className="hljs-keyword">WHERE</span> total &gt;{" "}
              <span className="hljs-number">2000</span>{" "}
              <span className="hljs-keyword">GROUP</span>{" "}
              <span className="hljs-keyword">BY</span> column1;{"\n"}
              {"    "}
            </code>
          </pre>
          <p>
            {" "}
            Note: After grouping a table based on a special column, other
            columns in this temporary table are reachable through Aggregate
            functions or we can access them directly if they was unique(single)
            for every group:
          </p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">SELECT</span> column1,{" "}
              <span className="hljs-keyword">MAX</span>(column2){" "}
              <span className="hljs-keyword">FROM</span> table_name{" "}
              <span className="hljs-keyword">GROUP</span>{" "}
              <span className="hljs-keyword">BY</span> column1;{"\n"}
              {"      "}
              <span className="hljs-keyword">SELECT</span> column1,{" "}
              <span className="hljs-keyword">COUNT</span>(*){" "}
              <span className="hljs-keyword">FROM</span> table_name{" "}
              <span className="hljs-keyword">GROUP</span>{" "}
              <span className="hljs-keyword">BY</span> column1;{"\n"}
              {"    "}
            </code>
          </pre>
          <p> Example of counting un-repeated rows: </p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">SELECT</span>{" "}
              <span className="hljs-keyword">COUNT</span>(
              <span className="hljs-keyword">DISTINCT</span> country){" "}
              <span className="hljs-keyword">FROM</span> table_name{" "}
              <span className="hljs-keyword">GROUP</span>{" "}
              <span className="hljs-keyword">BY</span> country;{"\n"}
              {"    "}
            </code>
          </pre>
        </li>
        <li>
          <p>
            <strong>Having</strong>: group by will use to groups rows by a
            unique set of values but having is for filtering the set of groups.
            It is not necessary to use having with the group by but if we want
            to do some filter on the group then we should use having:
          </p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">SELECT</span> column1, COUNT
              <span className="hljs-comment">
                (*) FROM table_name WHERE column1 &gt; 2000 {"\n"}
                {"      "}GROUP BY column1 HAVING COUNT(*)
              </span>{" "}
              &gt; <span className="hljs-number">2</span>;{"\n"}
              {"    "}
            </code>
          </pre>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">SELECT</span> column1,{" "}
              <span className="hljs-keyword">SUM</span>(column2 * column3){" "}
              <span className="hljs-keyword">FROM</span> table_name {"\n"}
              {"      "}
              <span className="hljs-keyword">GROUP</span>{" "}
              <span className="hljs-keyword">BY</span> column1{" "}
              <span className="hljs-keyword">HAVING</span>{" "}
              <span className="hljs-keyword">SUM</span>(column2 * column3) &gt;{" "}
              <span className="hljs-number">1000</span>;{"\n"}
              {"    "}
            </code>
          </pre>
        </li>
      </ul>
      <p>
        <br />
      </p>
      <h1 id="pattern-matching">Pattern matching</h1>
      <ul>
        <li>
          <p>
            <strong>SQL pattern matching</strong>: enables you to use _ to match
            any single character and % to match an arbitrary number of
            characters (including zero characters).
            <br />
            Some examples are shown here. Do not use = or &lt;&gt; when you use
            SQL patterns. Use the LIKE or NOT LIKE comparison operators instead.
          </p>
          <p> start whith A, continue with everything, end to e:</p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">SELECT</span> *{" "}
              <span className="hljs-keyword">FROM</span> table_name{" "}
              <span className="hljs-keyword">WHERE</span> column1{" "}
              <span className="hljs-keyword">LIKE</span>{" "}
              <span className="hljs-string">'A%e'</span>;{"\n"}
              {"    "}
            </code>
          </pre>
          <p>
            {" "}
            start whith A, continue with everything, e, continue with
            everything,
          </p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">SELECT</span> *{" "}
              <span className="hljs-keyword">FROM</span> table_name{" "}
              <span className="hljs-keyword">WHERE</span> column1{" "}
              <span className="hljs-keyword">LIKE</span>{" "}
              <span className="hljs-string">'A%e%'</span>;{"\n"}
              {"    "}
            </code>
          </pre>
          <p> start whith A, just 1 char between, f, everything:</p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">SELECT</span> *{" "}
              <span className="hljs-keyword">FROM</span> table_name{" "}
              <span className="hljs-keyword">WHERE</span> column1{" "}
              <span className="hljs-keyword">LIKE</span>{" "}
              <span className="hljs-string">'A_f%'</span>;{"\n"}
              {"    "}
            </code>
          </pre>
        </li>
        <li>
          <p>
            <strong>Regex pattern matching</strong>: the TILDE “~” operator
            brings us to the more complex pattern matching operator. It matches
            regular expressions in different ways:{" "}
          </p>
          <p>
            {" "}
            | Operator | Description | | ----------- | ----------- | | ~ |
            Matches regular expression, case sensitive | | ~
            <em>
              {" "}
              | Matches regular expression, case insensitive | | !~ | Does not
              match regular expression, case sensitive | | !~
            </em>{" "}
            | Does not match regular expression, case insensitive |
          </p>
        </li>
      </ul>
      <pre>
        <code>
          ```sql{"\n"}
          {"    "}SELECT * FROM table_name WHERE column1 ~{" "}
          <span className="hljs-string">'^[A-Z][0-9].*$'</span>;{"\n"}
          {"    "}```{"\n"}
          {"    "}
          {"\n"}
          {"    "}You can use SQL regular expression pattern to extract a
          substring <span className="hljs-keyword">from</span> a string instead{" "}
          <span className="hljs-keyword">of</span> returning whole{" "}
          <span className="hljs-keyword">of</span> it:{"\n"}
          {"    "}
          {"\n"}
          {"    "}```sql{"\n"}
          {"    "}SUBSTRING(string, matching_pattern);{"\n"}
          {"    "}```{"\n"}
          {"    "}
          {"\n"}
          {"    "}```sql{"\n"}
          {"    "}SELECT SUBSTRING (column1,{" "}
          <span className="hljs-string">'(.+@[^ ]+)'</span>) FROM table_name
          WHERE column1 ~ <span className="hljs-string">'^From'</span>;{"\n"}
          {"    "}```{"\n"}
          {"    "}
          {"\n"}
          {"    "}The PostgreSQL REGEXP_MATCHES() function matches a regular
          expression against a string and returns matched substrings.{"\n"}
          {"    "}
          {"\n"}
          {"    "}```sql{"\n"}
          {"    "}REGEXP_MATCHES(source_string, pattern [, flags]){"\n"}
          {"    "}```{"\n"}
          {"    "}
          {"\n"}
          {"    "}```sql{"\n"}
          {"    "}SELECT REGEXP_MATCHES(description,{" "}
          <span className="hljs-string">'Cat | Dog'</span>) FROM film;{"\n"}
          {"    "}```{"\n"}
          {"    "}
        </code>
      </pre>
      <p>
        <br />
      </p>
      <h1 id="join">JOIN</h1>
      <h3 id="select-column-from-different-table-">
        Select column from different table:
      </h3>
      <p>
        We use join to merge different tables for reaching something meaningful.
        In this section, we’ll show how to do that using different types of
        joins:
      </p>
      <ul>
        <li>
          <p>
            <strong>INNER JOIN</strong>: An inner join focuses on the
            commonality between two tables. When using an inner join, there must
            be at least some matching data between two (or more) tables that are
            being compared. An inner join searches tables for matching or
            overlapping data. Upon finding it, the inner join combines and
            returns the information into one new table. So you’ll use INNER JOIN
            when you want to return only records having pair on both sides.{" "}
          </p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">SELECT</span> column1, column2{" "}
              <span className="hljs-keyword">FROM</span> table_one{" "}
              <span className="hljs-keyword">INNER</span>{" "}
              <span className="hljs-keyword">JOIN</span> table_two {"\n"}
              {"      "}
              <span className="hljs-keyword">ON</span>{" "}
              table_one.count=table_two.count;{"\n"}
              {"    "}
            </code>
          </pre>
          <p>
            {" "}
            Note: if there is some column that have same name in two different
            tables, Then you can not Join like above code. Instead you should
            define alias or note the table name for columns. See this example:{" "}
          </p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">SELECT</span> table_one.column1,
              table_two.column2 <span className="hljs-keyword">FROM</span>{" "}
              table_one
              {"\n"}
              {"      "}
              <span className="hljs-keyword">INNER</span>{" "}
              <span className="hljs-keyword">JOIN</span> table_two{" "}
              <span className="hljs-keyword">on</span>{" "}
              table_one.id=table_two.id;
              {"\n"}
              {"    "}
            </code>
          </pre>
          <p>
            {" "}
            Note: if you want to return columns from different tables with the
            same title, it is best to set alias name for them to use as a
            temporary name in column header. See this example:{" "}
          </p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">
                SELECT
              </span> table_one.column1 <span className="hljs-keyword">AS</span>{" "}
              <span className="hljs-keyword">name</span>, table_two.column1{" "}
              <span className="hljs-keyword">AS</span> other_name{" "}
              <span className="hljs-keyword">FROM</span> table_one{"\n"}
              {"      "}
              <span className="hljs-keyword">INNER</span>{" "}
              <span className="hljs-keyword">JOIN</span> table_two{" "}
              <span className="hljs-keyword">on</span>{" "}
              table_one.id=table_two.id;
              {"\n"}
              {"    "}
            </code>
          </pre>
          <p> example of inner join between three different tables:</p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">SELECT</span> table_one.first,
              table_one.last, table_two.start, table_two.end,
              table_three.outcome
              {"\n"}
              {"      "}
              <span className="hljs-keyword">FROM</span> table_one{"\n"}
              {"      "}
              <span className="hljs-keyword">INNER</span>{" "}
              <span className="hljs-keyword">JOIN</span> table_two{" "}
              <span className="hljs-keyword">ON</span> table_two.employee =
              table_one.id{"\n"}
              {"      "}
              <span className="hljs-keyword">INNER</span>{" "}
              <span className="hljs-keyword">JOIN</span> table_three{" "}
              <span className="hljs-keyword">ON</span> table_two.outcome =
              table_three.id{"\n"}
              {"      "}
              <span className="hljs-keyword">ORDER</span>{" "}
              <span className="hljs-keyword">BY</span> table_two.start{" "}
              <span className="hljs-keyword">ASC</span>;{"\n"}
              {"    "}
            </code>
          </pre>
        </li>
      </ul>
      <ul>
        <li>
          <p>
            <strong>LEFT JOIN</strong>: Writing queries that use LEFT JOINs
            doesn’t differ a lot when compared to writing queries using INNER
            JOINs. The result would, of course, be different (at least in cases
            when some records don’t have a pair in other tables).
            <br />
            The result of LEFT JOIN shall be the same as the result of INNER
            JOIN + we’ll have rows, from the “left” table, without a pair in the
            “right” table.
          </p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">SELECT</span> column1, column2{" "}
              <span className="hljs-keyword">FROM</span> table_name{" "}
              <span className="hljs-keyword">LEFT</span>{" "}
              <span className="hljs-keyword">JOIN</span> table_two {"\n"}
              {"      "}
              <span className="hljs-keyword">ON</span>{" "}
              table_name.count=table_two.count;{"\n"}
              {"    "}
            </code>
          </pre>
        </li>
        <li>
          <p>
            <strong>RIGHT JOIN</strong>: The result of RIGHT JOIN shall be the
            same as the result of INNER JOIN + we’ll have rows, from the “right”
            table, without a pair in the “left” table. So it will return all
            from right but just put value if there is a pair in left
          </p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">SELECT</span> column1, column2{" "}
              <span className="hljs-keyword">FROM</span> table_name{" "}
              <span className="hljs-keyword">RIGHT</span>{" "}
              <span className="hljs-keyword">JOIN</span> table_two {"\n"}
              {"      "}
              <span className="hljs-keyword">ON</span>{" "}
              table_name.count=table_two.count;{"\n"}
              {"    "}
            </code>
          </pre>
        </li>
        <li>
          <p>
            <strong>SELF JOIN</strong>: A self join is a regular join, but the
            table is joined with itself (T1 and T2 are different table aliases
            for the same table):
          </p>
          <pre>
            <code className="lang-sql">
              {"  "}SELECT <span className="hljs-built_in">t1</span>.column1,{" "}
              <span className="hljs-built_in">t2</span>.column1{"\n"}
              {"      "}FROM table_name{" "}
              <span className="hljs-built_in">t1</span>,{"  "}table_name{" "}
              <span className="hljs-built_in">t2</span> {"\n"}
              {"      "}WHERE <span className="hljs-built_in">t1</span>.column1
              &gt; <span className="hljs-built_in">t2</span>.column1
              <span className="hljs-comment">;</span>
              {"\n"}
              {"    "}
            </code>
          </pre>
        </li>
      </ul>
      <p>
        <br />
      </p>
      <h1 id="union">UNION</h1>
      <p>
        There are several options you can use to combine data from multiple
        data. One of those option is to decide whether to use Joins or Unions.
        <br />
        In simple terms, joins combine data into new columns. The query uses a
        “join condition” to match column together to form new rows. The new rows
        consist of column values from both tables. But
        <strong>Unions</strong> combine data into new rows. Here the union takes
        the result as rows and appends them together row by row.
      </p>
      <ul>
        <li>
          <p>
            <strong>Union</strong>: join together the results of two queries and
            remove duplicated if use without
            <strong>ALL</strong> keyword
            <br /> Note: union columns should be with same count and same
            datatype as well.
          </p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">SELECT</span> column1{" "}
              <span className="hljs-keyword">FROM</span> table_one {"\n"}
              {"      "}
              <span className="hljs-keyword">UNION</span> ALL{"\n"}
              {"      "}
              <span className="hljs-keyword">SELECT</span> column1{" "}
              <span className="hljs-keyword">FROM</span> table_two;{"\n"}
              {"    "}
            </code>
          </pre>
        </li>
        <li>
          <p>
            <strong>Intersect</strong>: return common result of two queries and
            remove duplicated if use without
            <strong>ALL</strong> keyword
          </p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">SELECT</span> column1{" "}
              <span className="hljs-keyword">FROM</span> table_one {"\n"}
              {"      "}
              <span className="hljs-keyword">INTERSECT</span> ALL{"\n"}
              {"      "}
              <span className="hljs-keyword">SELECT</span> column1{" "}
              <span className="hljs-keyword">FROM</span> table_two;{"\n"}
              {"    "}
            </code>
          </pre>
        </li>
        <li>
          <p>
            <strong>Except</strong>: find the rows that are present in first
            query but not second query and remove duplicated if use without{" "}
            <strong>ALL</strong> keyword{" "}
          </p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">SELECT</span> column1{" "}
              <span className="hljs-keyword">FROM</span> table_one {"\n"}
              {"      "}
              <span className="hljs-keyword">EXCEPT</span> ALL{"\n"}
              {"      "}
              <span className="hljs-keyword">SELECT</span> column1{" "}
              <span className="hljs-keyword">FROM</span> table_two;{"\n"}
              {"    "}
            </code>
          </pre>
        </li>
      </ul>
      <h1 id="constraint">Constraint</h1>
      <h4 id="specify-rules-for-data-in-a-table-">
        Specify rules for data in a table:
      </h4>
      <p>
        Constraints are used to limit the type of data that can go into a table
        (specify rules for data). This ensures the accuracy and reliability of
        the data in the table. If there is any violation between the constraint
        and the data action, the action is aborted. They can be specified when
        the table is created with the <strong>CREATE TABLE</strong> statement,
        or after the table is created with the <strong>ALTER TABLE</strong>
        statement.
        <br />
        Constraints can be column level or table level. Column level constraints
        apply to a column, and table level constraints apply to the whole table:
      </p>
      <ul>
        <li>
          <p>
            <strong>Not null</strong>: ensures that a column cannot have a NULL
            value
          </p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">CREATE</span>{" "}
              <span className="hljs-keyword">TABLE</span> table_one ({"\n"}
              {"          "}column1 datatype{" "}
              <span className="hljs-keyword">NOT</span>{" "}
              <span className="hljs-literal">NULL</span>,{"\n"}
              {"      "});{"\n"}
              {"    "}
            </code>
          </pre>
        </li>
        <li>
          <p>
            <strong>Unique</strong>: ensures that all values in a column are
            different
          </p>
          <pre>
            <code className="lang-sql">
              {"  "}CREATE <span className="hljs-keyword">TABLE</span> table_one{" "}
              <span className="hljs-comment">(</span>
              {"\n"}
              {"          "}column1 datatype UNIQUE,{"\n"}
              {"      "});{"\n"}
              {"    "}
            </code>
          </pre>
        </li>
        <li>
          <p>
            <strong>Primary key</strong>: a combination of a NOT NULL and
            UNIQUE. If we set a primary column datatype as
            <strong>SERIAL</strong> then it will fill automatically with
            inserting data to the table:
          </p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">CREATE</span>{" "}
              <span className="hljs-keyword">TABLE</span> table_one ({"\n"}
              {"          "}column1{" "}
              <span className="hljs-built_in">serial</span> PRIMARY{" "}
              <span className="hljs-keyword">KEY</span>,{"\n"}
              {"      "});{"\n"}
              {"    "}
            </code>
          </pre>
        </li>
        <li>
          <p>
            <strong>Foreign key</strong>: a foreign key column in a table points
            to a column with unique values in another table (often the primary
            key column) to create a way of cross-referencing the two tables. It
            is a constraint that links a column in one table (table_1.column_a)
            to a column in a different table (table_2.column_b) and ensures that
            a value can be added to column_a only if the same value already
            exists in column_b. Foreign key constraints are used to create
            relationships between tables.
            <br />
            The table with the foreign key is called the child table, and second
            table is called the referenced or parent table.{" "}
          </p>
        </li>
      </ul>
      <pre>
        <code>
          ```sql{"\n"}
          {"    "}CREATE TABLE table_child ({"\n"}
          {"        "}...,{"\n"}
          {"        "}column1 datatype,{"\n"}
          {"        "}FOREIGN KEY (column1) REFERENCES parent_table (column1)
          {"\n"}
          {"    "});{"\n"}
          {"    "}```{"\n"}
          {"    "}it is possible to directly define and assign a column{" "}
          <span className="hljs-keyword">as</span>{" "}
          <span className="hljs-keyword">foreign</span> key like this example:
          {"\n"}
          {"    "}
          {"\n"}
          {"    "}```sql{"\n"}
          {"    "}CREATE TABLE table_child ({"\n"}
          {"        "}...,{"\n"}
          {"        "}column1 int REFERENCES parent_table (id){"\n"}
          {"    "});{"\n"}
          {"    "}```{"\n"}
          {"    "}
        </code>
      </pre>
      <ul>
        <li>
          <p>
            <strong>Default</strong>: sets a default value for a column if no
            value is specified
          </p>
          <pre>
            <code className="lang-sql">
              {"  "}CREATE <span className="hljs-keyword">TABLE</span> table_one{" "}
              <span className="hljs-comment">(</span>
              {"\n"}
              {"          "}column1 datatype DEFAULT{" "}
              <span className="hljs-string">'jeff'</span>
              {"\n"}
              {"      "});{"\n"}
              {"    "}
            </code>
          </pre>
        </li>
        <li>
          <p>
            <strong>Check</strong>: ensures that the values in a column
            satisfies a specific condition (we can not use sub-queries as
            condition here. just basic operators are acceptable)
          </p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">CREATE</span>{" "}
              <span className="hljs-keyword">TABLE</span> table_one ({"\n"}
              {"          "}column1{" "}
              <span className="hljs-built_in">INTEGER</span>{" "}
              <span className="hljs-keyword">CHECK</span> (column1 &gt;{" "}
              <span className="hljs-number">0</span>){"\n"}
              {"      "});{"\n"}
              {"    "}
            </code>
          </pre>
          <p> it is possible to check between different columns:</p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">CREATE</span>{" "}
              <span className="hljs-keyword">TABLE</span> table_one ({"\n"}
              {"          "}price <span className="hljs-built_in">INTEGER</span>{" "}
              <span className="hljs-keyword">NOT</span>{" "}
              <span className="hljs-literal">NULL</span>,{"\n"}
              {"          "}discount{" "}
              <span className="hljs-built_in">INTEGER</span>,{"\n"}
              {"          "}
              <span className="hljs-keyword">CHECK</span> (discount &lt; price)
              {"\n"}
              {"      "});{"\n"}
              {"    "}
            </code>
          </pre>
        </li>
      </ul>
      <p>
        <br />
      </p>
      <h1 id="on-delete">On delete</h1>
      <p>
        When you create a foreign key in your database, you can specify what
        happens upon delete of the parent row. There are usually four
        possibilities:
      </p>
      <ul>
        <li>
          <strong>ON DELETE SET NULL</strong>: specifies that when a referenced
          row is deleted (in parent table), row(s) referencing (in child table)
          should be set to <strong>null</strong> automatically.
        </li>
        <li>
          <strong>ON DELETE CASCADE</strong>: specifies that when a referenced
          row is deleted (in parent table), row(s) referencing (in child table)
          should be automatically deleted as well.{" "}
        </li>
        <li>
          <strong>ON DELETE RESTRICT</strong>: prevents deletion of a referenced
          row in the parent table. This means if we try to delete a row in the
          parent table that has been referenced in the child table we faced an
          error
        </li>
        <li>
          <strong>ON DELETE NO ACTION</strong>: it's very similar to{" "}
          <strong>ON DELETE RESTRICT</strong> with a little differences. It
          means that if any referencing rows still exist when the constraint is
          checked, an error is raised; this is the default behavior if you do
          not specify anything
        </li>
      </ul>
      <p>
        Note: In Some Databases there is no RESTRICT keyword. For example the
        only option in MySQL is NO ACTION and there is no difference between ON
        DELETE RESTRICT and ON DELETE NO ACTION.
      </p>
      <pre>
        <code className="lang-sql">
          <span className="hljs-keyword">CREATE</span>{" "}
          <span className="hljs-keyword">TABLE</span>{" "}
          <span className="hljs-keyword">parent</span> ({"\n"}
          {"        "}
          <span className="hljs-keyword">id</span>{" "}
          <span className="hljs-built_in">SERIAL</span> PRIMARY{" "}
          <span className="hljs-keyword">KEY</span>,{"\n"}
          {"        "}
          <span className="hljs-keyword">name</span>{" "}
          <span className="hljs-built_in">varchar</span>(
          <span className="hljs-number">20</span>),{"\n"}
          {"        "}...{"\n"}
          {"    "});{"\n"}
          {"    "}
        </code>
      </pre>
      <pre>
        <code className="lang-sql">
          <span className="hljs-keyword">CREATE</span>{" "}
          <span className="hljs-keyword">TABLE</span>{" "}
          <span className="hljs-keyword">child</span> ({"\n"}
          {"        "}
          <span className="hljs-keyword">id</span>{" "}
          <span className="hljs-built_in">SERIAL</span> PRIMARY{" "}
          <span className="hljs-keyword">KEY</span>,{"\n"}
          {"        "}parent_id <span className="hljs-built_in">int</span>{" "}
          <span className="hljs-keyword">REFERENCES</span>{" "}
          <span className="hljs-keyword">parent</span>(
          <span className="hljs-keyword">id</span>){" "}
          <span className="hljs-keyword">ON</span>{" "}
          <span className="hljs-keyword">DELETE</span> RESTRICT,{"\n"}
          {"        "}...{"\n"}
          {"    "});{"\n"}
          {"    "}
        </code>
      </pre>
      <p>
        <br />
      </p>
      <h1 id="sub-query">Sub query</h1>
      <p>
        A subquery or Inner query or Nested query is a query within another
        PostgreSQL query and embedded within the WHERE clause. It is used to
        return data that will be used in the main query as a condition to
        further restrict the data to be retrieved.
        <br />
        Subqueries can be used with the SELECT, INSERT, UPDATE and DELETE
        statements along with the operators like =, &lt;, &gt;, &gt;=, &lt;=,
        IN, etc. Remember there are a few rules that subqueries must follow:
      </p>
      <ul>
        <li>Subqueries must be enclosed within parentheses.</li>
        <li>
          A subquery can have only one column in the SELECT clause, unless
          multiple columns are in the main query for the subquery to compare its
          selected columns.
        </li>
        <li>
          An ORDER BY cannot be used in a subquery, although the main query can
          use an ORDER BY. The GROUP BY can be used to perform the same function
          as the ORDER BY in a subquery.
        </li>
        <li>
          Subqueries that return more than one row can only be used with
          multiple value operators, such as the IN, EXISTS, NOT IN, ANY/SOME,
          ALL operator.
        </li>
        <li>
          The BETWEEN operator cannot be used with a subquery; however, the
          BETWEEN can be used within the subquery.
        </li>
      </ul>
      <p>
        <strong>Note</strong>: sub-queries can be use in different locations and
        it can be a little confusing for beginners.{" "}
      </p>
      <ul>
        <li>
          <p>
            Sub-query in WHERE: this sub queries are most frequently used
            against another kind of sub-queries:
          </p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">SELECT</span> first_name, last_name{" "}
              <span className="hljs-keyword">FROM</span> customers{"\n"}
              {"      "}
              <span className="hljs-keyword">WHERE</span> salary &gt; ({"\n"}
              {"              "}
              <span className="hljs-keyword">SELECT</span>{" "}
              <span className="hljs-keyword">max</span>(salary){" "}
              <span className="hljs-keyword">FROM</span> employees{"\n"}
              {"      "});{"\n"}
              {"    "}
            </code>
          </pre>
        </li>
        <li>
          <p>
            Sub-query inside of FROM: suppose a scenario that we want to find
            maximum average of price for different manufactures. As you know the
            aggregate functions can not be used in nested form. So we can not
            resolve this problem with them. In like the situation the solution
            is sub-queries:
          </p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">SELECT</span>{" "}
              <span className="hljs-keyword">MAX</span>(p.avg_price){" "}
              <span className="hljs-keyword">AS</span> max_average_price {"\n"}
              {"      "}
              <span className="hljs-keyword">FROM</span> ({"\n"}
              {"              "}
              <span className="hljs-keyword">SELECT</span>{" "}
              <span className="hljs-keyword">AVG</span>(price){" "}
              <span className="hljs-keyword">AS</span> avg_price {"\n"}
              {"              "}
              <span className="hljs-keyword">FROM</span> phones {"\n"}
              {"              "}
              <span className="hljs-keyword">GROUP</span>{" "}
              <span className="hljs-keyword">BY</span> manufactures{"\n"}
              {"      "}) <span className="hljs-keyword">AS</span> p;{"\n"}
              {"    "}
            </code>
          </pre>
        </li>
        <li>
          <p>Sub-query in SELECT:</p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">SELECT</span>{" "}
              <span className="hljs-keyword">name</span>, price, price / (
              <span className="hljs-keyword">SELECT</span>{" "}
              <span className="hljs-keyword">MAX</span>(price){" "}
              <span className="hljs-keyword">FROM</span> phones){" "}
              <span className="hljs-keyword">AS</span> price_ratio{" "}
              <span className="hljs-keyword">FROM</span> phones;{"\n"}
              {"    "}
            </code>
          </pre>
        </li>
      </ul>
      <p>
        <br />
      </p>
      <h1 id="common-table-expressions">Common Table Expressions</h1>
      <ul>
        <li>
          <p>
            <strong>Simple CTE:</strong> In PostgreSQL, the WITH query provides
            a way to write auxiliary statements for use in a larger query. It
            helps in breaking down complicated and large queries into simpler
            forms, which are easily readable. These statements often referred to
            as Common Table Expressions or CTEs, can be thought of as defining
            temporary tables that exist just for one query.
          </p>
          <p>
            {" "}
            The WITH query being CTE query, is particularly useful when subquery
            is executed multiple times. It is equally helpful in place of
            temporary tables. It computes the aggregation once and allows us to
            reference it by its name (may be multiple times) in the queries.
            Example:
          </p>
          <pre>
            <code className="lang-sql">
              {"  "}WITH CTE AS (<span className="hljs-keyword">SELECT</span>{" "}
              <span className="hljs-keyword">ID</span>,{" "}
              <span className="hljs-keyword">NAME</span>, AGE, ADDRESS{" "}
              <span className="hljs-keyword">FROM</span> COMPANY){"\n"}
              {"      "}
              <span className="hljs-keyword">Select</span> *{" "}
              <span className="hljs-keyword">From</span> CTE;{"\n"}
              {"    "}
            </code>
          </pre>
          <p>
            {" "}
            <strong>Note</strong>: The WITH clause must be defined before it is
            used in the query.
          </p>
        </li>
      </ul>
      <p>
        <br />
      </p>
      <h1 id="index">INDEX</h1>
      <p>
        Indexes are a common way to enhance database performance. An index
        allows the database server to find and retrieve specific rows much
        faster than it could do without an index. But indexes also add overhead
        to the database system as a whole, so they should be used sensibly.{" "}
      </p>
      <p>
        Indexing will add some data to the original database and increase the
        size of data which can lead to extra costs for data storage. The INSERT
        and UPDATE statements take more time on tables having indexes, whereas
        the SELECT statements become fast on those tables. The reason is that
        while doing INSERT or UPDATE, a database needs to insert or update the
        index values as well. So for situations that works too many with UPDATE
        and INSERT the indexing may have more downside against benefits.
      </p>
      <p>The main structure for defining index is:</p>
      <ul>
        <li>
          <strong>[USING method]</strong>: btree, hash, gist, spgist, gin, or
          brin. PostgreSQL uses btree by default.
        </li>
        <li>
          <strong>[ASC | DESC]</strong> : specify the sort order. ASC is the
          default.{" "}
        </li>
        <li>
          <p>
            <strong>
              [NULLS {"{"}FIRST | LAST {"}"}]
            </strong>
            : specifies nulls sort before or after non-nulls. The NULLS FIRST is
            the default when DESC is specified and NULLS LAST is the default
            when DESC is not specified.
          </p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">CREATE</span>{" "}
              <span className="hljs-keyword">INDEX</span> index_name{" "}
              <span className="hljs-keyword">ON</span> table_name [
              <span className="hljs-keyword">USING</span>{" "}
              <span className="hljs-function">
                <span className="hljs-keyword">method</span>]{"\n"}
                {"      "}
                <span className="hljs-params">
                  ({"\n"}
                  {"          "}column_name [
                  <span className="hljs-keyword">ASC</span> |{" "}
                  <span className="hljs-keyword">DESC</span>] [NULLS {"{"}FIRST
                  | LAST {"}"}],{"\n"}
                  {"          "}...{"\n"}
                  {"      "})
                </span>
                ;
              </span>
              {"\n"}
              {"    "}
            </code>
          </pre>
        </li>
      </ul>
      <ul>
        <li>
          <p>Example:</p>
          <ul>
            <li>
              <p>
                <strong>Basic B-tree index</strong>:
              </p>
              <pre>
                <code className="lang-sql">
                  {"  "}
                  <span className="hljs-keyword">CREATE</span>{" "}
                  <span className="hljs-keyword">INDEX</span> index_name{" "}
                  <span className="hljs-keyword">ON</span> table_name
                  (column_name);
                  {"\n"}
                  {"    "}
                </code>
              </pre>
            </li>
            <li>
              <p>
                <strong>Hash index</strong>: In some cases, such as when
                indexing a column with TEXT datatype and full of data, we can
                index the hash of the data instead of the actual data to speed
                up the process. For accomplish this goal can define separate
                column that store the hash of data_column and index it or do it
                directly:
              </p>
              <pre>
                <code className="lang-sql">
                  {"  "}
                  <span className="hljs-keyword">CREATE</span>{" "}
                  <span className="hljs-keyword">INDEX</span> index_name{" "}
                  <span className="hljs-keyword">ON</span> table_name{" "}
                  <span className="hljs-keyword">USING</span>{" "}
                  <span className="hljs-keyword">hash</span> (column_name);
                  {"\n"}
                  {"    "}
                </code>
              </pre>
            </li>
            <li>
              <p>
                <strong>Unique indexes</strong>: are used not only for
                performance, but also for data integrity. A unique index does
                not allow any duplicate values to be inserted into the table:
              </p>
              <pre>
                <code className="lang-sql">
                  {"  "}
                  <span className="hljs-keyword">CREATE</span>{" "}
                  <span className="hljs-keyword">UNIQUE</span>{" "}
                  <span className="hljs-keyword">INDEX</span> index_name{" "}
                  <span className="hljs-keyword">ON</span> table_name
                  (column1_name);{"\n"}
                  {"    "}
                </code>
              </pre>
            </li>
            <li>
              <p>
                <strong>Multi-column Indexes</strong>: defined on more than one
                column of a table
              </p>
              <pre>
                <code className="lang-sql">
                  {"  "}
                  <span className="hljs-keyword">CREATE</span>{" "}
                  <span className="hljs-keyword">UNIQUE</span>{" "}
                  <span className="hljs-keyword">INDEX</span> index_name{"\n"}
                  {"      "}
                  <span className="hljs-keyword">ON</span> table_name
                  (column1_name, column2_name);{"\n"}
                  {"    "}
                </code>
              </pre>
            </li>
            <li>
              <p>
                <strong>Partial Indexes</strong>: A partial index is an index
                built over a subset of a table; the subset is defined by a
                conditional expression (called the predicate of the partial
                index). The index contains entries only for those table rows
                that satisfy the predicate. example with gist method:{" "}
              </p>
              <pre>
                <code className="lang-sql">
                  {"  "}
                  <span className="hljs-keyword">CREATE</span>{" "}
                  <span className="hljs-keyword">INDEX</span> index_name{"\n"}
                  {"      "}
                  <span className="hljs-keyword">on</span> table_name{" "}
                  <span className="hljs-keyword">USING</span> gist
                  (conditional_expression);{"\n"}
                  {"    "}
                </code>
              </pre>
            </li>
            <li>
              <p>
                <strong>DROP INDEX</strong>:{" "}
              </p>
              <pre>
                <code className="lang-sql">
                  {"  "}
                  <span className="hljs-keyword">DROP</span>{" "}
                  <span className="hljs-keyword">INDEX</span> index_name;{"\n"}
                  {"    "}
                </code>
              </pre>
            </li>
          </ul>
        </li>
      </ul>
      <pre>
        <code>
          **Note**: In Postgres <span className="hljs-keyword">after</span>{" "}
          setting <span className="hljs-keyword">the</span> index,{" "}
          <span className="hljs-keyword">it</span> will update automatically{" "}
          <span className="hljs-keyword">after</span> inserting{" "}
          <span className="hljs-built_in">new</span> data{" "}
          <span className="hljs-keyword">into</span>{" "}
          <span className="hljs-keyword">the</span> table.{"   "}
          {"\n"}
          {"    "}
          {"\n"}
          {"    "}**Note**: With creating{" "}
          <span className="hljs-keyword">a</span> column{" "}
          <span className="hljs-keyword">as</span> primary-key{" "}
          <span className="hljs-keyword">or</span> unique, Postgres
          automatically will <span className="hljs-built_in">create</span>{" "}
          <span className="hljs-keyword">an</span> index{" "}
          <span className="hljs-keyword">for</span> these column. So you should
          never <span className="hljs-built_in">create</span>{" "}
          <span className="hljs-keyword">a</span> manual index{" "}
          <span className="hljs-keyword">for</span> this kind{" "}
          <span className="hljs-keyword">of</span> column because{" "}
          <span className="hljs-keyword">the</span> index exists.{"\n"}
          {"    "}
        </code>
      </pre>
      <p>
        <br />
      </p>
      <h1 id="view-and-stored-procedure">View And Stored Procedure</h1>
      <p>
        Views and stored procedures can both simplify and optimize the database
        design and performance. Through these tools, you can encapsulate complex
        queries and logic in reusable and maintainable code, reduce the amount
        of data transferred between the database and the application, implement
        security and access control, enhance the consistency and accuracy of the
        data by enforcing business rules and validations, and modify the logic
        and structure of the views and stored procedures without affecting
        dependent objects or applications.
      </p>
      <p>
        When should I use a view and when should I use a stored procedure?
        <br />
        Most simply, a view is used when only a SELECT statement is needed.
        Views should be used to store commonly-used JOIN queries and specific
        columns to build virtual tables of an exact set of data we want to see.
        Stored procedures hold the more complex logic, such as INSERT, DELETE,
        and UPDATE statements to automate large SQL workflows. Stored Procedure
        also accept parameters but views Does NOT.
      </p>
      <ul>
        <li>
          <p>
            <strong>View:</strong>{" "}
          </p>
          <p>
            {" "}
            Views are virtual tables that return the result of a query every
            time they are accessed. When you create a view, you basically create
            a query and assign a name to the query:
          </p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-comment">-- standard view definition:</span>
              {"\n"}
              {"      "}
              <span className="hljs-keyword">CREATE</span>{" "}
              <span className="hljs-keyword">OR</span>{" "}
              <span className="hljs-keyword">REPLACE</span>{" "}
              <span className="hljs-keyword">VIEW</span> my_view{" "}
              <span className="hljs-keyword">AS</span>
              {"\n"}
              {"      "}
              <span className="hljs-keyword">SELECT</span>{" "}
              <span className="hljs-keyword">name</span>, rating{"\n"}
              {"      "}
              <span className="hljs-keyword">FROM</span>{" "}
              <span className="hljs-keyword">authors</span>
              {"\n"}
              {"      "}
              <span className="hljs-keyword">WHERE</span> rating &gt;{" "}
              <span className="hljs-number">6</span>;{"\n"}
              {"    "}
              {"\n"}
              {"      "}
              <span className="hljs-comment">-- call a view:</span>
              {"\n"}
              {"      "}
              <span className="hljs-keyword">SELECT</span>{" "}
              <span className="hljs-keyword">name</span>, rating{" "}
              <span className="hljs-keyword">from</span> my_view;{"\n"}
              {"    "}
              {"\n"}
              {"      "}
              <span className="hljs-comment">-- drop a view:</span>
              {"\n"}
              {"      "}
              <span className="hljs-keyword">DROP</span>{" "}
              <span className="hljs-keyword">VIEW</span>{" "}
              <span className="hljs-keyword">IF</span>{" "}
              <span className="hljs-keyword">EXISTS</span> my_view;{"\n"}
              {"    "}
            </code>
          </pre>
          <p>
            {" "}
            <strong>Note</strong>: Views do not store any data except the
            materialized views. In PostgreSQL, you can create special views
            called materialized views that store data physically and
            periodically refresh data from the base tables. The materialized
            views are handy in many scenarios, such as faster data access to a
            remote server and caching. So materialized views are used if data
            from complex queries needs to be accessed quickly.
          </p>
          <p>
            {" "}
            Materialized views don't always have the most recent data. Since the
            result of a query is stored in a materialized view like in a cache,
            you need to make sure to refresh it periodically.
          </p>
          <p>
            {" "}
            In conclusion Regular-View execute in calling time so they always
            return recent data, But Materialized-View act as caching mechanism
            so they are faster than Regular-View but they need to be refresh
            periodically:
          </p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-comment">
                -- materialized view definition:
              </span>
              {"\n"}
              {"      "}
              <span className="hljs-keyword">CREATE</span>{" "}
              <span className="hljs-keyword">MATERIALIZED</span>{" "}
              <span className="hljs-keyword">VIEW</span> my_view{" "}
              <span className="hljs-keyword">AS</span>
              {"\n"}
              {"      "}
              <span className="hljs-keyword">SELECT</span>{" "}
              <span className="hljs-keyword">name</span>, rating{"\n"}
              {"      "}
              <span className="hljs-keyword">FROM</span>{" "}
              <span className="hljs-keyword">authors</span>
              {"\n"}
              {"      "}
              <span className="hljs-keyword">WHERE</span> rating &gt;{" "}
              <span className="hljs-number">6</span>;{"\n"}
              {"    "}
              {"\n"}
              {"      "}
              <span className="hljs-comment">-- call a view:</span>
              {"\n"}
              {"      "}
              <span className="hljs-keyword">SELECT</span>{" "}
              <span className="hljs-keyword">name</span>, rating{" "}
              <span className="hljs-keyword">from</span> my_view;{"\n"}
              {"    "}
              {"\n"}
              {"      "}
              <span className="hljs-comment">
                -- refresh a materialize view
              </span>
              {"\n"}
              {"      "}REFRESH MATERIALIZED VIEW popular_active_authors;{"\n"}
              {"    "}
            </code>
          </pre>
          <p>
            {" "}
            <strong>Note</strong>: Materialized views can be refreshed when
            their underlying source data changes using Postgres triggers.{" "}
          </p>
        </li>
      </ul>
      <p>
        <br />
      </p>
      <ul>
        <li>
          <p>
            <strong>Stored Procedure:</strong>{" "}
          </p>
          <p>
            {" "}
            A stored procedure is a set of SQL statements that perform a
            specific task. You can use stored procedures to encapsulate business
            logic, enforce security rules, or automate repetitive operations.
            Stored procedures are stored in the database, and are executed by
            the database engine. This means that stored procedures can be faster
            and more efficient than views, but also that they may become
            outdated or inconsistent with the data.
          </p>
          <p>
            {" "}
            Example of a procedure that give 2 variable and run a query in
            transactional way:
          </p>
          <pre>
            <code className="lang-SQL">
              {"  "}--{" "}
              <span className="hljs-function">
                <span className="hljs-keyword">procedure</span>{" "}
                <span className="hljs-title">definition</span>{" "}
                <span className="hljs-title">with</span>{" "}
                <span className="hljs-title">PLPGSQL</span>{" "}
                <span className="hljs-title">language</span>
                {"\n"}
                {"      "}
                <span className="hljs-title">CREATE</span>{" "}
                <span className="hljs-title">OR</span>{" "}
                <span className="hljs-title">REPLACE</span>{" "}
                <span className="hljs-title">PROCEDURE</span>{" "}
                <span className="hljs-title">my_procedure</span>
                <span className="hljs-params">
                  ({"\n"}
                  {"          "}due_id int,{"\n"}
                  {"          "}name_value varchar{"\n"}
                  {"      "})
                </span>{" "}
                {"\n"}
                {"      "}
                <span className="hljs-title">AS</span>
                {"\n"}
                {"      "}$<span className="hljs-title">body</span>${"\n"}
                {"      "}
                <span className="hljs-title">DECLARE</span>
                {"\n"}
                {"      "}
                <span className="hljs-title">BEGIN</span>
                {"\n"}
                {"          "}
                <span className="hljs-title">UPDATE</span>{" "}
                <span className="hljs-title">users</span>
                {"\n"}
                {"          "}
                <span className="hljs-title">SET</span>{" "}
                <span className="hljs-title">username</span> ={" "}
                <span className="hljs-title">name_value</span>
                {"\n"}
                {"          "}
                <span className="hljs-title">WHERE</span>{" "}
                <span className="hljs-title">id</span> ={" "}
                <span className="hljs-title">due_id</span>;
              </span>
              {"\n"}
              {"          "}COMMIT;{"\n"}
              {"      "}
              <span className="hljs-keyword">END</span>;{"\n"}
              {"      "}$body${"\n"}
              {"      "}LANGUAGE PLPGSQL;{"\n"}
              {"    "}
              {"\n"}
              {"      "}-- calling a{" "}
              <span className="hljs-function">
                <span className="hljs-keyword">procedure</span>
                {"\n"}
                {"      "}
                <span className="hljs-title">CALL</span>{" "}
                <span className="hljs-title">my_procedure</span>
                <span className="hljs-params">
                  (678, <span className="hljs-string">'jeff'</span>)
                </span>
              </span>
              {"\n"}
              {"    "}
            </code>
          </pre>
        </li>
      </ul>
      <p>
        <br />
      </p>
      <h1 id="function">Function</h1>
      <p>
        Postgres functions are similar to views but allow more procedural
        computations. Function can take arguments and return value, things we
        have not in View. Notice that Functions can not run transactional
        queries but Procedures can do it:
      </p>
      <pre>
        <code className="lang-sql">
          <span className="hljs-comment">
            -- define a FUNCTION with SQL language that return a int value
          </span>
          {"\n"}
          {"    "}
          <span className="hljs-keyword">CREATE</span>{" "}
          <span className="hljs-keyword">OR</span>{" "}
          <span className="hljs-keyword">REPLACE</span>{" "}
          <span className="hljs-keyword">FUNCTION</span> my_function() {"\n"}
          {"    "}
          <span className="hljs-keyword">RETURNS</span>{" "}
          <span className="hljs-built_in">int</span> {"\n"}
          {"    "}
          <span className="hljs-keyword">as</span>
          {"\n"}
          {"    "}$<span className="hljs-keyword">body</span>${"\n"}
          {"        "}
          <span className="hljs-keyword">SELECT</span>{" "}
          <span className="hljs-keyword">COUNT</span>(*) {"\n"}
          {"        "}
          <span className="hljs-keyword">FROM</span> my_table; {"\n"}
          {"    "}$body${"\n"}
          {"    "}LANGUAGE SQL{"\n"}
          {"    "}
          {"\n"}
          {"    "}
          <span className="hljs-comment">
            -- define a FUNCTION with SQL language that accept parameters and
            return a table
          </span>
          {"\n"}
          {"    "}
          <span className="hljs-keyword">CREATE</span>{" "}
          <span className="hljs-keyword">OR</span>{" "}
          <span className="hljs-keyword">REPLACE</span>{" "}
          <span className="hljs-keyword">FUNCTION</span> my_function(loc{" "}
          <span className="hljs-built_in">varchar</span>) {"\n"}
          {"    "}
          <span className="hljs-keyword">RETURNS</span> SETOF my_table {"\n"}
          {"    "}
          <span className="hljs-keyword">as</span>
          {"\n"}
          {"    "}$<span className="hljs-keyword">body</span>${"\n"}
          {"        "}
          <span className="hljs-keyword">SELECT</span> *{"\n"}
          {"        "}
          <span className="hljs-keyword">FROM</span> my_table{"\n"}
          {"        "}
          <span className="hljs-keyword">WHERE</span> state = loc {"\n"}
          {"        "}
          <span className="hljs-keyword">ORDER</span>{" "}
          <span className="hljs-keyword">BY</span> username{" "}
          <span className="hljs-keyword">DESC</span>;{"\n"}
          {"    "}$body${"\n"}
          {"    "}LANGUAGE SQL{"\n"}
          {"    "}
          {"\n"}
          {"    "}
          <span className="hljs-comment">-- call a function</span>
          {"\n"}
          {"    "}
          <span className="hljs-keyword">SELECT</span> *{" "}
          <span className="hljs-keyword">FROM</span> my_function();{"\n"}
          {"    "}
        </code>
      </pre>
      <p>
        <br />
      </p>
      <h1 id="trigger">Trigger</h1>
      <p>
        Postgres triggers are used to invoke previously defined Postgres
        functions before or after a specific database event (e.g. INSERT)
        occurs.
      </p>
      <ul>
        <li>
          <p>
            <strong>Syntax</strong>:
          </p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">CREATE</span>{" "}
              <span className="hljs-keyword">TRIGGER</span> trigger_name [
              <span className="hljs-keyword">BEFORE</span>|
              <span className="hljs-keyword">AFTER</span>|INSTEAD{" "}
              <span className="hljs-keyword">OF</span>] event_name{"\n"}
              {"      "}
              <span className="hljs-keyword">ON</span> table_name{"\n"}
              {"      "}[{"\n"}
              {"      "}
              <span className="hljs-comment">
                -- Trigger logic goes here....
              </span>
              {"\n"}
              {"      "}];{"\n"}
              {"    "}
            </code>
          </pre>
        </li>
        <li>
          <p>
            Example: we have a function that updates the value of the column
            named updated_at and want to trigger it every time the table_name is
            updated. Using this method, we can auto-fill our custom column in
            the selected table:
          </p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">CREATE</span>{" "}
              <span className="hljs-keyword">OR</span>{" "}
              <span className="hljs-keyword">REPLACE</span>{" "}
              <span className="hljs-keyword">FUNCTION</span>{" "}
              trigger_set_timestamp()
              {"\n"}
              {"      "}
              <span className="hljs-keyword">RETURNS</span>{" "}
              <span className="hljs-keyword">TRIGGER</span>{" "}
              <span className="hljs-keyword">AS</span> $${"\n"}
              {"      "}
              <span className="hljs-keyword">BEGIN</span>
              {"\n"}
              {"          "}NEW.updated_at ={" "}
              <span className="hljs-keyword">NOW</span>();{"\n"}
              {"          "}RETURN NEW;{"\n"}
              {"      "}
              <span className="hljs-keyword">END</span>;{"\n"}
              {"      "}$$ LANGUAGE plpgsql;{"\n"}
              {"    "}
            </code>
          </pre>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">CREATE</span> TRIGGER set_timestamp
              BEFORE UPDATE {"\n"}
              {"      "}
              <span className="hljs-keyword">ON</span> table_name{"\n"}
              {"      "}
              <span className="hljs-keyword">FOR</span>{" "}
              <span className="hljs-keyword">EACH</span> ROW{"\n"}
              {"      "}EXECUTE{" "}
              <span className="hljs-function">
                <span className="hljs-keyword">PROCEDURE</span>{" "}
                <span className="hljs-title">trigger_set_timestamp</span>
                <span className="hljs-params">()</span>;
              </span>
              {"\n"}
              {"    "}
            </code>
          </pre>
        </li>
      </ul>
      <p>
        <br />
      </p>
      <h1 id="transferring-data">Transferring Data</h1>
      <ul>
        <li>
          <p>
            <strong>Transfer data from file to the table</strong>:<br />
            Below see how we can copy data from CSV file to the table in
            postgres. If the file has not header, remove HEADER from the WITH
            STATEMENT:
          </p>
          <pre>
            <code className="lang-sql">
              {"  "}\<span className="hljs-keyword">copy</span>
              <span className="bash">
                {" "}
                target_table (column1, column2) FROM{" "}
                <span className="hljs-string">'source.csv'</span>
                {"   "}
                {"\n"}
                {"    "}
              </span>
              {"              "}WITH (FORMAT csv, DELIMITER{" "}
              <span className="hljs-string">','</span>, HEADER);{"\n"}
              {"    "}
            </code>
          </pre>
          <p>
            {" "}
            Note: The file should be in destination that postgres has permission
            to access it, for example:
          </p>
          <pre>
            <code className="lang-bash">
              {"  "}sudo mv source.csv /var/
              <span className="hljs-class">
                <span className="hljs-keyword">lib</span>/
                <span className="hljs-title">postgres</span>/
              </span>
              {"\n"}
              {"    "}
            </code>
          </pre>
        </li>
      </ul>
      <ul>
        <li>
          <p>
            <strong>Transferring Data Between tables</strong>:<br /> It is
            possible to transfer data between tables. With insert, a new row
            will be added to the table, and with update, present row values will
            be changed in selected columns:
          </p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">INSERT</span>{" "}
              <span className="hljs-keyword">INTO</span> target_table{" "}
              <span className="hljs-keyword">SELECT</span> *{" "}
              <span className="hljs-keyword">FROM</span> source_table{" "}
              <span className="hljs-keyword">WHERE</span> condition;{"\n"}
              {"    "}
            </code>
          </pre>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">UPDATE</span> target_table{" "}
              <span className="hljs-keyword">SET</span> target_column = {"\n"}
              {"      "}(<span className="hljs-keyword">SELECT</span>{" "}
              source_column <span className="hljs-keyword">FROM</span>{" "}
              source_table <span className="hljs-keyword">WHERE</span>{" "}
              condition);{"\n"}
              {"    "}
            </code>
          </pre>
          <p>
            {" "}
            As an example here we added data from 'artists' table to the artist
            column in 'album' table. Then we updated the track column based on
            track table with defined condition:
          </p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">INSERT</span>{" "}
              <span className="hljs-keyword">INTO</span> album (artist){" "}
              <span className="hljs-keyword">SELECT</span>{" "}
              <span className="hljs-keyword">name</span>{" "}
              <span className="hljs-keyword">FROM</span> artist;{"\n"}
              {"      "}
              <span className="hljs-keyword">UPDATE</span> album{" "}
              <span className="hljs-keyword">SET</span> track = (
              <span className="hljs-keyword">SELECT</span> track.name{" "}
              <span className="hljs-keyword">FROM</span> track {"\n"}
              {"      "}
              <span className="hljs-keyword">WHERE</span> album.artist =
              track.artist);{"\n"}
              {"    "}
            </code>
          </pre>
        </li>
      </ul>
      <p>
        <br />
      </p>
      <h1 id="vaccum">Vaccum</h1>
      <p>
        In normal PostgreSQL operation, tuples that are deleted or obsoleted by
        an update are not physically removed from their table; they remain
        present until a VACUUM is done. Therefore it's necessary to do VACUUM
        periodically, especially on frequently-updated tables:
      </p>
      <ol>
        <li>
          <p>
            <strong>Plain VACUUM</strong>: simply reclaims space and makes it
            available for re-use. This form of the command can operate in
            parallel with normal reading and writing of the table, as an
            exclusive lock is not obtained. However, extra space is not returned
            to the operating system (in most cases); it's just kept available
            for re-use within the same table. It also allows us to leverage
            multiple CPUs in order to process indexes. This feature is known as
            parallel vacuum.
          </p>
        </li>
        <li>
          <p>
            <strong>VACUUM FULL</strong>: rewrites the entire contents of the
            table into a new disk file with no extra space, allowing unused
            space to be returned to the operating system. This form is much
            slower and requires an ACCESS EXCLUSIVE lock on each table while it
            is being processed.
          </p>
        </li>
      </ol>
      <p>Example: </p>
      <pre>
        <code className="lang-sql">
          # check database usage size before operation{"\n"}
          {"    "}SELECT pg_size_pretty(
          <span className="hljs-name">pg_database_size</span>('database_name'))
          AS database_size<span className="hljs-comment">;</span>
          {"\n"}
          {"    "}
          {"\n"}
          {"    "}# plain vaccum on custom table{"\n"}
          {"    "}VACUUM (<span className="hljs-name">VERBOSE</span>, ANALYZE)
          table_name<span className="hljs-comment">;</span>
          {"\n"}
          {"    "}
          {"\n"}
          {"    "}# plain vaccum on database{"\n"}
          {"    "}VACUUM (<span className="hljs-name">VERBOSE</span>, ANALYZE)
          <span className="hljs-comment">;</span>
          {"\n"}
          {"    "}
          {"\n"}
          {"    "}# full vaccum on database{"\n"}
          {"    "}VACUUM (<span className="hljs-name">VERBOSE</span>, ANALYZE,
          FULL)
          <span className="hljs-comment">;</span>
          {"\n"}
          {"    "}
        </code>
      </pre>
      <p>
        <br />
      </p>
      <h1 id="other">Other</h1>
      <ul>
        <li>
          <p>
            <strong>Text generation</strong>:<br />
            here is an example of creating a table with a single column and
            filling it with random data:
          </p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">CREATE</span>{" "}
              <span className="hljs-keyword">TABLE</span> bigtext (
              <span className="hljs-keyword">content</span>{" "}
              <span className="hljs-built_in">TEXT</span>);{"\n"}
              {"      "}
              <span className="hljs-keyword">INSERT</span>{" "}
              <span className="hljs-keyword">INTO</span> bigtext{" "}
              <span className="hljs-keyword">SELECT</span>{" "}
              <span className="hljs-keyword">concat</span>(
              <span className="hljs-string">'content'</span>, generate_series(
              <span className="hljs-number">100000</span>,{" "}
              <span className="hljs-number">199999</span>));{"\n"}
              {"    "}
            </code>
          </pre>
        </li>
      </ul>
      <ul>
        <li>
          <p>
            <strong>Concurrency and Transaction</strong>:<br /> Lock a special
            section in the table to prevent conflict when working online and
            different results because of concurrency issues, and unlock it once
            the work is finished:
          </p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">BEGIN</span>;{"\n"}
              {"      "}
              <span className="hljs-keyword">UPDATE</span> accounts{" "}
              <span className="hljs-keyword">SET</span> balance = balance -{" "}
              <span className="hljs-number">100.00</span>
              {"\n"}
              {"          "}
              <span className="hljs-keyword">WHERE</span>{" "}
              <span className="hljs-keyword">name</span> ={" "}
              <span className="hljs-string">'Alice'</span>;{"\n"}
              {"      "}
              <span className="hljs-comment">-- etc</span>
              {"\n"}
              {"      "}
              <span className="hljs-keyword">COMMIT</span>;{"\n"}
              {"    "}
            </code>
          </pre>
          <p> Double phase locking (Exclusive lock + Shared lock):</p>
          <pre>
            <code className="lang-sql">
              {"  "}
              <span className="hljs-keyword">BEGIN</span>;{"\n"}
              {"      "}
              <span className="hljs-keyword">SELECT</span> *{" "}
              <span className="hljs-keyword">FROM</span>{" "}
              <span className="hljs-keyword">account</span>{" "}
              <span className="hljs-keyword">WHERE</span>{" "}
              <span className="hljs-keyword">name</span> ={" "}
              <span className="hljs-string">'Alice'</span>{" "}
              <span className="hljs-keyword">FOR</span>{" "}
              <span className="hljs-keyword">UPDATE</span>;{"\n"}
              {"      "}
              <span className="hljs-comment">-- etc</span>
              {"\n"}
              {"      "}
              <span className="hljs-keyword">UPDATE</span> accounts{" "}
              <span className="hljs-keyword">SET</span> balance = balance -{" "}
              <span className="hljs-number">100.00</span>
              {"\n"}
              {"          "}
              <span className="hljs-keyword">WHERE</span>{" "}
              <span className="hljs-keyword">name</span> ={" "}
              <span className="hljs-string">'Alice'</span>;{"\n"}
              {"      "}
              <span className="hljs-keyword">COMMIT</span>;{"\n"}
              {"    "}
            </code>
          </pre>
        </li>
      </ul>
      <ul>
        <li>
          <strong>Datatypes</strong>:{" "}
          <a href="https://www.w3schools.com/sql/sql_datatypes.asp">
            https://www.w3schools.com/sql/sql_datatypes.asp
          </a>
        </li>
      </ul>
    </div>
  );
}
