
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiImageFilterCenterFocusWeak from "../../src/components/MdiImageFilterCenterFocusWeak.vue";

test("MdiImageFilterCenterFocusWeak snapshot", () => {
  const wrapper = mount(MdiImageFilterCenterFocusWeak, {});
  expect(wrapper.html()).toMatchSnapshot();
});
