
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBitcoin from "../../src/components/MdiBitcoin.vue";

test("MdiBitcoin snapshot", () => {
  const wrapper = mount(MdiBitcoin, {});
  expect(wrapper.html()).toMatchSnapshot();
});
