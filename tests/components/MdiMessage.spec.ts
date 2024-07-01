
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMessage from "../../src/components/MdiMessage.vue";

test("MdiMessage snapshot", () => {
  const wrapper = mount(MdiMessage, {});
  expect(wrapper.html()).toMatchSnapshot();
});
