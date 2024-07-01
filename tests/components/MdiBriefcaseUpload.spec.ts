
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBriefcaseUpload from "../../src/components/MdiBriefcaseUpload.vue";

test("MdiBriefcaseUpload snapshot", () => {
  const wrapper = mount(MdiBriefcaseUpload, {});
  expect(wrapper.html()).toMatchSnapshot();
});
