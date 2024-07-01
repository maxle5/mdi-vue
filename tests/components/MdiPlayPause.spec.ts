
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPlayPause from "../../src/components/MdiPlayPause.vue";

test("MdiPlayPause snapshot", () => {
  const wrapper = mount(MdiPlayPause, {});
  expect(wrapper.html()).toMatchSnapshot();
});
