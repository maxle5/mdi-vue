
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeartSettingsOutline from "../../src/components/MdiHeartSettingsOutline.vue";

test("MdiHeartSettingsOutline snapshot", () => {
  const wrapper = mount(MdiHeartSettingsOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
