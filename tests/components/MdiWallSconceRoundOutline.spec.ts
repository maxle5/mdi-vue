
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWallSconceRoundOutline from "../../src/components/MdiWallSconceRoundOutline.vue";

test("MdiWallSconceRoundOutline snapshot", () => {
  const wrapper = mount(MdiWallSconceRoundOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
