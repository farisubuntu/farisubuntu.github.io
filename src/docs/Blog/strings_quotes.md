from: PHP Notes for pro

### Section 9.4: Strings

Q: Compare between:
    1. Single Quoted    2. Double Quoted    3. Hero Quoted  4. NewDoc
    keywords: `{{}}`,`<<< EOF`, `\'`,`<<< 'EOF'`

### Section 9.5: Callable

Summary: Callables are anything which can be called as a callback.
Things that can be termed a "callback" are as follows:

1. Anonymous functions
2. Standard PHP functions (note: not language constructs)
3. Static Classes
4. non-static Classes (using an alternate syntax)
5. Specific Object/Class Methods
6. Objects themselves, as long as the object is found in key 0 of an array
**Q: Give Example for:**
- referencing an object as an array element
- Callbacks can be denoted by callable type hint
- call_user_func(): if you need to pass arg by references there are two ways(call_user_function_array or variable function)?

### Section 9.6: Resouces

Summary: A resource is a special type of variable that references an external resource, such as a file, socket, stream, document, or connection.
- give example?
- What function used for checking the resource type?

## Chapter 11: References
(https://www.php.net/manual/en/language.references.whatdo.php)

Summary: There are three basic operations performed using references: assigning by reference, passing by reference, and returning by reference.
Q: give an examples.

