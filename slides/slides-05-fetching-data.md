# Fetching data

https://nodejs.dev/en/api/v18/globals/#fetch

A browser-compatible implementation of the `fetch()` method was introduced in v17.5.0.

It is labelled as an experimental API.

You don't need to import `fetch` as it's available as a global.

When used in a script, you'll get a warning:

```
(node:77768) ExperimentalWarning: The Fetch API is an experimental feature. This feature could change at any time
```

You can stop using this experimental API by using `--no-experimental-fetch`, alternatively the error can be suppressed with `--no-warnings`.

The MDN docs for the fetch method [can be found here](https://developer.mozilla.org/en-US/docs/Web/API/fetch).

- Fetch
  - response.ok

```js
try {
	const response = await fetch("https://swapi.dev/api/planets");
	if (!response.ok) {
		throw new Error("Problem fetching the resource.");
	}
	const data = await response.json();
	console.log(data);
} catch (error) {
	console.log(error);
}
```

---

# With a different method

```js
try {
	const response = await fetch("https://swapi.dev/api/planets", {
		method: "POST",
	});
	if (!response.ok) {
		throw new Error("Problem fetching the resource.");
	}
	const data = await response.json();
	console.log(data);
} catch (error) {
	console.log(error);
}
```

---

# With API key

```js
const token = "GOT MY TOKEN FROM SOMEWHERE";

try {
	const response = await fetch("https://swapi.dev/api/planets", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	if (!response.ok) {
		throw new Error("Problem fetching the resource.");
	}
	const data = await response.json();
	console.log(data);
} catch (error) {
	console.log(error);
}
```
