
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRomanNumeral3 from "../../src/components/MdiRomanNumeral3.vue";

test("MdiRomanNumeral3 snapshot", () => {
  const wrapper = mount(MdiRomanNumeral3, {});
  expect(wrapper.html()).toMatchSnapshot();
});
