
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWalletOutline from "../../src/components/MdiWalletOutline.vue";

test("MdiWalletOutline snapshot", () => {
  const wrapper = mount(MdiWalletOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
