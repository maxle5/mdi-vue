
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileDocument from "../../src/components/MdiFileDocument.vue";

test("MdiFileDocument snapshot", () => {
  const wrapper = mount(MdiFileDocument, {});
  expect(wrapper.html()).toMatchSnapshot();
});
