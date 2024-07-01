
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTruckOffRoad from "../../src/components/MdiTruckOffRoad.vue";

test("MdiTruckOffRoad snapshot", () => {
  const wrapper = mount(MdiTruckOffRoad, {});
  expect(wrapper.html()).toMatchSnapshot();
});
