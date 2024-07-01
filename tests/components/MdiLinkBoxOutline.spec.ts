
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLinkBoxOutline from "../../src/components/MdiLinkBoxOutline.vue";

test("MdiLinkBoxOutline snapshot", () => {
  const wrapper = mount(MdiLinkBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
