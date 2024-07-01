
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphabetLatin from "../../src/components/MdiAlphabetLatin.vue";

test("MdiAlphabetLatin snapshot", () => {
  const wrapper = mount(MdiAlphabetLatin, {});
  expect(wrapper.html()).toMatchSnapshot();
});
