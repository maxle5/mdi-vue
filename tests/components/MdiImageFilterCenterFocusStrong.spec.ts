
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiImageFilterCenterFocusStrong from "../../src/components/MdiImageFilterCenterFocusStrong.vue";

test("MdiImageFilterCenterFocusStrong snapshot", () => {
  const wrapper = mount(MdiImageFilterCenterFocusStrong, {});
  expect(wrapper.html()).toMatchSnapshot();
});
