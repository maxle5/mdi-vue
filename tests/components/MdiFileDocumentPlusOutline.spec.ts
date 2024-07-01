
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileDocumentPlusOutline from "../../src/components/MdiFileDocumentPlusOutline.vue";

test("MdiFileDocumentPlusOutline snapshot", () => {
  const wrapper = mount(MdiFileDocumentPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
