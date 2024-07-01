
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWindowClosed from "../../src/components/MdiWindowClosed.vue";

test("MdiWindowClosed snapshot", () => {
  const wrapper = mount(MdiWindowClosed, {});
  expect(wrapper.html()).toMatchSnapshot();
});
