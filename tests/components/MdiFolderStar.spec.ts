
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderStar from "../../src/components/MdiFolderStar.vue";

test("MdiFolderStar snapshot", () => {
  const wrapper = mount(MdiFolderStar, {});
  expect(wrapper.html()).toMatchSnapshot();
});
