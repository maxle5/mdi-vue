
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShieldRefresh from "../../src/components/MdiShieldRefresh.vue";

test("MdiShieldRefresh snapshot", () => {
  const wrapper = mount(MdiShieldRefresh, {});
  expect(wrapper.html()).toMatchSnapshot();
});
