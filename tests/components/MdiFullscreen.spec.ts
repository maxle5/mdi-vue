
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFullscreen from "../../src/components/MdiFullscreen.vue";

test("MdiFullscreen snapshot", () => {
  const wrapper = mount(MdiFullscreen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
