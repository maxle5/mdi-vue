
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPoliceBadgeOutline from "../../src/components/MdiPoliceBadgeOutline.vue";

test("MdiPoliceBadgeOutline snapshot", () => {
  const wrapper = mount(MdiPoliceBadgeOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
