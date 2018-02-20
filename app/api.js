let api = {
    generateId: (len = 5) => {
        let text = "";
        let possible = "0Aa1Bb2Cc3Dd4Ee5FfgGg7Hh8Ii9Jj0Kk1Ll2Mm3Nn4Oo5Pp6Qq7Rr8Ss9Tt0Uu12Vv13Ww14XxY15yZzaAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ0123456789";

        for (var i = 0; i < len; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;

    }
}

export default api;