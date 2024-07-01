
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhoneRefresh from "../../src/components/MdiPhoneRefresh.vue";

test("MdiPhoneRefresh snapshot", () => {
  const wrapper = mount(MdiPhoneRefresh, {});
  expect(wrapper.html()).toMatchSnapshot();
});
