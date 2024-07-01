
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAbjadArabic from "../../src/components/MdiAbjadArabic.vue";

test("MdiAbjadArabic snapshot", () => {
  const wrapper = mount(MdiAbjadArabic, {});
  expect(wrapper.html()).toMatchSnapshot();
});
