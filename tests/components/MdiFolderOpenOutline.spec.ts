
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderOpenOutline from "../../src/components/MdiFolderOpenOutline.vue";

test("MdiFolderOpenOutline snapshot", () => {
  const wrapper = mount(MdiFolderOpenOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
