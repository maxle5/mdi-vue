
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVolumeVibrate from "../../src/components/MdiVolumeVibrate.vue";

test("MdiVolumeVibrate snapshot", () => {
  const wrapper = mount(MdiVolumeVibrate, {});
  expect(wrapper.html()).toMatchSnapshot();
});
