
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileDocumentAlert from "../../src/components/MdiFileDocumentAlert.vue";

test("MdiFileDocumentAlert snapshot", () => {
  const wrapper = mount(MdiFileDocumentAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
