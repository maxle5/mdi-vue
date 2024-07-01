
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileSettingsOutline from "../../src/components/MdiFileSettingsOutline.vue";

test("MdiFileSettingsOutline snapshot", () => {
  const wrapper = mount(MdiFileSettingsOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
