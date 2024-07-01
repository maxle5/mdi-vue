
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiImageFilterCenterFocusStrongOutline from "../../src/components/MdiImageFilterCenterFocusStrongOutline.vue";

test("MdiImageFilterCenterFocusStrongOutline snapshot", () => {
  const wrapper = mount(MdiImageFilterCenterFocusStrongOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
