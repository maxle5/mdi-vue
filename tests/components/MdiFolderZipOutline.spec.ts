
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderZipOutline from "../../src/components/MdiFolderZipOutline.vue";

test("MdiFolderZipOutline snapshot", () => {
  const wrapper = mount(MdiFolderZipOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
