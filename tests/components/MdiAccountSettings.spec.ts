
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountSettings from "../../src/components/MdiAccountSettings.vue";

test("MdiAccountSettings snapshot", () => {
  const wrapper = mount(MdiAccountSettings, {});
  expect(wrapper.html()).toMatchSnapshot();
});
