
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMusicNoteSixteenthDotted from "../../src/components/MdiMusicNoteSixteenthDotted.vue";

test("MdiMusicNoteSixteenthDotted snapshot", () => {
  const wrapper = mount(MdiMusicNoteSixteenthDotted, {});
  expect(wrapper.html()).toMatchSnapshot();
});
