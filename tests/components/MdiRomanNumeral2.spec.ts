
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRomanNumeral2 from "../../src/components/MdiRomanNumeral2.vue";

test("MdiRomanNumeral2 snapshot", () => {
  const wrapper = mount(MdiRomanNumeral2, {});
  expect(wrapper.html()).toMatchSnapshot();
});
