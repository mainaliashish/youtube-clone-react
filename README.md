### Redux
- useDispatch is used to invoke a method use to push data into a store
- UseSelector is used to get data from the store
- Wrap the main App inside Provider to configure store
- Example: <Provider store={appStore}> </Provider>
- Create a main store using configureStore()
- Create a sub-store i.e. Slices for each common components 
- We have appSlice, videoSlice in this current Project
- For this use createSlice()
- debouncing 
Search debouncing is a technique used to delay the execution of a search function until a certain period has passed without additional input, usually in real-time search applications like autocomplete or live search.

Here’s how it works and why it’s useful:

Delay in Execution: Debouncing adds a slight delay (say, 300 milliseconds) after a user stops typing before the search request is sent to the server. If the user types more characters within that delay period, the timer resets. This way, a search is only performed once typing has truly paused.

Reduces API Requests: Without debouncing, each keystroke might trigger a search request, potentially leading to an overwhelming number of requests. Debouncing consolidates these into a single request, reducing server load and network traffic.

Improves User Experience: By avoiding excessive requests, debouncing makes the search smoother and faster, minimizing the delay and loading spinners between inputs, especially in applications where instant feedback is expected.
#
#
#
#
#
#
#
#
##
#