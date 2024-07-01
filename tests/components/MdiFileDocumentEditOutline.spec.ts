
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileDocumentEditOutline from "../../src/components/MdiFileDocumentEditOutline.vue";

test("MdiFileDocumentEditOutline snapshot", () => {
  const wrapper = mount(MdiFileDocumentEditOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
