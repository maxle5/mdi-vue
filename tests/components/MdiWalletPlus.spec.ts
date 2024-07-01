
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWalletPlus from "../../src/components/MdiWalletPlus.vue";

test("MdiWalletPlus snapshot", () => {
  const wrapper = mount(MdiWalletPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
