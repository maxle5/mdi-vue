
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEyedropperPlus from "../../src/components/MdiEyedropperPlus.vue";

test("MdiEyedropperPlus snapshot", () => {
  const wrapper = mount(MdiEyedropperPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
