
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLanguageHaskell from "../../src/components/MdiLanguageHaskell.vue";

test("MdiLanguageHaskell snapshot", () => {
  const wrapper = mount(MdiLanguageHaskell, {});
  expect(wrapper.html()).toMatchSnapshot();
});
