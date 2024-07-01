
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRomanNumeral4 from "../../src/components/MdiRomanNumeral4.vue";

test("MdiRomanNumeral4 snapshot", () => {
  const wrapper = mount(MdiRomanNumeral4, {});
  expect(wrapper.html()).toMatchSnapshot();
});
