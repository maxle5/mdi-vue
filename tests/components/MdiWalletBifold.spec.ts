
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWalletBifold from "../../src/components/MdiWalletBifold.vue";

test("MdiWalletBifold snapshot", () => {
  const wrapper = mount(MdiWalletBifold, {});
  expect(wrapper.html()).toMatchSnapshot();
});
