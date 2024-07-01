
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOrderNumericDescending from "../../src/components/MdiOrderNumericDescending.vue";

test("MdiOrderNumericDescending snapshot", () => {
  const wrapper = mount(MdiOrderNumericDescending, {});
  expect(wrapper.html()).toMatchSnapshot();
});
