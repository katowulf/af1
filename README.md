# AngularFire 1.0 Feedback Review

The purpose of this session is to demonstrate that we know more about AngularFire than you do.
No wait, the purpose is to get feedback on how well we've implemented the new API changes.
Please complete the following tasks, in order. Be sure to tell us when you think the task is
completed or to stop at any time if you do not think you can complete the task.

# Migration notes

    $firebase has been removed
     - use Firebase ref directly for write methods
     - create arrays with new $FirebaseArray instead of $asArray()
     - create objects with new $FirebaseObject instead of $asObject()
    Added error message for array-like data
    Fixed bug with $value not being removed
    Improved Jasmine/Travis consistency

# Task 1: Migrate Chat App from 0.9.2 to 1.0

 1. Open chat/chat.html
 2. Switch angularfire 0.9 to the local angularfire.js (which is the AngularFire 1.0 pre-release)
 3. Perform any tasks necessary to migrate the existing code
 4. Try to speak out loud about your thought process
 5. Let us know when you have finished or cannot complete the task

# Task 2: Download and display books by Stephen King

  1. Open books/books.html
  2. Replace the static list of books with content from https://kato-books.firebaseio-demo.com
  3. Use Firebase (not Angular filters) to reduce the list of books to only those by Stephen King
  4. Try to speak out loud about your thought process
  5. Let us know when you have finished or cannot complete the task

# Task 3: Create a form to edit a user's profile

  1. Open profile/profile.html
  2. Update the form to display profile from https://kato-sandbox.firebaseio.com/profiles/test
  3. This data is secured. You will need to authenticate with username: `test@test.com` and password: `testy`
  4. Make changes to the local data save to the server
  5. Bonus: make changes to the email address reflect in Firebase Authentication tools
  6. Try to speak out loud about your thought process
  7. Let us know when you have finished or cannot complete the task
