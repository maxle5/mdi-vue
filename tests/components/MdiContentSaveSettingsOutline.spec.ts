
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiContentSaveSettingsOutline from "../../src/components/MdiContentSaveSettingsOutline.vue";

test("MdiContentSaveSettingsOutline snapshot", () => {
  const wrapper = mount(MdiContentSaveSettingsOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
