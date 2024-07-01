
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTruckCheckOutline from "../../src/components/MdiTruckCheckOutline.vue";

test("MdiTruckCheckOutline snapshot", () => {
  const wrapper = mount(MdiTruckCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
