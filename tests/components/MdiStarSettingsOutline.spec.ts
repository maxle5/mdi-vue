
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStarSettingsOutline from "../../src/components/MdiStarSettingsOutline.vue";

test("MdiStarSettingsOutline snapshot", () => {
  const wrapper = mount(MdiStarSettingsOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
