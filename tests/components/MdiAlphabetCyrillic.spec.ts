
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphabetCyrillic from "../../src/components/MdiAlphabetCyrillic.vue";

test("MdiAlphabetCyrillic snapshot", () => {
  const wrapper = mount(MdiAlphabetCyrillic, {});
  expect(wrapper.html()).toMatchSnapshot();
});
