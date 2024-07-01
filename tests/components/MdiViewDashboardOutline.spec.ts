
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiViewDashboardOutline from "../../src/components/MdiViewDashboardOutline.vue";

test("MdiViewDashboardOutline snapshot", () => {
  const wrapper = mount(MdiViewDashboardOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
