
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTruckOffRoadOff from "../../src/components/MdiTruckOffRoadOff.vue";

test("MdiTruckOffRoadOff snapshot", () => {
  const wrapper = mount(MdiTruckOffRoadOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
