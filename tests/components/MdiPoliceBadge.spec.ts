
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPoliceBadge from "../../src/components/MdiPoliceBadge.vue";

test("MdiPoliceBadge snapshot", () => {
  const wrapper = mount(MdiPoliceBadge, {});
  expect(wrapper.html()).toMatchSnapshot();
});
