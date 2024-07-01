
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileDocumentRefresh from "../../src/components/MdiFileDocumentRefresh.vue";

test("MdiFileDocumentRefresh snapshot", () => {
  const wrapper = mount(MdiFileDocumentRefresh, {});
  expect(wrapper.html()).toMatchSnapshot();
});
