# myscripts

**Interactive**

```bash

#!/bin/bash

# The user will be prompted to enter a value, which is then displayed on the screen.
#  The value is stored in a temporary variable, name. We can reference the value of a 
#  shell variable by using a $ in front of the variable name, such as $name.

# tell the user to input his name:
echo "enter your name:"
read name
# Display variable input
echo your name : $name
```

---

**hello**

```bash
#!/bin/bash
echo "Hello Linux Foundation Studen"
```
---

**lab15.1.sh**

```bash
#!/bin/bash

# check for non-existent file, exit status will be 2

ls notfound.txt
echo "status: $?"

# create a file and do again:

touch notfound.txt
ls notfound.txt
echo "Status: $?"

# remove the file clean up
rm notfound.txt
```

