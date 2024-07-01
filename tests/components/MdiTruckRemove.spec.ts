
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTruckRemove from "../../src/components/MdiTruckRemove.vue";

test("MdiTruckRemove snapshot", () => {
  const wrapper = mount(MdiTruckRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
