
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWindowShutter from "../../src/components/MdiWindowShutter.vue";

test("MdiWindowShutter snapshot", () => {
  const wrapper = mount(MdiWindowShutter, {});
  expect(wrapper.html()).toMatchSnapshot();
});
