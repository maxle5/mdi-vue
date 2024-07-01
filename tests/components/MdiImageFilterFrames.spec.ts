
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiImageFilterFrames from "../../src/components/MdiImageFilterFrames.vue";

test("MdiImageFilterFrames snapshot", () => {
  const wrapper = mount(MdiImageFilterFrames, {});
  expect(wrapper.html()).toMatchSnapshot();
});
