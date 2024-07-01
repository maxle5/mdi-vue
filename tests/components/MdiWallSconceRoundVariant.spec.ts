
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWallSconceRoundVariant from "../../src/components/MdiWallSconceRoundVariant.vue";

test("MdiWallSconceRoundVariant snapshot", () => {
  const wrapper = mount(MdiWallSconceRoundVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
