
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBankTransferOut from "../../src/components/MdiBankTransferOut.vue";

test("MdiBankTransferOut snapshot", () => {
  const wrapper = mount(MdiBankTransferOut, {});
  expect(wrapper.html()).toMatchSnapshot();
});
