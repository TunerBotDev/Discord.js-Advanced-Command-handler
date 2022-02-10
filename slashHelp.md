# SLASH COMMAND OPTIONS

## Below Given Are A All The Types of options!

```
{"Integer": { name: "example_int", description: "A Example Description! for a Number!", required: true }},

{"String": { name: "example", description: "A Example Description for a String!", required: true }}

{"User": { name: "mention_user", description: "To Mention a User", required: false }},

{"Channel": { name: "what_channel", description: "to Mention a Channel", required: false }},

{"Role": { name: "what_role", description: "to mention a role", required: false }},

{"IntChoices": { name: "what_ping", description: "to Get to Choices in a option as a integer", required: true, choices: [["Bot", 1], ["Discord Api", 2]] },

{"StringChoices": { name: "what_ping", description: "String Choices", required: true, choices: [["Bot", "botping"], ["Discord Api", "api"]] }},
```

# How To Use Them?

### Example for The 1st meaning The Ingeger:

`interacton.getInteger("example_int")`