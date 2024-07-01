
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTabletDashboard from "../../src/components/MdiTabletDashboard.vue";

test("MdiTabletDashboard snapshot", () => {
  const wrapper = mount(MdiTabletDashboard, {});
  expect(wrapper.html()).toMatchSnapshot();
});
