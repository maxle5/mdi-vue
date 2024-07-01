
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWallSconceRound from "../../src/components/MdiWallSconceRound.vue";

test("MdiWallSconceRound snapshot", () => {
  const wrapper = mount(MdiWallSconceRound, {});
  expect(wrapper.html()).toMatchSnapshot();
});
