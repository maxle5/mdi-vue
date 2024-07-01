
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRomanNumeral6 from "../../src/components/MdiRomanNumeral6.vue";

test("MdiRomanNumeral6 snapshot", () => {
  const wrapper = mount(MdiRomanNumeral6, {});
  expect(wrapper.html()).toMatchSnapshot();
});
