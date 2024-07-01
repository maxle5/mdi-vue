
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTruckDeliveryOutline from "../../src/components/MdiTruckDeliveryOutline.vue";

test("MdiTruckDeliveryOutline snapshot", () => {
  const wrapper = mount(MdiTruckDeliveryOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
