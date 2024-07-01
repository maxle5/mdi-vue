
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardBulletedSettings from "../../src/components/MdiCardBulletedSettings.vue";

test("MdiCardBulletedSettings snapshot", () => {
  const wrapper = mount(MdiCardBulletedSettings, {});
  expect(wrapper.html()).toMatchSnapshot();
});
