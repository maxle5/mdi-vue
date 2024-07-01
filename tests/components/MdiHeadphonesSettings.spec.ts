
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeadphonesSettings from "../../src/components/MdiHeadphonesSettings.vue";

test("MdiHeadphonesSettings snapshot", () => {
  const wrapper = mount(MdiHeadphonesSettings, {});
  expect(wrapper.html()).toMatchSnapshot();
});
