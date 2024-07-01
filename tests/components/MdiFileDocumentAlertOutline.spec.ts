
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileDocumentAlertOutline from "../../src/components/MdiFileDocumentAlertOutline.vue";

test("MdiFileDocumentAlertOutline snapshot", () => {
  const wrapper = mount(MdiFileDocumentAlertOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
