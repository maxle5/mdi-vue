
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBriefcaseEdit from "../../src/components/MdiBriefcaseEdit.vue";

test("MdiBriefcaseEdit snapshot", () => {
  const wrapper = mount(MdiBriefcaseEdit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
