
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTruckRemoveOutline from "../../src/components/MdiTruckRemoveOutline.vue";

test("MdiTruckRemoveOutline snapshot", () => {
  const wrapper = mount(MdiTruckRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
