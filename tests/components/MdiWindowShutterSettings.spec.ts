
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWindowShutterSettings from "../../src/components/MdiWindowShutterSettings.vue";

test("MdiWindowShutterSettings snapshot", () => {
  const wrapper = mount(MdiWindowShutterSettings, {});
  expect(wrapper.html()).toMatchSnapshot();
});
