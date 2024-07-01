
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiViewDashboardVariant from "../../src/components/MdiViewDashboardVariant.vue";

test("MdiViewDashboardVariant snapshot", () => {
  const wrapper = mount(MdiViewDashboardVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
