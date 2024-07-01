
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWindowMinimize from "../../src/components/MdiWindowMinimize.vue";

test("MdiWindowMinimize snapshot", () => {
  const wrapper = mount(MdiWindowMinimize, {});
  expect(wrapper.html()).toMatchSnapshot();
});
