
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAttachmentRemove from "../../src/components/MdiAttachmentRemove.vue";

test("MdiAttachmentRemove snapshot", () => {
  const wrapper = mount(MdiAttachmentRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
