
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTruckPlus from "../../src/components/MdiTruckPlus.vue";

test("MdiTruckPlus snapshot", () => {
  const wrapper = mount(MdiTruckPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
