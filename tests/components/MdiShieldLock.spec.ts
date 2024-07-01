
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShieldLock from "../../src/components/MdiShieldLock.vue";

test("MdiShieldLock snapshot", () => {
  const wrapper = mount(MdiShieldLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
