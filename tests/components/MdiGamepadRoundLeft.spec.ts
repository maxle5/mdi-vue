
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGamepadRoundLeft from "../../src/components/MdiGamepadRoundLeft.vue";

test("MdiGamepadRoundLeft snapshot", () => {
  const wrapper = mount(MdiGamepadRoundLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
