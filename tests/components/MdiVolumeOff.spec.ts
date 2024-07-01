
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVolumeOff from "../../src/components/MdiVolumeOff.vue";

test("MdiVolumeOff snapshot", () => {
  const wrapper = mount(MdiVolumeOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
