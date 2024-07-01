
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWindowShutterOpen from "../../src/components/MdiWindowShutterOpen.vue";

test("MdiWindowShutterOpen snapshot", () => {
  const wrapper = mount(MdiWindowShutterOpen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
