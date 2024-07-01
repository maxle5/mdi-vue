
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShieldAirplane from "../../src/components/MdiShieldAirplane.vue";

test("MdiShieldAirplane snapshot", () => {
  const wrapper = mount(MdiShieldAirplane, {});
  expect(wrapper.html()).toMatchSnapshot();
});
