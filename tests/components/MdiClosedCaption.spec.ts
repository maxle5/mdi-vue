
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClosedCaption from "../../src/components/MdiClosedCaption.vue";

test("MdiClosedCaption snapshot", () => {
  const wrapper = mount(MdiClosedCaption, {});
  expect(wrapper.html()).toMatchSnapshot();
});
