
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiButtonCursor from "../../src/components/MdiButtonCursor.vue";

test("MdiButtonCursor snapshot", () => {
  const wrapper = mount(MdiButtonCursor, {});
  expect(wrapper.html()).toMatchSnapshot();
});
