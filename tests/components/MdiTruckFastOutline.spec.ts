
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTruckFastOutline from "../../src/components/MdiTruckFastOutline.vue";

test("MdiTruckFastOutline snapshot", () => {
  const wrapper = mount(MdiTruckFastOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
