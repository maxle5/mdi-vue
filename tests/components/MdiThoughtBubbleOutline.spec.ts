
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiThoughtBubbleOutline from "../../src/components/MdiThoughtBubbleOutline.vue";

test("MdiThoughtBubbleOutline snapshot", () => {
  const wrapper = mount(MdiThoughtBubbleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
