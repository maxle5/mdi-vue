
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGamepadRoundRight from "../../src/components/MdiGamepadRoundRight.vue";

test("MdiGamepadRoundRight snapshot", () => {
  const wrapper = mount(MdiGamepadRoundRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
