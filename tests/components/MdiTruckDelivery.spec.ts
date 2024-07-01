
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTruckDelivery from "../../src/components/MdiTruckDelivery.vue";

test("MdiTruckDelivery snapshot", () => {
  const wrapper = mount(MdiTruckDelivery, {});
  expect(wrapper.html()).toMatchSnapshot();
});
