
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiThoughtBubble from "../../src/components/MdiThoughtBubble.vue";

test("MdiThoughtBubble snapshot", () => {
  const wrapper = mount(MdiThoughtBubble, {});
  expect(wrapper.html()).toMatchSnapshot();
});
