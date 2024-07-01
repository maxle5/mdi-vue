
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWindowMaximize from "../../src/components/MdiWindowMaximize.vue";

test("MdiWindowMaximize snapshot", () => {
  const wrapper = mount(MdiWindowMaximize, {});
  expect(wrapper.html()).toMatchSnapshot();
});
