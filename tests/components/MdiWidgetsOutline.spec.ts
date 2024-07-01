
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWidgetsOutline from "../../src/components/MdiWidgetsOutline.vue";

test("MdiWidgetsOutline snapshot", () => {
  const wrapper = mount(MdiWidgetsOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
