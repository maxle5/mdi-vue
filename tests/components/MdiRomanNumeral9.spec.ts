
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRomanNumeral9 from "../../src/components/MdiRomanNumeral9.vue";

test("MdiRomanNumeral9 snapshot", () => {
  const wrapper = mount(MdiRomanNumeral9, {});
  expect(wrapper.html()).toMatchSnapshot();
});
