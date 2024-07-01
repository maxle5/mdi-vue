
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVolumeEqual from "../../src/components/MdiVolumeEqual.vue";

test("MdiVolumeEqual snapshot", () => {
  const wrapper = mount(MdiVolumeEqual, {});
  expect(wrapper.html()).toMatchSnapshot();
});
