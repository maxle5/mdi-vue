
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderAccount from "../../src/components/MdiFolderAccount.vue";

test("MdiFolderAccount snapshot", () => {
  const wrapper = mount(MdiFolderAccount, {});
  expect(wrapper.html()).toMatchSnapshot();
});
