
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRomanNumeral7 from "../../src/components/MdiRomanNumeral7.vue";

test("MdiRomanNumeral7 snapshot", () => {
  const wrapper = mount(MdiRomanNumeral7, {});
  expect(wrapper.html()).toMatchSnapshot();
});
