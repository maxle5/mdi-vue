
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVolumePlus from "../../src/components/MdiVolumePlus.vue";

test("MdiVolumePlus snapshot", () => {
  const wrapper = mount(MdiVolumePlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
