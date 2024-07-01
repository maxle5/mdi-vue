
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGamepadRoundUp from "../../src/components/MdiGamepadRoundUp.vue";

test("MdiGamepadRoundUp snapshot", () => {
  const wrapper = mount(MdiGamepadRoundUp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
