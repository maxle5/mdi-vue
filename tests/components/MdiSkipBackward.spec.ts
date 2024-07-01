
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSkipBackward from "../../src/components/MdiSkipBackward.vue";

test("MdiSkipBackward snapshot", () => {
  const wrapper = mount(MdiSkipBackward, {});
  expect(wrapper.html()).toMatchSnapshot();
});
