
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVolumeMute from "../../src/components/MdiVolumeMute.vue";

test("MdiVolumeMute snapshot", () => {
  const wrapper = mount(MdiVolumeMute, {});
  expect(wrapper.html()).toMatchSnapshot();
});
