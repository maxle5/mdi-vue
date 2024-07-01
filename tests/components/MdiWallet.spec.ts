
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWallet from "../../src/components/MdiWallet.vue";

test("MdiWallet snapshot", () => {
  const wrapper = mount(MdiWallet, {});
  expect(wrapper.html()).toMatchSnapshot();
});
