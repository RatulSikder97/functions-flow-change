# Change the flow of the execution

_All codes in app.js file_

## Problems

<details>
<summary>Given Code</summary>
<p>

```javascript
public class Order
function wearPPE() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Wearing PPE'), 2000);
    })
}

function fightCorona() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Fighting Corona'), 1000);
    })
}

function execute() {
    wearPPE().then(result => console.log(result));
    fightCorona().then(result => console.log(result));
}

execute();
\
```

</p>
</details>

#### Conditions

**Change the flow of the execution of the code snippet. It should log ‘Wearing PPE` first.**

- Cannot change the timeout value
- cannot call fightCorona inside the then() method of wearPPE()

## My Solution

- **_Change Code snippet_**

```javascript
// here is my change to get Wearing PPE first , then Fighting Corona
// make execute function async
async function execute() {
  // make wearPPE await
  await wearPPE().then((result) => console.log(result));
  fightCorona().then((result) => console.log(result));
}
```

- **_Output_**

```console
Wearing PPE
Fighting Corona
```
