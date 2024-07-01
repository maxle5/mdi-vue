
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBriefcaseUploadOutline from "../../src/components/MdiBriefcaseUploadOutline.vue";

test("MdiBriefcaseUploadOutline snapshot", () => {
  const wrapper = mount(MdiBriefcaseUploadOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
