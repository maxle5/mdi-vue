
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSettingsHelper from "../../src/components/MdiSettingsHelper.vue";

test("MdiSettingsHelper snapshot", () => {
  const wrapper = mount(MdiSettingsHelper, {});
  expect(wrapper.html()).toMatchSnapshot();
});
