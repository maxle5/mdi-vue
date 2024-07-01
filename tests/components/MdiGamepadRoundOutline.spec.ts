
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGamepadRoundOutline from "../../src/components/MdiGamepadRoundOutline.vue";

test("MdiGamepadRoundOutline snapshot", () => {
  const wrapper = mount(MdiGamepadRoundOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
