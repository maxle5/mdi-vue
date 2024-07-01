
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAttachmentCheck from "../../src/components/MdiAttachmentCheck.vue";

test("MdiAttachmentCheck snapshot", () => {
  const wrapper = mount(MdiAttachmentCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
