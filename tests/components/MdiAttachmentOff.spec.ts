
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAttachmentOff from "../../src/components/MdiAttachmentOff.vue";

test("MdiAttachmentOff snapshot", () => {
  const wrapper = mount(MdiAttachmentOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
