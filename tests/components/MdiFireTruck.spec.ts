
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFireTruck from "../../src/components/MdiFireTruck.vue";

test("MdiFireTruck snapshot", () => {
  const wrapper = mount(MdiFireTruck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
