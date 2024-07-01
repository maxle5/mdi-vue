
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileDocumentOutline from "../../src/components/MdiFileDocumentOutline.vue";

test("MdiFileDocumentOutline snapshot", () => {
  const wrapper = mount(MdiFileDocumentOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
