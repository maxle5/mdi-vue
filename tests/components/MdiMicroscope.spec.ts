
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMicroscope from "../../src/components/MdiMicroscope.vue";

test("MdiMicroscope snapshot", () => {
  const wrapper = mount(MdiMicroscope, {});
  expect(wrapper.html()).toMatchSnapshot();
});
