
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiViewDashboardEditOutline from "../../src/components/MdiViewDashboardEditOutline.vue";

test("MdiViewDashboardEditOutline snapshot", () => {
  const wrapper = mount(MdiViewDashboardEditOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
