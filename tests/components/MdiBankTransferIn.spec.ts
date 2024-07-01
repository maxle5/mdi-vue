
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBankTransferIn from "../../src/components/MdiBankTransferIn.vue";

test("MdiBankTransferIn snapshot", () => {
  const wrapper = mount(MdiBankTransferIn, {});
  expect(wrapper.html()).toMatchSnapshot();
});
