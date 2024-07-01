
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLinkCircle from "../../src/components/MdiLinkCircle.vue";

test("MdiLinkCircle snapshot", () => {
  const wrapper = mount(MdiLinkCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
