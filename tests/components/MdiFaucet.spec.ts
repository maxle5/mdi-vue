
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFaucet from "../../src/components/MdiFaucet.vue";

test("MdiFaucet snapshot", () => {
  const wrapper = mount(MdiFaucet, {});
  expect(wrapper.html()).toMatchSnapshot();
});
