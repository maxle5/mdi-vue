
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPause from "../../src/components/MdiPause.vue";

test("MdiPause snapshot", () => {
  const wrapper = mount(MdiPause, {});
  expect(wrapper.html()).toMatchSnapshot();
});
