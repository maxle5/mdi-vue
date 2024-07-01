
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiXml from "../../src/components/MdiXml.vue";

test("MdiXml snapshot", () => {
  const wrapper = mount(MdiXml, {});
  expect(wrapper.html()).toMatchSnapshot();
});
