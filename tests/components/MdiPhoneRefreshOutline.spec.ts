
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhoneRefreshOutline from "../../src/components/MdiPhoneRefreshOutline.vue";

test("MdiPhoneRefreshOutline snapshot", () => {
  const wrapper = mount(MdiPhoneRefreshOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
