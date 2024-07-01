
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClover from "../../src/components/MdiClover.vue";

test("MdiClover snapshot", () => {
  const wrapper = mount(MdiClover, {});
  expect(wrapper.html()).toMatchSnapshot();
});
