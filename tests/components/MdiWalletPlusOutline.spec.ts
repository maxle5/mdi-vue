
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWalletPlusOutline from "../../src/components/MdiWalletPlusOutline.vue";

test("MdiWalletPlusOutline snapshot", () => {
  const wrapper = mount(MdiWalletPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
