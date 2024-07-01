
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWalletTravel from "../../src/components/MdiWalletTravel.vue";

test("MdiWalletTravel snapshot", () => {
  const wrapper = mount(MdiWalletTravel, {});
  expect(wrapper.html()).toMatchSnapshot();
});
