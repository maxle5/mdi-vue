
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRomanNumeral1 from "../../src/components/MdiRomanNumeral1.vue";

test("MdiRomanNumeral1 snapshot", () => {
  const wrapper = mount(MdiRomanNumeral1, {});
  expect(wrapper.html()).toMatchSnapshot();
});
