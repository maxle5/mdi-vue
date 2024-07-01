
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShieldAirplaneOutline from "../../src/components/MdiShieldAirplaneOutline.vue";

test("MdiShieldAirplaneOutline snapshot", () => {
  const wrapper = mount(MdiShieldAirplaneOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
