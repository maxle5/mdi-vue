
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphabeticalOff from "../../src/components/MdiAlphabeticalOff.vue";

test("MdiAlphabeticalOff snapshot", () => {
  const wrapper = mount(MdiAlphabeticalOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
