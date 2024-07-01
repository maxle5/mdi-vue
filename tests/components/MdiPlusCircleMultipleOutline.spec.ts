
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPlusCircleMultipleOutline from "../../src/components/MdiPlusCircleMultipleOutline.vue";

test("MdiPlusCircleMultipleOutline snapshot", () => {
  const wrapper = mount(MdiPlusCircleMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
