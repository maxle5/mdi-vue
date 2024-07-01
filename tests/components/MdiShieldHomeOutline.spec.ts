
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShieldHomeOutline from "../../src/components/MdiShieldHomeOutline.vue";

test("MdiShieldHomeOutline snapshot", () => {
  const wrapper = mount(MdiShieldHomeOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
