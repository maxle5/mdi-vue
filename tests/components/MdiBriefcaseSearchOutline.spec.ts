
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBriefcaseSearchOutline from "../../src/components/MdiBriefcaseSearchOutline.vue";

test("MdiBriefcaseSearchOutline snapshot", () => {
  const wrapper = mount(MdiBriefcaseSearchOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
