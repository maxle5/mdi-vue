
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardBulletedSettingsOutline from "../../src/components/MdiCardBulletedSettingsOutline.vue";

test("MdiCardBulletedSettingsOutline snapshot", () => {
  const wrapper = mount(MdiCardBulletedSettingsOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
