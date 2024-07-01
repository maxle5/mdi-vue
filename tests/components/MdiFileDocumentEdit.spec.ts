
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileDocumentEdit from "../../src/components/MdiFileDocumentEdit.vue";

test("MdiFileDocumentEdit snapshot", () => {
  const wrapper = mount(MdiFileDocumentEdit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
