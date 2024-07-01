
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEyeSettings from "../../src/components/MdiEyeSettings.vue";

test("MdiEyeSettings snapshot", () => {
  const wrapper = mount(MdiEyeSettings, {});
  expect(wrapper.html()).toMatchSnapshot();
});
