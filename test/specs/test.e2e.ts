import { browser } from '@wdio/globals';
import * as assert from "assert";

describe('Javascript execution', () => {
    it('works', async () => {
        await browser.url(`https://www.example.org/`);

        const result = await browser.execute(() => {
            function fn() {}
            return "Success!";
        });

        assert.equal(result, "Success!");
    })
})

