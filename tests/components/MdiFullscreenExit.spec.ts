
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFullscreenExit from "../../src/components/MdiFullscreenExit.vue";

test("MdiFullscreenExit snapshot", () => {
  const wrapper = mount(MdiFullscreenExit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
