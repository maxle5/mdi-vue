
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShieldRefreshOutline from "../../src/components/MdiShieldRefreshOutline.vue";

test("MdiShieldRefreshOutline snapshot", () => {
  const wrapper = mount(MdiShieldRefreshOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
