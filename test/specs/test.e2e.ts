import { browser } from '@wdio/globals';
import * as assert from "assert";

describe('Javascript execution', () => {
    it('works', async () => {
        await browser.url(`https://www.example.org/`);

        const result = await browser.execute(() => {
            const foo = {
                method: function() {
                    return "Success!";
                }
            };
            return foo.method();
        });

        assert.equal(result, "Success!");
    })
})

