
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderArrowLeft from "../../src/components/MdiFolderArrowLeft.vue";

test("MdiFolderArrowLeft snapshot", () => {
  const wrapper = mount(MdiFolderArrowLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
