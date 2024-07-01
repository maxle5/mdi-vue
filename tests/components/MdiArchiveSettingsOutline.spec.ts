
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArchiveSettingsOutline from "../../src/components/MdiArchiveSettingsOutline.vue";

test("MdiArchiveSettingsOutline snapshot", () => {
  const wrapper = mount(MdiArchiveSettingsOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
