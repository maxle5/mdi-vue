
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAttachmentLock from "../../src/components/MdiAttachmentLock.vue";

test("MdiAttachmentLock snapshot", () => {
  const wrapper = mount(MdiAttachmentLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
