
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCoachLamp from "../../src/components/MdiCoachLamp.vue";

test("MdiCoachLamp snapshot", () => {
  const wrapper = mount(MdiCoachLamp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
