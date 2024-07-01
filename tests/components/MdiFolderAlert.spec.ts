
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderAlert from "../../src/components/MdiFolderAlert.vue";

test("MdiFolderAlert snapshot", () => {
  const wrapper = mount(MdiFolderAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
