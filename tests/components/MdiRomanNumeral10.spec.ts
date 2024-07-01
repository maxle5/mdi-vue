
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRomanNumeral10 from "../../src/components/MdiRomanNumeral10.vue";

test("MdiRomanNumeral10 snapshot", () => {
  const wrapper = mount(MdiRomanNumeral10, {});
  expect(wrapper.html()).toMatchSnapshot();
});
