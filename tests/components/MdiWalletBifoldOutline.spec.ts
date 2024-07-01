
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWalletBifoldOutline from "../../src/components/MdiWalletBifoldOutline.vue";

test("MdiWalletBifoldOutline snapshot", () => {
  const wrapper = mount(MdiWalletBifoldOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
