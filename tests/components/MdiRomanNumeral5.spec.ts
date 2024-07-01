
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRomanNumeral5 from "../../src/components/MdiRomanNumeral5.vue";

test("MdiRomanNumeral5 snapshot", () => {
  const wrapper = mount(MdiRomanNumeral5, {});
  expect(wrapper.html()).toMatchSnapshot();
});
