
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShieldBugOutline from "../../src/components/MdiShieldBugOutline.vue";

test("MdiShieldBugOutline snapshot", () => {
  const wrapper = mount(MdiShieldBugOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
