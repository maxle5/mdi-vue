
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVolumeSource from "../../src/components/MdiVolumeSource.vue";

test("MdiVolumeSource snapshot", () => {
  const wrapper = mount(MdiVolumeSource, {});
  expect(wrapper.html()).toMatchSnapshot();
});
