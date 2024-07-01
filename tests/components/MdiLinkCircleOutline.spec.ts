
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLinkCircleOutline from "../../src/components/MdiLinkCircleOutline.vue";

test("MdiLinkCircleOutline snapshot", () => {
  const wrapper = mount(MdiLinkCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
