
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderSearch from "../../src/components/MdiFolderSearch.vue";

test("MdiFolderSearch snapshot", () => {
  const wrapper = mount(MdiFolderSearch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
