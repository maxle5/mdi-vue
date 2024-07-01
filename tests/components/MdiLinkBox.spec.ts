
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLinkBox from "../../src/components/MdiLinkBox.vue";

test("MdiLinkBox snapshot", () => {
  const wrapper = mount(MdiLinkBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
