
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSkipForward from "../../src/components/MdiSkipForward.vue";

test("MdiSkipForward snapshot", () => {
  const wrapper = mount(MdiSkipForward, {});
  expect(wrapper.html()).toMatchSnapshot();
});
