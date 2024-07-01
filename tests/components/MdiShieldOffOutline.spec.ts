
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShieldOffOutline from "../../src/components/MdiShieldOffOutline.vue";

test("MdiShieldOffOutline snapshot", () => {
  const wrapper = mount(MdiShieldOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
