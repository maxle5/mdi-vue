
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileDocumentMultipleOutline from "../../src/components/MdiFileDocumentMultipleOutline.vue";

test("MdiFileDocumentMultipleOutline snapshot", () => {
  const wrapper = mount(MdiFileDocumentMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
