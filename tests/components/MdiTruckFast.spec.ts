
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTruckFast from "../../src/components/MdiTruckFast.vue";

test("MdiTruckFast snapshot", () => {
  const wrapper = mount(MdiTruckFast, {});
  expect(wrapper.html()).toMatchSnapshot();
});
