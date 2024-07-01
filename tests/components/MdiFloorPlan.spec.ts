
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFloorPlan from "../../src/components/MdiFloorPlan.vue";

test("MdiFloorPlan snapshot", () => {
  const wrapper = mount(MdiFloorPlan, {});
  expect(wrapper.html()).toMatchSnapshot();
});
