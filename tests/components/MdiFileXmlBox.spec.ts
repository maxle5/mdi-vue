
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileXmlBox from "../../src/components/MdiFileXmlBox.vue";

test("MdiFileXmlBox snapshot", () => {
  const wrapper = mount(MdiFileXmlBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
