
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWallSconceRoundVariantOutline from "../../src/components/MdiWallSconceRoundVariantOutline.vue";

test("MdiWallSconceRoundVariantOutline snapshot", () => {
  const wrapper = mount(MdiWallSconceRoundVariantOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
