
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVolumeLow from "../../src/components/MdiVolumeLow.vue";

test("MdiVolumeLow snapshot", () => {
  const wrapper = mount(MdiVolumeLow, {});
  expect(wrapper.html()).toMatchSnapshot();
});
