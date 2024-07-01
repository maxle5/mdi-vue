
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWallSconceOutline from "../../src/components/MdiWallSconceOutline.vue";

test("MdiWallSconceOutline snapshot", () => {
  const wrapper = mount(MdiWallSconceOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
