
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAttachment from "../../src/components/MdiAttachment.vue";

test("MdiAttachment snapshot", () => {
  const wrapper = mount(MdiAttachment, {});
  expect(wrapper.html()).toMatchSnapshot();
});
