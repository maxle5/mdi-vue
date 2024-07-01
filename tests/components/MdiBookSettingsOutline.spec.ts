
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookSettingsOutline from "../../src/components/MdiBookSettingsOutline.vue";

test("MdiBookSettingsOutline snapshot", () => {
  const wrapper = mount(MdiBookSettingsOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
