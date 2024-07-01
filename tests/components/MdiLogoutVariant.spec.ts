
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLogoutVariant from "../../src/components/MdiLogoutVariant.vue";

test("MdiLogoutVariant snapshot", () => {
  const wrapper = mount(MdiLogoutVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
