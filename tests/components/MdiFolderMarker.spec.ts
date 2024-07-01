
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderMarker from "../../src/components/MdiFolderMarker.vue";

test("MdiFolderMarker snapshot", () => {
  const wrapper = mount(MdiFolderMarker, {});
  expect(wrapper.html()).toMatchSnapshot();
});
