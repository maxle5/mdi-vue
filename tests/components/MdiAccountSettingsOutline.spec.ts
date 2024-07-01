
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountSettingsOutline from "../../src/components/MdiAccountSettingsOutline.vue";

test("MdiAccountSettingsOutline snapshot", () => {
  const wrapper = mount(MdiAccountSettingsOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
