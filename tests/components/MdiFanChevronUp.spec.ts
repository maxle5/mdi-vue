
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFanChevronUp from "../../src/components/MdiFanChevronUp.vue";

test("MdiFanChevronUp snapshot", () => {
  const wrapper = mount(MdiFanChevronUp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
