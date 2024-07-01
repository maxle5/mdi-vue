
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWalletGiftcard from "../../src/components/MdiWalletGiftcard.vue";

test("MdiWalletGiftcard snapshot", () => {
  const wrapper = mount(MdiWalletGiftcard, {});
  expect(wrapper.html()).toMatchSnapshot();
});
