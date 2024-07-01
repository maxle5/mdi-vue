
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiViewDashboardVariantOutline from "../../src/components/MdiViewDashboardVariantOutline.vue";

test("MdiViewDashboardVariantOutline snapshot", () => {
  const wrapper = mount(MdiViewDashboardVariantOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
