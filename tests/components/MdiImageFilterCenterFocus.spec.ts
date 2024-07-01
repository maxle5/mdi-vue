
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiImageFilterCenterFocus from "../../src/components/MdiImageFilterCenterFocus.vue";

test("MdiImageFilterCenterFocus snapshot", () => {
  const wrapper = mount(MdiImageFilterCenterFocus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
