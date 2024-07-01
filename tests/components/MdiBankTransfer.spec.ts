
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBankTransfer from "../../src/components/MdiBankTransfer.vue";

test("MdiBankTransfer snapshot", () => {
  const wrapper = mount(MdiBankTransfer, {});
  expect(wrapper.html()).toMatchSnapshot();
});
