
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTruckPlusOutline from "../../src/components/MdiTruckPlusOutline.vue";

test("MdiTruckPlusOutline snapshot", () => {
  const wrapper = mount(MdiTruckPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
