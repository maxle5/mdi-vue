
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRomanNumeral8 from "../../src/components/MdiRomanNumeral8.vue";

test("MdiRomanNumeral8 snapshot", () => {
  const wrapper = mount(MdiRomanNumeral8, {});
  expect(wrapper.html()).toMatchSnapshot();
});
