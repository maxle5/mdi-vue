
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPlusBoxMultipleOutline from "../../src/components/MdiPlusBoxMultipleOutline.vue";

test("MdiPlusBoxMultipleOutline snapshot", () => {
  const wrapper = mount(MdiPlusBoxMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
