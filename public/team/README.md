# Team photos

Place each portrait in this folder and add its path to the matching record in
`src/data/teamMembers.ts`:

```ts
{ id: "parvathy-gopu", /* ... */, photo: "/team/parvathy-gopu.jpg" }
```

Use a square or near-square JPG, PNG, or WebP image. The Team page crops it to
a circular portrait automatically and falls back to the member's initials when
no `photo` path is supplied.
