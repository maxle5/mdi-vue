
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderWrench from "../../src/components/MdiFolderWrench.vue";

test("MdiFolderWrench snapshot", () => {
  const wrapper = mount(MdiFolderWrench, {});
  expect(wrapper.html()).toMatchSnapshot();
});
