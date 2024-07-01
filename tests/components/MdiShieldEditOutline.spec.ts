
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShieldEditOutline from "../../src/components/MdiShieldEditOutline.vue";

test("MdiShieldEditOutline snapshot", () => {
  const wrapper = mount(MdiShieldEditOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
