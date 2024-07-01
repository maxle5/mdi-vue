
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShieldOff from "../../src/components/MdiShieldOff.vue";

test("MdiShieldOff snapshot", () => {
  const wrapper = mount(MdiShieldOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
