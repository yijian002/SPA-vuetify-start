module.exports = {
    "helpers": {
        "if_or": function(v1, v2, options) {
            if (v1 || v2) {
                return options.fn(this);
            }

            return options.inverse(this);
        }
    },
    "prompts": {
        "name": {
            "type": "string",
            "required": true,
            "message": "Project name"
        },
        "description": {
            "type": "string",
            "required": false,
            "message": "Project description",
            "default": "A SPA VUX project"
        },
        "author": {
            "type": "string",
            "message": "Author"
        },
        "axios": {
          "type": "confirm",
          "message": "Use axios?"
        },
        "lint": {
            "type": "confirm",
            "message": "Use ESLint to lint your code?"
        }
    },
    "filters": {
    },
    "completeMessage": "OK, Let's beginning.\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev"
};
