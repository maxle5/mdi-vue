
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileDocumentRemoveOutline from "../../src/components/MdiFileDocumentRemoveOutline.vue";

test("MdiFileDocumentRemoveOutline snapshot", () => {
  const wrapper = mount(MdiFileDocumentRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
